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
    link: "https://waleid23.github.io/portfolio/",
    reflection:
      "I used Claude to build this site by describing the look I wanted: dark background, blue accents, five clickable cards, and an about-me section. The first version worked well, but I had to edit the placeholder text myself and fix the about-me wording, which repeated itself after I filled it in. I learned that being specific about the layout and what each card should contain gets a much better first result, and that I still need to read the output closely instead of trusting it.",
  },
  {
    number: 2,
    title: "Calorie Tracker",
    status: "Complete",
    summary: "A Python command-line tool for logging foods and totaling daily calories.",
    what:
      "A small Python command-line tool, built with Claude Code, that logs the foods I eat and adds up my calories for the day. My food data stays on my computer and out of GitHub.",
    idea: "A quick way to track daily calories from the terminal without needing an app.",
    link: "https://github.com/Waleid23/calorie-tracker",
    reflection:
      "This was my first time using Claude Code instead of a web chat. It built a small Python command-line tool that logs foods and adds up my calories for the day. My first message got cut off, but Claude guessed what I meant correctly, which showed me why it's worth reading what the agent did instead of assuming. I tested it myself by adding two foods and checking that the total came out to 555. I kept my food data out of GitHub with a .gitignore file. When auto mode blocked the push, I learned the difference between git on my computer and GitHub online, and I ran git push myself. I also got confused about which terminal I was using with Claude Code, but I figured it out and fixed it.",
  },
  {
    number: 3,
    title: "Calorie Tracker + Claude Estimates",
    status: "Complete",
    summary: "My calorie tracker, extended so Claude estimates calories when I don't enter a number.",
    what:
      "An extension of my Python calorie tracker. When I log a food without a calorie number, Claude estimates it. The model only replies with a number, and my code checks that it's a whole number from 1 to 5000 before saving it.",
    idea: "Make logging faster by letting AI fill in calories I don't know, while my code still checks the answer.",
    link: "https://github.com/Waleid23/calorie-tracker",
    reflection:
      "I extended my calorie tracker so Claude estimates calories when I don't enter a number. The model only replies with a number, and my code checks it's a whole number from 1 to 5000 before saving. I tested a can of Coke and it estimated 140, which matched the label. I learned that keeping the model's job small makes it easier to tell whether a problem came from the model or my code.",
  },
  {
    number: 4,
    title: "Grade Calculator",
    status: "In Progress",
    summary: "A team-built tool that shows what score you need on your next exam to reach your goal grade.",
    what:
      "A grade calculator we're building for a friend. You enter how the class is graded and your scores so far, and it tells you what you need on the next exam to reach your goal grade. Team: Waleid Sami and Zakariya.",
    idea: "Help a friend know exactly what they need on their next exam instead of guessing.",
    link: "https://github.com/Waleid23/grade-calculator",
    progress:
      "Team: Waleid Sami and Zakariya. We brainstormed ideas and chose a grade calculator for a friend that shows what score they need on their next exam to reach their goal grade. I set up our shared repository with a plan and a starter skeleton. Next we'll ask our friend how their class is graded and each build our part on our own branch.",
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
  // In-progress artifacts show a progress note in place of the reflection
  const showProgress = !a.reflection && a.progress;
  document.getElementById("modal-reflection-heading").textContent = showProgress ? "Progress so far" : "Reflection";
  setText("modal-reflection", showProgress ? a.progress : a.reflection, "I'll write this once the artifact is finished.");

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
