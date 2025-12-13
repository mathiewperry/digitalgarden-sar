---
{"dg-publish":true,"permalink":"/draft/"}
---

EDITED 



> [!tip] Summary 
> - 


> [!abstract] CONTENT
> - 



---


<div id="toolbar" style="margin-bottom:15px; display:flex; gap:10px; flex-wrap:wrap;">
  <button id="flipAll">Flip All</button>
  <button id="shuffle">Shuffle</button>
  <button id="reset">Reset</button>
  <button id="prev">Prev</button>
  <button id="next">Next</button>
  <button id="mark">Mark / Unmark</button>
  <button id="showAnswers">Show Answers</button>
</div>

<div id="flashcards">
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 1</div>
    <div class="back">Answer 1</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front"> Question 3 Long long long long long ?</div>
    <div class="back">Answer 3 Long long long long long Long long long long long Long long long long long Long long long long long ?Long long long long long Long long long long long  </div>
  </div>
</div>

<style>
#flashcards { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-start; }
.flashcard { 
  width: calc(33% - 20px); 
  height: 180px; 
  border: 2px solid #ccc; 
  perspective: 1000px; 
  cursor: pointer; 
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display:flex; 
  align-items:center; 
  justify-content:center;
}
.flashcard:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
.flashcard div { 
  width: 100%; height: 100%; backface-visibility: hidden; 
  display:flex; align-items:center; justify-content:center; text-align:center; 
  position:absolute; padding: 10px; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1); 
  color: #F9F9F9; font-size: 1em; overflow-wrap: break-word; word-wrap: break-word; line-height: 1.2em;  
}
.flashcard .front { background:#000; }
.flashcard .back { background:#222; transform: rotateY(180deg); }
.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back { transform: rotateY(0deg); }
.flashcard[data-answered="true"] { border-color: limegreen; }
.flashcard.marked { border-color: orange; }
.flashcard.marked::after {
  content: "★";
  position: absolute;
  top: 5px;
  right: 10px;
  color: orange;
  font-size: 1.5em;
}

@media (max-width: 900px) { .flashcard { width: calc(50% - 20px); } }
@media (max-width: 600px) { .flashcard { width: 100%; } }
</style>

<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
let index = 0;

// Show one card at a time (slideshow mode)
function showCard(i) {
  cards.forEach((c, j) => c.style.display = j === i ? 'flex' : 'none');
}
showCard(index);

// Toggle flip
function toggleCard(card) {
  card.classList.toggle('flipped');
  card.dataset.answered = card.classList.contains('flipped') ? 'true' : 'false';
}

// Toolbar buttons
document.getElementById('flipAll').addEventListener('click', () => cards.forEach(toggleCard));

document.getElementById('shuffle').addEventListener('click', () => {
  const container = document.getElementById('flashcards');
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
});

document.getElementById('reset').addEventListener('click', () => {
  cards.forEach(c => {
    c.classList.remove('flipped');
    c.dataset.answered = 'false';
    c.classList.remove('marked');
  });
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showCard(index);
});

// Fixed Mark / Unmark
document.getElementById('mark').addEventListener('click', () => {
  const visibleCard = cards.find(c => c.style.display !== 'none');
  if (visibleCard) visibleCard.classList.toggle('marked');
});

document.getElementById('showAnswers').addEventListener('click', () => cards.forEach(c => c.classList.add('flipped')));

// Keyboard support
document.addEventListener('keydown', e => {
  if(e.key === ' ') { cards.forEach(toggleCard); e.preventDefault(); }
  if(e.key === 'ArrowRight') { index = (index + 1) % cards.length; showCard(index); }
  if(e.key === 'ArrowLeft') { index = (index - 1 + cards.length) % cards.length; showCard(index); }
});
</script>




----


## GPT respsonse 

<div id="toolbar" style="margin-bottom:15px; display:flex; gap:10px; flex-wrap:wrap;">
  <button id="flipAll">Flip All</button>
  <button id="shuffle">Shuffle</button>
  <button id="reset">Reset</button>
  <button id="prev">Prev</button>
  <button id="next">Next</button>
  <button id="mark">Mark / Unmark</button>
  <button id="showAnswers">Show Answers</button>
</div>

<div id="flashcards">
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 1</div>
    <div class="back">Answer 1</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 3 Long long long long long ?</div>
    <div class="back">Answer 3 Long long long long long Long long long long long Long long long long long Long long long long long ? Long long long long long Long long long long long</div>
  </div>

</div>

<div id="stats" style="margin-top:15px; display:none; padding:10px; border:1px solid #ccc; width:fit-content;"></div>

<style>
#flashcards { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-start; }
.flashcard { 
  width: calc(33% - 20px); 
  height: 180px; 
  border: 2px solid #ccc; 
  perspective: 1000px; 
  cursor: pointer; 
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display:flex; 
  align-items:center; 
  justify-content:center;
}
.flashcard:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
.flashcard div { 
  width: 100%; height: 100%; backface-visibility: hidden; 
  display:flex; align-items:center; justify-content:center; text-align:center; 
  position:absolute; padding: 10px; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1); 
  color: #F9F9F9; font-size: 1em; overflow-wrap: break-word; word-wrap: break-word; line-height: 1.2em;  
}
.flashcard .front { background:#000; }
.flashcard .back { background:#222; transform: rotateY(180deg); }
.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back { transform: rotateY(0deg); }
.flashcard[data-answered="true"] { border-color: limegreen; }
.flashcard.marked { border-color: red; }
.flashcard.marked::after {
  content: "★";
  position: absolute;
  top: 5px;
  right: 10px;
  color: red;
  font-size: 1.5em;
}

@media (max-width: 900px) { .flashcard { width: calc(50% - 20px); } }
@media (max-width: 600px) { .flashcard { width: 100%; } }
</style>

<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
let index = 0;
let startTime = Date.now();

// Show one card at a time
function showCard(i) {
  cards.forEach((c, j) => c.style.display = j === i ? 'flex' : 'none');
}
showCard(index);

// Toggle flip
function toggleCard(card) {
  card.classList.toggle('flipped');
  card.dataset.answered = card.classList.contains('flipped') ? 'true' : 'false';
  checkAllAnswered();
}

// Toolbar buttons
document.getElementById('flipAll').addEventListener('click', () => cards.forEach(c => c.classList.toggle('flipped')));
document.getElementById('shuffle').addEventListener('click', () => {
  const container = document.getElementById('flashcards');
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
});
document.getElementById('reset').addEventListener('click', () => {
  cards.forEach(c => {
    c.classList.remove('flipped', 'marked');
    c.dataset.answered = 'false';
    c.style.display = 'flex';
  });
  index = 0;
  showCard(index);
  document.getElementById('stats').style.display = 'none';
  startTime = Date.now();
});
document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
});
document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showCard(index);
});
document.getElementById('mark').addEventListener('click', () => {
  const visibleCard = cards.find(c => c.style.display !== 'none');
  if (visibleCard) visibleCard.classList.toggle('marked');
});
document.getElementById('showAnswers').addEventListener('click', () => {
  cards.forEach(c => c.classList.add('flipped'));
  checkAllAnswered();
});

// Keyboard support
document.addEventListener('keydown', e => {
  if(e.key === ' ') { cards.forEach(toggleCard); e.preventDefault(); }
  if(e.key === 'ArrowRight') { index = (index + 1) % cards.length; showCard(index); }
  if(e.key === 'ArrowLeft') { index = (index - 1 + cards.length) % cards.length; showCard(index); }
});

// Check if all cards reviewed and show stats
function checkAllAnswered() {
  const allAnswered = cards.every(c => c.dataset.answered === 'true');
  if (allAnswered) {
    const marked = cards.filter(c => c.classList.contains('marked')).length;
    const total = cards.length;
    const timeSpent = Math.floor((Date.now() - startTime)/1000);
    const minutes = Math.floor(timeSpent/60);
    const seconds = timeSpent % 60;
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `<strong>Review Finished!</strong><br>Total Cards: ${total}<br>Marked Cards: ${marked}<br>Time Spent: ${minutes}m ${seconds}s`;
    statsDiv.style.display = 'block';
  }
}
</script>


---
## Gemini


<div id="toolbar" style="margin-bottom:15px; display:flex; gap:10px; flex-wrap:wrap;">
  <button id="flipAll">Flip All</button>
  <button id="shuffle">Shuffle</button>
  <button id="reset">Reset</button>
  <button id="prev">Prev</button>
  <button id="next">Next</button>
  <button id="mark">Mark / Unmark</button>
  <button id="showAnswers">Show Answers</button>
  <button id="finish" style="background-color: #2b2b2b; color: white; border: 1px solid #555;">Finish & Stats</button>
</div>

<div id="statsOverlay" style="display:none;">
  <div class="stats-box">
    <h3>Session Summary</h3>
    <p><strong>Time Spent:</strong> <span id="statTime">00:00</span></p>
    <p><strong>Total Cards:</strong> <span id="statTotal">0</span></p>
    <p><strong>Cards Reviewed:</strong> <span id="statReviewed">0</span></p>
    <p><strong>Cards Marked:</strong> <span id="statMarked" style="color:red; font-weight:bold;">0</span></p>
    <button onclick="closeStats()">Close</button>
  </div>
</div>

<div id="flashcards">
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 1</div>
    <div class="back">Answer 1</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 3 Long long long long long ?</div>
    <div class="back">Answer 3 Long long long long long...</div>
  </div>
</div>

<style>
/* --- Layout --- */
#flashcards { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-start; }
.flashcard { 
  width: calc(33% - 20px); 
  height: 180px; 
  border: 2px solid #ccc; 
  perspective: 1000px; 
  cursor: pointer; 
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display:flex; 
  align-items:center; 
  justify-content:center;
}
.flashcard:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }

/* --- Card Content --- */
.flashcard div { 
  width: 100%; height: 100%; backface-visibility: hidden; 
  display:flex; align-items:center; justify-content:center; text-align:center; 
  position:absolute; padding: 10px; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1); 
  color: #F9F9F9; font-size: 1em; overflow-wrap: break-word; word-wrap: break-word; line-height: 1.2em;  
}
.flashcard .front { background:#000; }
.flashcard .back { background:#222; transform: rotateY(180deg); }
.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back { transform: rotateY(0deg); }

/* --- Status Colors --- */
/* Green for answered */
.flashcard[data-answered="true"] { border-color: limegreen; }

/* RED for marked (Overrides green) */
.flashcard.marked { border-color: red !important; }
.flashcard.marked::after {
  content: "★";
  position: absolute;
  top: 5px;
  right: 10px;
  color: red;
  font-size: 1.5em;
  text-shadow: 0 0 2px black;
}

/* --- Stats Overlay Styles --- */
#statsOverlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.85); z-index: 9999;
  display: flex; align-items: center; justify-content: center;
}
.stats-box {
  background: #222; color: #fff; padding: 30px; border-radius: 10px;
  border: 1px solid #444; text-align: center; min-width: 250px;
}
.stats-box h3 { margin-top: 0; border-bottom: 1px solid #444; padding-bottom: 10px; }
.stats-box button { margin-top: 15px; padding: 8px 20px; cursor: pointer; }

/* --- Responsive --- */
@media (max-width: 900px) { .flashcard { width: calc(50% - 20px); } }
@media (max-width: 600px) { .flashcard { width: 100%; } }
</style>

<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
let index = 0;
let startTime = Date.now(); // Start timer immediately

// Show one card at a time (slideshow mode)
function showCard(i) {
  cards.forEach((c, j) => c.style.display = j === i ? 'flex' : 'none');
}
showCard(index);

// Toggle flip
function toggleCard(card) {
  card.classList.toggle('flipped');
  card.dataset.answered = card.classList.contains('flipped') ? 'true' : 'false';
}

// Helper: Format seconds into MM:SS
function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Toolbar buttons
document.getElementById('flipAll').addEventListener('click', () => cards.forEach(toggleCard));

document.getElementById('shuffle').addEventListener('click', () => {
  const container = document.getElementById('flashcards');
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
});

document.getElementById('reset').addEventListener('click', () => {
  cards.forEach(c => {
    c.classList.remove('flipped');
    c.dataset.answered = 'false';
    c.classList.remove('marked');
  });
  startTime = Date.now(); // Reset timer
  alert("Cards and Timer Reset!");
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showCard(index);
});

// Fixed Mark / Unmark
document.getElementById('mark').addEventListener('click', () => {
  const visibleCard = cards.find(c => c.style.display !== 'none');
  if (visibleCard) visibleCard.classList.toggle('marked');
});

document.getElementById('showAnswers').addEventListener('click', () => cards.forEach(c => c.classList.add('flipped')));

// --- Stats Logic ---
document.getElementById('finish').addEventListener('click', () => {
  const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
  const totalCards = cards.length;
  const markedCards = cards.filter(c => c.classList.contains('marked')).length;
  const reviewedCards = cards.filter(c => c.dataset.answered === 'true').length;

  document.getElementById('statTime').innerText = formatTime(timeElapsed);
  document.getElementById('statTotal').innerText = totalCards;
  document.getElementById('statReviewed').innerText = reviewedCards;
  document.getElementById('statMarked').innerText = markedCards;

  document.getElementById('statsOverlay').style.display = 'flex';
});

function closeStats() {
  document.getElementById('statsOverlay').style.display = 'none';
}

// Keyboard support
document.addEventListener('keydown', e => {
  // Ignore keys if stats overlay is open
  if(document.getElementById('statsOverlay').style.display === 'flex') return;

  if(e.key === ' ') { 
      // Toggle current visible card
      const visibleCard = cards.find(c => c.style.display !== 'none');
      if(visibleCard) toggleCard(visibleCard);
      e.preventDefault(); 
  }
  if(e.key === 'ArrowRight') { index = (index + 1) % cards.length; showCard(index); }
  if(e.key === 'ArrowLeft') { index = (index - 1 + cards.length) % cards.length; showCard(index); }
});
</script>


----
## chat gpt 2 


<div id="toolbar" style="margin-bottom:15px; display:flex; gap:10px; flex-wrap:wrap;">
  <button id="flipAll">Flip All</button>
  <button id="shuffle">Shuffle</button>
  <button id="reset">Reset</button>
  <button id="prev">Prev</button>
  <button id="next">Next</button>
  <button id="mark">Mark / Unmark</button>
  <button id="showAnswers">Show Answers</button>
</div>

<div id="flashcards">
  <div class="flashcard" data-answered="false" data-correct="false" onclick="toggleCard(this)">
    <div class="front">Question 1</div>
    <div class="back">Answer 1</div>
  </div>
  <div class="flashcard" data-answered="false" data-correct="false" onclick="toggleCard(this)">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" data-answered="false" data-correct="false" onclick="toggleCard(this)">
    <div class="front">Question 3 Long long long long long ?</div>
    <div class="back">Answer 3 Long long long long long Long long long long long Long long long long long Long long long long long ? Long long long long long Long long long long long</div>
  </div>
</div>

<div id="cardButtons" style="margin-top:10px; display:flex; gap:10px;">
  <button id="correctBtn">Correct</button>
  <button id="incorrectBtn">Incorrect</button>
</div>

<div id="stats" style="margin-top:15px; padding:10px; border:1px solid #ccc; width:fit-content; display:none;"></div>

<style>
#flashcards { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-start; }
.flashcard { 
  width: 100%; 
  height: 180px; 
  border: 2px solid #ccc; 
  perspective: 1000px; 
  cursor: pointer; 
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display:flex; 
  align-items:center; 
  justify-content:center;
}
.flashcard div { 
  width: 100%; height: 100%; backface-visibility: hidden; 
  display:flex; align-items:center; justify-content:center; text-align:center; 
  position:absolute; padding: 10px; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1); 
  color: #F9F9F9; font-size: 1em; overflow-wrap: break-word; word-wrap: break-word; line-height: 1.2em;  
}
.flashcard .front { background:#000; }
.flashcard .back { background:#222; transform: rotateY(180deg); }
.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back { transform: rotateY(0deg); }
.flashcard[data-answered="true"][data-correct="true"] { border-color: limegreen; }
.flashcard[data-answered="true"][data-correct="false"] { border-color: crimson; }
.flashcard.marked { border-color: red; }
.flashcard.marked::after {
  content: "★";
  position: absolute;
  top: 5px;
  right: 10px;
  color: red;
  font-size: 1.5em;
}
</style>

<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
let index = 0;
let startTime = Date.now();
let totalCorrect = 0;
let totalIncorrect = 0;

// Show one card at a time (slideshow)
function showCard(i) {
  cards.forEach((c, j) => c.style.display = j === i ? 'flex' : 'none');
}
showCard(index);

// Toggle flip
function toggleCard(card) {
  card.classList.toggle('flipped');
}

// Toolbar buttons
document.getElementById('flipAll').addEventListener('click', () => cards.forEach(c => c.classList.toggle('flipped')));
document.getElementById('shuffle').addEventListener('click', () => {
  const container = document.getElementById('flashcards');
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
  index = 0;
  showCard(index);
});
document.getElementById('reset').addEventListener('click', () => {
  cards.forEach(c => {
    c.classList.remove('flipped', 'marked');
    c.dataset.answered = 'false';
    c.dataset.correct = 'false';
  });
  index = 0;
  totalCorrect = 0;
  totalIncorrect = 0;
  startTime = Date.now();
  showCard(index);
  document.getElementById('stats').style.display = 'none';
});
document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
});
document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % cards.length;
  showCard(index);
});
document.getElementById('mark').addEventListener('click', () => {
  const visibleCard = cards.find(c => c.style.display !== 'none');
  if (visibleCard) visibleCard.classList.toggle('marked');
});
document.getElementById('showAnswers').addEventListener('click', () => cards.forEach(c => c.classList.add('flipped')));

// Correct / Incorrect buttons
document.getElementById('correctBtn').addEventListener('click', () => handleAnswer(true));
document.getElementById('incorrectBtn').addEventListener('click', () => handleAnswer(false));

function handleAnswer(isCorrect) {
  const visibleCard = cards.find(c => c.style.display !== 'none');
  if (!visibleCard) return;
  visibleCard.dataset.answered = 'true';
  visibleCard.dataset.correct = isCorrect ? 'true' : 'false';
  visibleCard.classList.add('flipped'); // flip to show answer
  if (isCorrect) totalCorrect++; else totalIncorrect++;
  nextCard();
  checkAllAnswered();
}

function nextCard() {
  index = (index + 1) % cards.length;
  showCard(index);
}

// Keyboard support
document.addEventListener('keydown', e => {
  if(e.key === ' ') { toggleCard(cards[index]); e.preventDefault(); }
  if(e.key === 'ArrowRight') { nextCard(); }
  if(e.key === 'ArrowLeft') { index = (index - 1 + cards.length) % cards.length; showCard(index); }
  if(e.key === 'm') { document.getElementById('mark').click(); }
});

// Check all cards and show stats
function checkAllAnswered() {
  const allAnswered = cards.every(c => c.dataset.answered === 'true');
  if (allAnswered) {
    const total = cards.length;
    const marked = cards.filter(c => c.classList.contains('marked')).length;
    const timeSpent = Math.floor((Date.now() - startTime)/1000);
    const minutes = Math.floor(timeSpent/60);
    const seconds = timeSpent % 60;
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
      <strong>Review Finished!</strong><br>
      Total Cards: ${total}<br>
      Correct: ${totalCorrect}<br>
      Incorrect: ${totalIncorrect}<br>
      Marked: ${marked}<br>
      Time Spent: ${minutes}m ${seconds}s
    `;
    statsDiv.style.display = 'block';
  }
}
</script>


----
## gpt 3 

<div id="toolbar" style="margin-bottom:15px; display:flex; gap:10px; flex-wrap:wrap;">
  <button id="flipAll">Flip All</button>
  <button id="shuffle">Shuffle</button>
  <button id="reset">Reset</button>
  <button id="prev">Prev</button>
  <button id="next">Next</button>
  <button id="mark">Mark / Unmark</button>
  <button id="showAnswers">Show Answers</button>
</div>

<div id="flashcards">
  <div class="flashcard" data-answered="false" data-correct="false">
    <div class="front">Question 1</div>
    <div class="back">Answer 1</div>
  </div>
  <div class="flashcard" data-answered="false" data-correct="false">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" data-answered="false" data-correct="false">
    <div class="front">Question 3 Long long long long long ?</div>
    <div class="back">Answer 3 Long long long long long Long long long long long Long long long long long Long long long long long ? Long long long long long Long long long long long</div>
  </div>
</div>

<div id="cardButtons" style="margin-top:10px; display:flex; gap:10px;">
  <button id="correctBtn">Correct</button>
  <button id="incorrectBtn">Incorrect</button>
</div>

<div id="stats" style="margin-top:15px; padding:10px; border:1px solid #ccc; width:fit-content; display:none;"></div>

<style>
#flashcards { display: flex; flex-wrap: wrap; gap: 10px; justify-content: flex-start; }
.flashcard { 
  width: 100%; 
  height: 180px; 
  border: 2px solid #ccc; 
  perspective: 1000px; 
  cursor: pointer; 
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display: none;
  align-items:center; 
  justify-content:center;
}
.flashcard.active { display: flex; } /* only the active card is shown */
.flashcard div { 
  width: 100%; height: 100%; backface-visibility: hidden; 
  display:flex; align-items:center; justify-content:center; text-align:center; 
  position:absolute; padding: 10px; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1); 
  color: #F9F9F9; font-size: 1em; overflow-wrap: break-word; word-wrap: break-word; line-height: 1.2em;  
}
.flashcard .front { background:#000; }
.flashcard .back { background:#222; transform: rotateY(180deg); }
.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back { transform: rotateY(0deg); }
.flashcard[data-answered="true"][data-correct="true"] { border-color: limegreen; }
.flashcard[data-answered="true"][data-correct="false"] { border-color: crimson; }
.flashcard.marked { border-color: red; }
.flashcard.marked::after {
  content: "★";
  position: absolute;
  top: 5px;
  right: 10px;
  color: red;
  font-size: 1.5em;
}
</style>

<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
let index = 0;
let startTime = Date.now();
let totalCorrect = 0;
let totalIncorrect = 0;

// Show only one card
function showCard(i) {
  cards.forEach((c,j) => c.classList.remove('active'));
  if (cards[i]) cards[i].classList.add('active');
}
showCard(index);

// Toggle flip on click
cards.forEach(card => card.addEventListener('click', () => card.classList.toggle('flipped')));

// Toolbar buttons
document.getElementById('flipAll').addEventListener('click', () => cards.forEach(c => c.classList.toggle('flipped')));
document.getElementById('shuffle').addEventListener('click', () => {
  const container = document.getElementById('flashcards');
  for (let i = container.children.length; i >= 0; i--) {
    container.appendChild(container.children[Math.random() * i | 0]);
  }
  index = 0;
  showCard(index);
});
document.getElementById('reset').addEventListener('click', () => {
  cards.forEach(c => c.classList.remove('flipped','marked'));
  cards.forEach(c => { c.dataset.answered = 'false'; c.dataset.correct = 'false'; });
  index = 0;
  totalCorrect = 0;
  totalIncorrect = 0;
  startTime = Date.now();
  showCard(index);
  document.getElementById('stats').style.display = 'none';
});
document.getElementById('prev').addEventListener('click', () => { index = (index-1+cards.length)%cards.length; showCard(index); });
document.getElementById('next').addEventListener('click', () => { nextCard(); });
document.getElementById('mark').addEventListener('click', () => {
  const visibleCard = cards[index];
  visibleCard.classList.toggle('marked');
});
document.getElementById('showAnswers').addEventListener('click', () => { cards.forEach(c => c.classList.add('flipped')); });

// Correct / Incorrect buttons
document.getElementById('correctBtn').addEventListener('click', () => handleAnswer(true));
document.getElementById('incorrectBtn').addEventListener('click', () => handleAnswer(false));

function handleAnswer(isCorrect) {
  const visibleCard = cards[index];
  visibleCard.dataset.answered = 'true';
  visibleCard.dataset.correct = isCorrect ? 'true' : 'false';
  visibleCard.classList.add('flipped');
  if(isCorrect) totalCorrect++; else totalIncorrect++;
  nextCard();
  checkAllAnswered();
}

function nextCard() {
  let nextIndex = (index + 1) % cards.length;
  let attempts = 0;
  // skip already answered cards
  while(cards[nextIndex].dataset.answered === 'true' && attempts < cards.length) {
    nextIndex = (nextIndex + 1) % cards.length;
    attempts++;
  }
  index = nextIndex;
  showCard(index);
}

// Keyboard support
document.addEventListener('keydown', e => {
  if(e.key === ' ') { cards[index].classList.toggle('flipped'); e.preventDefault(); }
  if(e.key === 'ArrowRight') { nextCard(); }
  if(e.key === 'ArrowLeft') { index = (index - 1 + cards.length) % cards.length; showCard(index); }
  if(e.key === 'm') { document.getElementById('mark').click(); }
});

// Check if all cards answered
function checkAllAnswered() {
  const allAnswered = cards.every(c => c.dataset.answered === 'true');
  if(allAnswered) {
    const total = cards.length;
    const marked = cards.filter(c => c.classList.contains('marked')).length;
    const timeSpent = Math.floor((Date.now()-startTime)/1000);
    const minutes = Math.floor(timeSpent/60);
    const seconds = timeSpent%60;
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
      <strong>Review Finished!</strong><br>
      Total Cards: ${total}<br>
      Correct: ${totalCorrect}<br>
      Incorrect: ${totalIncorrect}<br>
      Marked: ${marked}<br>
      Time Spent: ${minutes}m ${seconds}s
    `;
    statsDiv.style.display = 'block';
  }
}
</script>



---
## Footnotes






* * *
 [ORCID](https://orcid.org/0000-0002-0892-6516) |  [Linkedin](http://www.linkedin.com/in/itssuhaibalrumi) |  [GoodReads](https://www.goodreads.com/itssuhaibalrumi) |  [Email](mailto:contact@suhaibalrumi.com)

```
Materials from these pages may be used for educational, non-commercial purposes with credit and notification to authors.The content of this site is intended for educational purposes only and is not to be taken as medical advice.
```



