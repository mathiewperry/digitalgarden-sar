---
{"dg-publish":true,"permalink":"/draft2-beta/"}
---


> [!tip] Summary 
> - 


> [!abstract] CONTENT
> - 



## v3 gpt

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
  <div class="flashcard" data-answered="none" onclick="toggleCard(this)">
    <div class="front">Question 1</div>
    <div class="back">Answer 1</div>
  </div>
  <div class="flashcard" data-answered="none" onclick="toggleCard(this)">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" data-answered="none" onclick="toggleCard(this)">
    <div class="front"><img src="https://via.placeholder.com/150" style="max-width:100%;"/><br>Question 3: Image?</div>
    <div class="back">Answer 3: Placeholder image</div>
  </div>
</div>

<div id="answerButtons" style="margin-top:15px; display:flex; gap:10px;">
  <button id="correctBtn" style="background:limegreen;color:white;">Correct</button>
  <button id="incorrectBtn" style="background:red;color:white;">Incorrect</button>
</div>

<div id="stats" style="margin-top:20px; display:none; font-weight:bold;"></div>

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
.flashcard[data-answered="correct"] { border-color: limegreen; }
.flashcard[data-answered="incorrect"] { border-color: red; }
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
    c.classList.remove('flipped');
    c.dataset.answered = 'none';
    c.classList.remove('marked');
  });
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

// Mark / Unmark
function toggleMark(card) {
  card.classList.toggle('marked');
}
document.getElementById('mark').addEventListener('click', () => {
  const visibleCard = cards.find(c => c.style.display !== 'none');
  if (visibleCard) toggleMark(visibleCard);
});

// Correct / Incorrect
function markAnswer(answer) {
  const card = cards.find(c => c.style.display !== 'none');
  if (!card) return;
  card.dataset.answered = answer;
  card.classList.remove('marked');
  nextCardOrStats();
}

document.getElementById('correctBtn').addEventListener('click', () => markAnswer('correct'));
document.getElementById('incorrectBtn').addEventListener('click', () => markAnswer('incorrect'));

// Move to next card or show stats
function nextCardOrStats() {
  if (cards.every(c => c.dataset.answered !== 'none')) {
    showStats();
  } else {
    index = (index + 1) % cards.length;
    showCard(index);
  }
}

// Show stats
function showStats() {
  const correct = cards.filter(c => c.dataset.answered === 'correct').length;
  const total = cards.length;
  const percent = Math.round((correct / total) * 100);
  const timeSpent = Math.round((Date.now() - startTime)/1000);
  const statsDiv = document.getElementById('stats');
  statsDiv.innerHTML = `You got ${percent}% correct. Time spent: ${timeSpent} seconds.`;
  statsDiv.style.display = 'block';
}

// Keyboard support
document.addEventListener('keydown', e => {
  if(e.key === ' ') { 
    const visibleCard = cards.find(c => c.style.display !== 'none');
    if(visibleCard) toggleCard(visibleCard);
    e.preventDefault(); 
  }
  if(e.key === 'ArrowRight') { index = (index + 1) % cards.length; showCard(index); }
  if(e.key === 'ArrowLeft') { index = (index - 1 + cards.length) % cards.length; showCard(index); }
  if(e.key.toLowerCase() === 'm') { 
    const visibleCard = cards.find(c => c.style.display !== 'none');
    if(visibleCard) toggleMark(visibleCard);
  }
  if(e.key.toLowerCase() === 'c') markAnswer('correct');
  if(e.key.toLowerCase() === 'i') markAnswer('incorrect');
});
</script>












---

---
<div id="study-area">
  <div id="flashcard-container">
    <div id="flashcards">
      <div class="flashcard">
        <div class="front">Question 1</div>
        <div class="back">Answer 1</div>
      </div>

      <div class="flashcard">
        <div class="front">Question 2</div>
        <div class="back">Answer 2</div>
      </div>

      <div class="flashcard">
        <div class="front">Question 3</div>
        <div class="back">Answer 3</div>
      </div>
    </div>
  </div>

  <div id="progress">1 / 3</div>

  <div id="nav-buttons">
    <button id="prev">Previous</button>
    <button id="next">Next</button>
  </div>

  <div id="anki-bar">
    <button data-grade="again">Again</button>
    <button data-grade="hard">Hard</button>
    <button data-grade="good">Good</button>
    <button data-grade="easy">Easy</button>
  </div>

  <div id="toolbar">
    <button id="mark">★ Mark</button>
    <button id="flip">Flip</button>
    <button id="reset">Reset</button>
  </div>
</div>


<style>
#study-area {
  max-width: 360px;
  margin: 20px auto;
  text-align: center;
}

#flashcard-container {
  width: 100%;
  height: 200px; /* fixed height to prevent overlapping */
  perspective: 1000px;
  position: relative;
  margin-bottom: 10px;
}

#flashcards {
  width: 100%;
  height: 100%;
  position: relative;
}

.flashcard {
  width: 100%;
  height: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  z-index: 1; /* prevent overlapping buttons */
}

.flashcard.active {
  display: block;
}

.flashcard > div {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  text-align: left;
  color: #f9f9f9;
  font-size: 1em;
  line-height: 1.3em;
}

.front {
  background: #000;
}

.back {
  background: #222;
  transform: rotateY(180deg);
}

.flashcard.flipped {
  transform: rotateY(180deg);
}

.flashcard.marked {
  border-color: orange;
}

.flashcard.marked::after {
  content: "★";
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 1.4em;
  color: orange;
}

#nav-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  z-index: 2;
  position: relative;
}

#progress {
  font-weight: bold;
  margin: 5px 0;
}

#anki-bar,
#toolbar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 8px;
}

</style>




<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
const total = cards.length;

let index = Number(localStorage.getItem('index')) || 0;
let marked = JSON.parse(localStorage.getItem('marked') || '{}');

function showCard(i) {
  cards.forEach((c, j) => {
    c.classList.toggle('active', j === i);
    c.classList.toggle('marked', !!marked[j]);
    c.classList.remove('flipped');
  });
  document.getElementById('progress').textContent = `${i + 1} / ${total}`;
  localStorage.setItem('index', i);
  localStorage.setItem('marked', JSON.stringify(marked));
}

// Card flip
cards.forEach(c =>
  c.addEventListener('click', () => c.classList.toggle('flipped'))
);

document.getElementById('flip').onclick = () =>
  cards[index].classList.toggle('flipped');

document.getElementById('mark').onclick = () => {
  marked[index] = !marked[index];
  showCard(index);
};

document.getElementById('reset').onclick = () => {
  localStorage.clear();
  location.reload();
};

// Anki grading
document.querySelectorAll('#anki-bar button').forEach(btn => {
  btn.onclick = () => {
    if (btn.dataset.grade !== 'again') {
      index = (index + 1) % total;
    }
    showCard(index);
  };
});

// Next / Previous buttons
document.getElementById('next').onclick = () => {
  index = (index + 1) % total;
  showCard(index);
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + total) % total;
  showCard(index);
};

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    index = (index + 1) % total; showCard(index);
  }
  if (e.key === 'ArrowLeft') {
    index = (index - 1 + total) % total; showCard(index);
  }
  if (e.key === ' ') {
    e.preventDefault();
    cards[index].classList.toggle('flipped');
  }
});

// Swipe support
let startX = 0;
const threshold = 50;
const area = document.getElementById('flashcards');

area.addEventListener('mousedown', e => startX = e.clientX);
area.addEventListener('mouseup', e => {
  const dx = e.clientX - startX;
  if (dx > threshold) index = (index + 1) % total;
  if (dx < -threshold) index = (index - 1 + total) % total;
  showCard(index);
});

area.addEventListener('touchstart', e => startX = e.touches[0].clientX);
area.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx > threshold) index = (index + 1) % total;
  if (dx < -threshold) index = (index - 1 + total) % total;
  showCard(index);
});

// Initialize
showCard(index);
</script>











----
## Learn more





---
## Footnotes






* * *
 [ORCID](https://orcid.org/0000-0002-0892-6516) |  [Linkedin](http://www.linkedin.com/in/itssuhaibalrumi) |  [GoodReads](https://www.goodreads.com/itssuhaibalrumi) |  [Email](mailto:contact@suhaibalrumi.com)

```
Materials from these pages may be used for educational, non-commercial purposes with credit and notification to authors.The content of this site is intended for educational purposes only and is not to be taken as medical advice.
```



