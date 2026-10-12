# Class Tools starter

This folder is a small class website for an instructor at the AIEE Build 1 workshop. The instructor uses Claude Code to add tools for their own teaching, such as name practice, a cold-call picker, a team maker, or a seating chart.

## What is here

- `index.html` shows the class: a face, name, and team for each student. Clicking a face opens that student's card.
- `students.js` holds the class list as `CLASS.students`. Each student has an `id`, `name`, `short_name` (what they like to be called), `pronouns`, `pronunciation`, `hometown`, `year`, `concentration`, `interests`, `fun_fact`, `intro`, `team`, and `photo`.
- `photos/` holds one portrait per student.

The 20 students are invented, and their portraits were made with AI. None of them is a real person.

## Rules for every change

- Keep everything in plain HTML, CSS, and JavaScript that opens with a double-click on an `.html` file. Use no server, no npm, no build step, and no libraries from the internet, so the pages work offline on Mac and Windows.
- Read the class from `students.js`. Do not fetch files with `fetch()`, because browsers block it for pages opened from a folder.
- Never ask for real student names, photos, or grades, and never add them. A real roster stays out of this folder during the workshop.
- Put each new tool in its own page (for example `name-practice.html`) and add a link to it at the top of `index.html`.
- Keep pages readable on a classroom projector: large faces, large names, high contrast.
- Keep each change small. Make the one change the instructor asked for, then stop.
- Save anything a tool needs to remember (such as missed names) in the browser's `localStorage`, under a key that starts with `classtools-`.

## How to work with the instructor

- When the instructor asks for a plan, ask your questions one at a time, then propose a plan in five steps or fewer. Do not write any code until they say go.
- After a change, tell them in one or two plain sentences what changed and which file to open or refresh in the browser.
- The instructor is a professor, often new to coding. Use plain words and skip code explanations unless they ask.
- They are on a $20 Claude plan, so read only the files you need and avoid rewriting whole files when a small edit will do.
