---
{"dg-publish":true,"permalink":"/draft/"}
---


## v4 gemini

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flashcard App</title>
<style>
  body { font-family: sans-serif; background: #f0f0f0; padding: 20px; }
  
  /* Toolbar Styles */
  #toolbar { margin-bottom:15px; display:flex; gap:10px; flex-wrap:wrap; }
  button { padding: 8px 12px; cursor: pointer; border: 1px solid #999; background: #fff; border-radius: 4px; }
  button:hover { background: #eee; }
  
  /* specific button colors */
  #btnCorrect { background-color: #d4edda; border-color: #c3e6cb; color: #155724; font-weight: bold; }
  #btnIncorrect { background-color: #f8d7da; border-color: #f5c6cb; color: #721c24; font-weight: bold; }
  #btnCorrect:hover { background-color: #c3e6cb; }
  #btnIncorrect:hover { background-color: #f1b0b7; }

  /* Card Container */
  #flashcards { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-start; min-height: 200px;}
  
  /* Flashcard Styles */
  .flashcard { 
    width: 300px; 
    height: 180px; 
    border: 2px solid #ccc; 
    perspective: 1000px; 
    cursor: pointer; 
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    display:flex; 
    align-items:center; 
    justify-content:center;
    background: #fff;
  }
  .flashcard:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
  
  .flashcard div { 
    width: 100%; height: 100%; backface-visibility: hidden; 
    display:flex; align-items:center; justify-content:center; text-align:center; 
    position:absolute; padding: 10px; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1); 
    color: #F9F9F9; font-size: 1em; overflow-wrap: break-word; word-wrap: break-word; line-height: 1.2em;  
  }
  
  .flashcard .front { background:#000; z-index: 2; transform: rotateY(0deg); }
  .flashcard .back { background:#222; transform: rotateY(180deg); z-index: 1; }
  
  .flashcard.flipped .front { transform: rotateY(180deg); }
  .flashcard.flipped .back { transform: rotateY(0deg); }
  
  /* Red Marking Styles */
  .flashcard.marked { border-color: red; box-shadow: 0 0 10px rgba(255, 0, 0, 0.2); }
  .flashcard.marked::after {
    content: "★";
    position: absolute;
    top: 5px;
    right: 10px;
    color: red;
    font-size: 1.5em;
    z-index: 10;
  }

  /* Stats Section */
  #statsContainer {
    display: none;
    background: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
  #statsContainer h2 { margin-top: 0; }
  .stat-box { font-size: 1.2em; margin: 10px 0; }
  .big-score { font-size: 2.5em; font-weight: bold; color: #333; }

  @media (max-width: 600px) { .flashcard { width: 100%; } }
</style>
</head>
<body>

<div id="toolbar">
  <button id="btnCorrect">✔ Correct</button>
  <button id="btnIncorrect">✘ Incorrect</button>
  <div style="width: 1px; background: #ccc; margin: 0 5px;"></div>
  
  <button id="flipAll">Flip All</button>
  <button id="shuffle">Shuffle</button>
  <button id="reset">Restart Review</button>
  <button id="prev">Prev</button>
  <button id="next">Next</button>
  <button id="mark">Mark (M)</button>
</div>

<div id="flashcards">
  <div class="flashcard" onclick="toggleCard(this)">
    <div class="front">Question 1</div>
    <div class="back">Answer 1</div>
  </div>
  <div class="flashcard" onclick="toggleCard(this)">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" onclick="toggleCard(this)">
    <div class="front">
        <img src="https://via.placeholder.com/150" style="max-width:100%; display:block; margin:0 auto;"/><br>
        Question 3: Image?
    </div>
    <div class="back">Answer 3: This is a placeholder image.</div>
  </div>
</div>

<div id="statsContainer">
    <h2>Review Finished!</h2>
    <div class="stat-box">Score: <span class="big-score" id="scorePercent">0%</span></div>
    <div class="stat-box">Correct: <span id="scoreCount">0</span> / <span id="totalCount">0</span></div>
    <div class="stat-box">Time: <span id="timeSpent">00:00</span></div>
    <br>
    <button onclick="restartSession()">Review Again</button>
</div>

<script>
const container = document.getElementById('flashcards');
const statsContainer = document.getElementById('statsContainer');
let cards = Array.from(document.querySelectorAll('.flashcard'));
let index = 0;

// State Tracking
let startTime = Date.now();
let results = []; // Stores true (correct) or false (incorrect)
let sessionActive = true;

// Initialize
function init() {
    cards = Array.from(document.querySelectorAll('.flashcard'));
    results = new Array(cards.length).fill(null);
    index = 0;
    startTime = Date.now();
    sessionActive = true;
    
    container.style.display = 'flex';
    statsContainer.style.display = 'none';
    
    // Reset cards visually
    cards.forEach(c => {
        c.classList.remove('flipped');
        c.classList.remove('marked');
        c.style.display = 'none';
    });
    
    showCard(index);
}

// Show one card at a time
function showCard(i) {
  if (i >= cards.length) {
    finishReview();
    return;
  }
  cards.forEach((c, j) => c.style.display = j === i ? 'flex' : 'none');
}

// Toggle flip
function toggleCard(card) {
  card.classList.toggle('flipped');
}

// Mark Logic
function toggleMark() {
    if (!sessionActive) return;
    // Find the currently visible card
    const visibleCard = cards[index];
    if (visibleCard) visibleCard.classList.toggle('marked');
}

// Scoring Logic
function recordScore(isCorrect) {
    if (!sessionActive) return;
    
    results[index] = isCorrect;
    
    // Auto-advance
    index++;
    showCard(index);
}

// Finish & Stats Logic
function finishReview() {
    sessionActive = false;
    container.style.display = 'none'; // Hide cards
    statsContainer.style.display = 'block'; // Show stats
    
    const endTime = Date.now();
    const timeDiff = endTime - startTime;
    
    // Calculate Counts
    const correct = results.filter(r => r === true).length;
    const total = cards.length;
    const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
    
    // Format Time (mm:ss)
    const minutes = Math.floor(timeDiff / 60000);
    const seconds = ((timeDiff % 60000) / 1000).toFixed(0);
    const formattedTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    
    // Update DOM
    document.getElementById('scorePercent').textContent = percent + "%";
    document.getElementById('scoreCount').textContent = correct;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('timeSpent').textContent = formattedTime;
}

function restartSession() {
    document.getElementById('reset').click();
}

// --- Event Listeners ---

// 1. Scoring Buttons
document.getElementById('btnCorrect').addEventListener('click', () => recordScore(true));
document.getElementById('btnIncorrect').addEventListener('click', () => recordScore(false));

// 2. Toolbar standard buttons
document.getElementById('flipAll').addEventListener('click', () => cards.forEach(toggleCard));

document.getElementById('shuffle').addEventListener('click', () => {
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
  // Re-init array order based on DOM
  init(); 
});

document.getElementById('reset').addEventListener('click', init);

document.getElementById('prev').addEventListener('click', () => {
  if(index > 0) {
      index--;
      showCard(index);
  }
});

document.getElementById('next').addEventListener('click', () => {
  if(index < cards.length - 1) {
      index++;
      showCard(index);
  }
});

document.getElementById('mark').addEventListener('click', toggleMark);

// 3. Keyboard support
document.addEventListener('keydown', e => {
    if (!sessionActive) return;

    const key = e.key.toLowerCase();

    // Space to flip
    if(key === ' ') { 
        const visibleCard = cards[index];
        if(visibleCard) toggleCard(visibleCard); 
        e.preventDefault(); 
    }
    
    // 'm' to mark
    if(key === 'm') {
        toggleMark();
    }

    // Navigation
    if(e.key === 'ArrowRight') { 
        if(index < cards.length - 1) { index++; showCard(index); }
    }
    if(e.key === 'ArrowLeft') { 
        if(index > 0) { index--; showCard(index); }
    }
});

// Run on load
init();

</script>
</body>
</html>


---


----


---
## Footnotes


```
Materials from these pages may be used for educational, non-commercial purposes with credit and notification to authors.The content of this site is intended for educational purposes only and is not to be taken as medical advice.
```



