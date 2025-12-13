---
{"dg-publish":true,"permalink":"/draft2-beta/"}
---


> [!tip] Summary 
> - 


> [!abstract] CONTENT
> - 



---



<div id="study-area">

  <button id="prev" class="nav-btn">« Prev</button>

  <div id="flashcards">
    <div class="flashcard">
      <div class="front">This is a long long long long long long long long long Question ? </div>
      <div class="back">1 here is a long  long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long answer  </div>
    </div>
    <div class="flashcard">
      <div class="front">Question 2 ? </div>
      <div class="back">Answer 2 with a url visit : https://chatgpt.com/c/693dcc40-0260-8326-b411-ff06356a9c24</div>
    </div>
    <div class="flashcard">
      <div class="front">Question 3</div>
      <div class="back">Answer 3</div>
    </div>
  </div>

  <button id="next" class="nav-btn">Next »</button>

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
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  max-width: 420px;
  margin: 0 auto;
  gap: 10px;
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

.nav-btn {
  font-size: 0.95rem;
  padding: 6px 10px;
  cursor: pointer;
  white-space: nowrap;
}

#progress {
  text-align: center;
  margin: 10px 0;
  font-weight: bold;
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

document.getElementById('next').onclick = () => {
  index = (index + 1) % total;
  showCard(index);
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + total) % total;
  showCard(index);
};

document.getElementById('mark').onclick = () => {
  marked[index] = !marked[index];
  showCard(index);
};

document.getElementById('flip').onclick = () =>
  cards[index].classList.toggle('flipped');

document.getElementById('reset').onclick = () => {
  localStorage.clear();
  location.reload();
};

document.querySelectorAll('#anki-bar button').forEach(btn => {
  btn.onclick = () => {
    if (btn.dataset.grade !== 'again') {
      index = (index + 1) % total;
    }
    showCard(index);
  };
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') document.getElementById('next').click();
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
  if (e.key === ' ') { cards[index].click(); e.preventDefault(); }
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



