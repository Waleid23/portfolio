# Build Log: Artifact 1 (Portfolio)

**Chat AI used:** Claude (free web chat)

## What I asked and what changed

1. **Asked Claude to build the site.** I asked for a simple front-end-only portfolio with a dark background, blue accents, a short about-me section, and five clickable cards that explain each artifact. Claude gave me `index.html`, `style.css`, and `script.js`.

2. **Personalized the about-me section.** I added my name, major, and interests in `index.html`. After filling it in, the wording repeated itself ("interested in building I'm interested in..."), so I asked Claude to fix it. I also removed a note-to-self line that would have shown up on the public site.

3. **Replaced the placeholder ideas.** I edited `script.js` myself to swap the example ideas for my own: a study app (Artifact 2), a homework planner (Artifact 3), an expense tracker (Artifact 4), and an AI study assistant (Artifact 5). They stay as placeholders with empty links and reflections until I build them.

4. **Wrote the Artifact 1 reflection** in `script.js`.

## Deployment
- Live site: https://waleid23.github.io/portfolio/

---

# Build Log: Artifact 2 (Calorie Tracker)

**AI used:** Claude Code (in the terminal)

## What I asked and what changed

1. **Asked Claude Code to build the tool.** My first message got cut off, but Claude Code guessed what I meant and built a small Python command-line tool that logs foods and adds up my calories for the day.

2. **Tested it myself.** I added two foods and checked that the daily total came out to 555.

3. **Kept my data private.** I added a `.gitignore` so my food log stays on my computer and never goes to GitHub.

4. **Pushed it to GitHub myself.** Auto mode blocked the push, which taught me the difference between git on my computer and GitHub online. I ran `git push` myself.

5. **Updated the portfolio.** I replaced the Study App placeholder (Artifact 2) with the Calorie Tracker card in `script.js`, then added its link and reflection and set it to Complete.

## Link
- Repo: https://github.com/Waleid23/calorie-tracker
