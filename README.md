# AIEE26: Build 1 workshop

This repository holds the demo code and guides for Build 1: From Concept to Prototype with AI, at AI for Entrepreneurship Educators 2026 (Babson Academy and the Generator). Jonathan Sims and Jonathan Griffiths lead the session.

During the workshop, every track starts from one prompt on its track page at aiee.thegenerator.dev, with nothing to download. This repository is for afterward: it holds the code behind two of the demos, ready to remix around your own course.

| Folder | What it holds | Where you work |
|---|---|---|
| `make-a-game` | Launch It!, the startup market game from the demo, in a one-screen version | Claude Code |
| `make-a-class-tool` | A name-practice page for an invented class of 20 students | Claude Code |
| `make-a-prototype` | Jonathan Griffiths's guide to designing an object with AI and 3D printing it | Claude |

Nothing needs to be installed. Every starter is a set of plain web pages that open with a double-click.

## Remix a demo in the Claude desktop app

1. Download this repository with Code, then Download ZIP, and double-click the zip to unzip it.
2. Open the Claude desktop app, click Code, and choose the folder you want to remix.
3. Copy its first prompt below, fill in the parts in square brackets, and paste it in.
4. Answer Claude's questions. When you like its plan, type go.

### Make a Game

> I teach [course] to [who your students are]. I unzipped the starter, and this is its folder. Read CLAUDE.md first. I want Launch It! to run on a case from my class: [the company, its market, and its rivals]. Ask me up to three short questions about the case, one at a time. Then propose a plan in five steps or fewer. Do not change anything until I say go.

### Make a Class Tool

> I teach [course] to [who your students are]. I unzipped the starter, and this is its folder. Read CLAUDE.md first. I want a name-practice page for this class: show a face, let me guess the name, then reveal it, and keep track of the names I miss. Ask me up to three short questions about how I would use it, one at a time. Then propose a plan in five steps or fewer. Do not write any code until I say go.

### Make a Prototype

This track works in a regular Claude chat. Open `make-a-prototype/README.md` for its first prompt and Jonathan Griffiths's guide.

## Remix a demo in Claude on the web

If you only have Claude in a browser, you can still build the same tools as artifacts, the pages Claude makes inside a chat.

1. Download and unzip this repository, as above.
2. Start a new chat at claude.ai and attach the starter: `index.html` for the game, or `index.html` and `students.js` for the class tool.
3. Paste its first prompt from above, and replace "I unzipped the starter, and this is its folder. Read CLAUDE.md first." with this: "I attached the starter. When I say go, give me the finished page as an artifact I can try here."

The web path leaves out the student portraits, so the class tool shows initials in their place.

## Privacy

Use the invented class and made-up student work only. The 20 students in `make-a-class-tool` are invented, and their portraits were made with AI.

## After the session

- `make-a-game/GO-FURTHER.md` shows how to run the full Launch It!, where players join from their phones and Claude judges each bold move.
- Everything here stays available after the workshop, so you can come back and keep building.
