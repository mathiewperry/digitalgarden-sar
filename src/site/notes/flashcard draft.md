---
{"dg-publish":true,"permalink":"/flashcard draft/","tags":["flashcard"]}
---


> [!tip] Summary 
> - 


> [!abstract] CONTENT
> - 

---

:::flashcards


---
here is a question 1 ? 
<details><summary>Reveal Answer</summary>
Here is the answer 1 
![flashcard draft-test.png](/img/user/assets/attachments/flashcard%20draft-test.png)


|table     |  1    |
| --- | --- |
| s    |  s   |

</details>

---
##### here is question 2 ?
?
here is answer 2 

---
this is question 3 ? 
?
this is answer 3 

---
this is question 4 reversed ? 
??
this is answer 4 

---
:::

----
## Learn more

---
title: Flashcard Demo
---


<div id="flashcards-container"></div>

<script>
// List your questions and answers here
const flashcardsData = [
  { question: "What is the capital of France?", answer: "Parisljkdbkfldbvkdjvkjdkbvkjdvbdjbvkjdbvjdkbvjd
  dvmbdjkvjdbvjdkbkvjdvbkdjbv
  djbkdjbvjdbkjvdbvjkdbjkv
  djkbvbdkbvdbvjkdbvkjdbvkjd" },
  { question: "2 + 2 = ?", answer: "4" },
  { question: "Largest planet in the solar system?", answer: "Jupiter" }
];

// Create flashcards automatically
const container = document.getElementById("flashcards-container");

flashcardsData.forEach(item => {
  const card = document.createElement("div");
  card.className = "flashcard";
  card.onclick = () => card.classList.toggle("flipped");

  const front = document.createElement("div");
  front.className = "front";
  front.textContent = item.question;

  const back = document.createElement("div");
  back.className = "back";
  back.textContent = item.answer;

  card.appendChild(front);
  card.appendChild(back);
  container.appendChild(card);
});
</script>

<style>
#flashcards-container { display:flex; flex-wrap:wrap; }
.flashcard {
  width: 200px; height: 120px; border:1px solid #ccc; margin:10px;
  perspective: 1000px; cursor:pointer; position:relative;
}
.flashcard div {
  width:100%; height:100%; position:absolute; backface-visibility:hidden;
  display:flex; align-items:center; justify-content:center;
  transition: transform 0.5s;
}
.flashcard .front { background:#f9f9f9; }
.flashcard .back { background:#ffd; transform: rotateY(180deg); }
.flashcard.flipped .front { transform: rotateY(180deg); }
.flashcard.flipped .back { transform: rotateY(0deg); }
</style>


---
## Footnotes






* * *
 [ORCID](https://orcid.org/0000-0002-0892-6516) |  [Linkedin](http://www.linkedin.com/in/itssuhaibalrumi) |  [GoodReads](https://www.goodreads.com/itssuhaibalrumi) |  [Email](mailto:contact@suhaibalrumi.com)

```
Materials from these pages may be used for educational, non-commercial purposes with credit and notification to authors.The content of this site is intended for educational purposes only and is not to be taken as medical advice.
```



