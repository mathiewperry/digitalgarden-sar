---
{"dg-publish":true,"permalink":"/draft/"}
---

EDITED 



> [!tip] Summary 
> - 


> [!abstract] CONTENT
> - 

---
<div id="study-area">

  <button id="prev" class="side-btn left">◀</button>

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
      <div class="front">Question 3 [[image_1748618189739_0.png]]  </div>
      <div class="back">Answer 3</div>
    </div>
  </div>

  <button id="next" class="side-btn right">▶</button>

</div>

<div id="toolbar">
  <button id="flipAll">Flip</button>
  <button id="mark">★ Mark</button>
  <button id="shuffle">Shuffle</button>
  <button id="showAnswers">Show Answers</button>
  <button id="reset">Reset</button>
</div>



<style>
#study-area {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-items: center;
  max-width: 420px;
  margin: 0 auto 15px auto;
  gap: 10px;
}

#flashcards {
  width: 320px;
  height: 200px;
  position: relative;
}

.flashcard {
  width: 100%;
  height: 100%;
  position: relative;
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

.nav-btn {
  font-size: 1.8em;
  padding: 6px 10px;
  cursor: pointer;
}

#toolbar {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

</style>


<script>
const cards = Array.from(document.querySelectorAll('.flashcard'));
let index = 0;

function showCard(i) {
  cards.forEach((c, j) => c.style.display = j === i ? 'block' : 'none');
}
showCard(index);

function toggleCard(card) {
  card.classList.toggle('flipped');
  card.dataset.answered = card.classList.contains('flipped');
}

document.getElementById('next').onclick = () => {
  index = (index + 1) % cards.length;
  showCard(index);
};

document.getElementById('prev').onclick = () => {
  index = (index - 1 + cards.length) % cards.length;
  showCard(index);
};

document.getElementById('mark').onclick = () => {
  const visible = cards.find(c => c.style.display !== 'none');
  if (visible) visible.classList.toggle('marked');
};

document.getElementById('flipAll').onclick = () =>
  cards.forEach(c => c.classList.toggle('flipped'));

document.getElementById('shuffle').onclick = () => {
  cards.sort(() => Math.random() - 0.5);
  cards.forEach(c => document.getElementById('flashcards').appendChild(c));
  index = 0;
  showCard(index);
};

document.getElementById('showAnswers').onclick = () =>
  cards.forEach(c => c.classList.add('flipped'));

document.getElementById('reset').onclick = () =>
  cards.forEach(c => {
    c.classList.remove('flipped','marked');
    c.dataset.answered = false;
  });

// Keyboard
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') document.getElementById('next').click();
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
  if (e.key === ' ') { toggleCard(cards[index]); e.preventDefault(); }
});
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



