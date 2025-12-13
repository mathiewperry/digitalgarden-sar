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
    <div class="front"><img src="https://via.placeholder.com/150" style="max-width:100%;"/><br>Question 3: Image? ![image_1748618189739_0.png](/img/user/assets/attachments/image_1748618189739_0.png) </div>
    <div class="back">Answer 3: This is a placeholder image.</div>
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
## Learn more





---
## Footnotes






* * *
 [ORCID](https://orcid.org/0000-0002-0892-6516) |  [Linkedin](http://www.linkedin.com/in/itssuhaibalrumi) |  [GoodReads](https://www.goodreads.com/itssuhaibalrumi) |  [Email](mailto:contact@suhaibalrumi.com)

```
Materials from these pages may be used for educational, non-commercial purposes with credit and notification to authors.The content of this site is intended for educational purposes only and is not to be taken as medical advice.
```



