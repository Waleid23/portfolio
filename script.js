// ============================================================
// EDIT THIS LIST to update your cards. Each time you finish an
// artifact, fill in its `link`, `reflection`, and set
// `status` to "Complete".
// ============================================================
const artifacts = [
  {
    number: 1,
    title: "Your Portfolio",
    status: "Complete",
    summary: "This very site: a front-end portfolio built with an AI chat assistant.",
    what:
      "A small static portfolio site (HTML, CSS, JavaScript only) with a card for each of the five course artifacts. It is also how I hand in every artifact this quarter.",
    idea: "A clean, dark, blue-accented site that grows as the quarter goes on.",
    link: "", // e.g. "https://yourusername.github.io/portfolio/"
    reflection:
      "I used Claude to build this site by describing the look I wanted: dark background, blue accents, five clickable cards, and an about-me section. The first version worked well, but I had to edit the placeholder text myself and fix the about-me wording, which repeated itself after I filled it in. I learned that being specific about the layout and what each card should contain gets a much better first result, and that I still need to read the output closely instead of trusting it.",
  },
  {
    number: 2,
    title: "Study App",
    status: "Placeholder",
    summary: "A study app that helps students prepare for exams.",
    what: "An app where students can create flashcards and quiz themselves to study for exams.",
    idea: "I want to make studying easier by helping students review information and test their knowledge.",
    link: "",
    reflection: "",
  },
  {
    number: 3,
    title: "Homework Planner",
    status: "Placeholder",
    summary: "An app that helps students organize their schoolwork.",
    what: "A tool that lets students track assignments, deadlines, and upcoming exams.",
    idea: "I want to help students stay organized and avoid missing deadlines.",
    link: "",
    reflection: "",
  },
  {
    number: 4,
    title: "Expense Tracker",
    status: "Placeholder",
    summary: "A tool for keeping track of spending.",
    what: "An app that lets users record their expenses and see how much money they spend.",
    idea: "I want to make it easier for people to understand their spending habits.",
    link: "",
    reflection: "",
  },
  {
    number: 5,
    title: "AI Study Assistant",
    status: "Placeholder",
    summary: "A tool that helps students study using AI.",
    what: "An application that helps students review notes and generate practice questions.",
    idea: "I want to explore how AI can help students learn and prepare for exams.",
    link: "",
    reflection: "",
  },
];

// ---------- Render cards ----------
const grid = document.getElementById("card-grid");

artifacts.forEach((a, i) => {
  const card = document.createElement("button");
  card.className = "card";
  card.type = "button";
  card.innerHTML = `
    <span class="num">ARTIFACT ${String(a.number).padStart(2, "0")}</span>
    <h3></h3>
    <span class="status ${a.status === "Complete" ? "done" : ""}"></span>
    <p></p>
    <span class="more">View details &rarr;</span>
  `;
  card.querySelector("h3").textContent = a.title;
  card.querySelector(".status").textContent = a.status;
  card.querySelector("p").textContent = a.summary;
  card.addEventListener("click", () => openModal(i));
  grid.appendChild(card);
});

// ---------- Modal ----------
const modal = document.getElementById("modal");

function setText(id, text, emptyMsg) {
  const el = document.getElementById(id);
  el.textContent = text || emptyMsg;
  el.classList.toggle("empty", !text);
}

function openModal(i) {
  const a = artifacts[i];
  document.getElementById("modal-num").textContent = `Artifact ${a.number}`;
  document.getElementById("modal-title").textContent = a.title;
  const status = document.getElementById("modal-status");
  status.textContent = a.status;
  status.className = "status " + (a.status === "Complete" ? "done" : "");

  setText("modal-what", a.what, "Description coming soon.");
  setText("modal-idea", a.idea, "No idea yet.");
  setText("modal-reflection", a.reflection, "I'll write this once the artifact is finished.");

  const linkEl = document.getElementById("modal-link");
  linkEl.textContent = "";
  linkEl.classList.remove("empty");
  if (a.link) {
    const anchor = document.createElement("a");
    anchor.href = a.link;
    anchor.target = "_blank";
    anchor.rel = "noopener";
    anchor.textContent = a.link;
    linkEl.appendChild(anchor);
  } else {
    linkEl.textContent = "Not available yet.";
    linkEl.classList.add("empty");
  }

  modal.showModal();
}

document.getElementById("modal-close").addEventListener("click", () => modal.close());
// Click on the dark backdrop closes it too
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

document.getElementById("year").textContent = new Date().getFullYear();
