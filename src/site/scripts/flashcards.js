document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flashcards").forEach(container => {
    const raw = container.innerText.trim();

    const cards = raw
      .split("\n---")
      .map(c => c.trim())
      .filter(Boolean);

    container.innerHTML = "";

    cards.forEach(text => {
      let reversed = false;
      let sep = "\n?\n";

      if (text.includes("\n??\n")) {
        reversed = true;
        sep = "\n??\n";
      }

      const parts = text.split(sep);
      if (parts.length !== 2) return;

      let question = parts[0].replace(/^Q\s*/i, "").trim();
      let answer = parts[1].trim();

      if (reversed) {
        [question, answer] = [answer, question];
      }

      const card = document.createElement("div");
      card.className = "flashcard";

      card.innerHTML = `
        <div class="fc-question">${question}</div>
        <button class="fc-btn">Show answer</button>
        <div class="fc-answer hidden">${answer}</div>
      `;

      card.querySelector(".fc-btn").onclick = () => {
        card.querySelector(".fc-answer").classList.toggle("hidden");
      };

      container.appendChild(card);
    });
  });
});
