---
{"dg-publish":true,"permalink":"/draft2-beta/"}
---


> [!tip] Summary 
> - 


> [!abstract] CONTENT
> - 



---


<div id="study-area">

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


<style>
#study-area {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

#flashcards {
  width: 320px;
  height: 200px;
  position: relative;
}

.flashcard {
  position: absolute;
  inset: 0;
  border: 2px solid #ccc;
  perspective: 1000px;
  cursor: pointer;
}

.flashcard div {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  color: #f9f9f9;
  transition: transform 0.6s ease;
}

.front { background: #000; }
.back  { background: #222; transform: rotateY(180deg); }

.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back  { transform: rotateY(0deg); }

.flashcard.marked {
  border-color: orange;
}
.flashcard.marked::after {
  content: "★";
  position: absolute;
  top: 6px;
  right: 10px;
  color: orange;
  font-size: 1.4em;
}

#progress {
  text-align: center;
  font-weight: bold;
  margin: 10px 0;
}

#anki-bar, #toolbar {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

</style>


<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
const total = cards.length;
let index = Number(localStorage.getItem('index')) || 0;
let marked = JSON.parse(localStorage.getItem('marked') || '{}');

function showCard(i) {
  cards.forEach((c, j) => {
    c.style.display = j === i ? 'block' : 'none';
    c.classList.toggle('marked', marked[j]);
    c.classList.remove('flipped');
  });
  document.getElementById('progress').textContent = `${index + 1} / ${total}`;
  localStorage.setItem('index', index);
  localStorage.setItem('marked', JSON.stringify(marked));
}

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

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { index = (index + 1) % total; showCard(index); }
  if (e.key === 'ArrowLeft')  { index = (index - 1 + total) % total; showCard(index); }
  if (e.key === ' ') { cards[index].click(); e.preventDefault(); }
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



