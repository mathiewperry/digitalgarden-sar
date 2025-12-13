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
let reviewStats = { again: 0, hard: 0, good: 0, easy: 0 };
let sessionStart = Date.now();

document.querySelectorAll('#anki-bar button').forEach(btn => {
  btn.onclick = () => {
    const grade = btn.dataset.grade;
    reviewStats[grade] += 1;

    if (grade !== 'again') {
      index = (index + 1) % total;
    }

    showCard(index);

    // If last card completed, show stats card
    if (index === 0 && Object.values(reviewStats).reduce((a,b)=>a+b,0) >= total) {
      showStats();
    }
  };
});

function showStats() {
  const sessionEnd = Date.now();
  const timeSpent = Math.round((sessionEnd - sessionStart)/1000); // in seconds

  const statsDiv = document.createElement('div');
  statsDiv.id = 'stats-card';
  statsDiv.innerHTML = `
    <h3>Review Stats</h3>
    <p>Total Cards: ${total}</p>
    <p>Again: ${reviewStats.again}</p>
    <p>Hard: ${reviewStats.hard}</p>
    <p>Good: ${reviewStats.good}</p>
    <p>Easy: ${reviewStats.easy}</p>
    <p>Time Spent: ${timeSpent} sec</p>
    <button id="close-stats">Close</button>
  `;
  document.getElementById('study-area').appendChild(statsDiv);

  document.getElementById('close-stats').onclick = () => {
    statsDiv.remove();
  };
}

</div>



<style>
#stats-card {
  position: relative;
  border: 2px solid #444;
  padding: 12px;
  margin-top: 10px;
  background: #111;
  color: #f9f9f9;
  border-radius: 8px;
}
#stats-card h3 {
  margin: 0 0 8px 0;
  text-align: center;
}
#stats-card button {
  margin-top: 8px;
  padding: 6px 10px;
  cursor: pointer;
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



