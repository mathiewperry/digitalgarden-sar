---
{"dg-publish":true,"permalink":"/draft/"}
---


> [!tip] Summary 
> - 


> [!abstract] CONTENT
> - 

---


<div>
  <button id="flipAll">Flip All</button>
</div>

<div id="flashcards">
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 1 ? </div>
    <div class="back">Answer 1
    kjhfkdfhdjkfkdj
    dkjhdkhfkdhfjdkfhdjhfdjhfkjdhfjdhfjdhfkjdhfdjkfhdkjfhdjkfhdjfhkjdhfjdhfjdkhfdjkfhkdjhfkjdfhdkjhfkjdhfkjdfjkdhfjkhdjfhdjfhdjkhfjdhkjdkjvcd</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">Question 2</div>
    <div class="back">Answer 2</div>
  </div>
  <div class="flashcard" data-answered="false" onclick="toggleCard(this)">
    <div class="front">
      <img src="https://via.placeholder.com/150" style="max-width:100%;"/><br>
      What is this image?
    </div>
    <div class="back">This is a placeholder image.</div>
  </div>
</div>

<style>
#flashcards { 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: flex-start; 
  gap: 10px;
}
.flashcard { 
  width: calc(33% - 20px); 
  height: 180px; 
  border: 2px solid #ccc; 
  perspective: 1000px; 
  cursor: pointer; 
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}
.flashcard:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}
.flashcard div { 
  width: 100%; 
  height: 100%; 
  backface-visibility: hidden; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  text-align:center; 
  position:absolute; 
  padding: 10px; 
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1); 
  color: #F9F9F9; 
  font-size: 1em; 
  overflow-wrap: break-word; 
  word-wrap: break-word; 
  line-height: 1.2em;  
}
.flashcard .front { background:#000000; }
.flashcard .back { background:#222222; transform: rotateY(180deg); }
.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back { transform: rotateY(0deg); }
.flashcard[data-answered="true"] { border-color: limegreen; }

@media (max-width: 900px) { .flashcard { width: calc(50% - 20px); } }
@media (max-width: 600px) { .flashcard { width: 100%; } }
</style>

<script>
function toggleCard(card) {
  card.classList.toggle('flipped');
  card.dataset.answered = card.classList.contains('flipped') ? 'true' : 'false';
}

// Flip all button
document.getElementById('flipAll').addEventListener('click', () => {
  document.querySelectorAll('.flashcard').forEach(c => toggleCard(c));
});

// Keyboard support: Spacebar flips all
document.addEventListener('keydown', e => {
  if (e.key === ' ') {
    document.querySelectorAll('.flashcard').forEach(c => toggleCard(c));
    e.preventDefault();
  }
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



