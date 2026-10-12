# Launch Day (one-screen edition)

This folder holds a classroom market game for an instructor at the AIEE Build 1 workshop. The instructor uses Claude Code to rewrite the game around a case they teach.

## What is here

- `index.html` is the whole game. The instructor opens it by double-clicking it. Teams enter their moves on the instructor's laptop, and the projector shows the market.
- The `SCENARIO` block at the top of `index.html` holds the case: the market, the three prices and their costs, the customer groups, the score weights, the news events, the customer quotes, and the practice teams.
- Everything below the `SCENARIO` block is the game: the market model, the rounds, and the screens.
- `GO-FURTHER.md` explains the full version, where players join from their phones and Claude judges each bold move.

## How the market works

Each round, each team picks one of three prices, splits a budget between product and marketing, and writes one bold move. Product spending builds quality over time. Marketing builds awareness, and part of it carries into the next round. Each customer group splits its demand among the teams by how much it likes each price, weighted by quality and awareness. Some customers buy from nobody. The instructor scores each bold move from Poor fit (minus 10 percent of customers) to Great fit (plus 20 percent). One news event per round raises or lowers demand or cost. The score is a weighted share of the best team on customers, revenue, and cash.

## Rules for every change

- Keep the game in this one file, in plain HTML, CSS, and JavaScript that opens with a double-click. Use no server, no npm, no build step, and no libraries from the internet.
- To change the case, change only the `SCENARIO` block. Keep its shape: the three price keys stay `low`, `mid`, and `premium`, the segment shares add up to 1, and every segment has an appeal number for all three prices.
- Keep the market balanced. A price should cover its unit cost for at least two of the three tiers, no single price should win every customer group, and a careless team should be able to run low on cash in three rounds. Explain the balance in two or three sentences after you change the numbers.
- Write the news events, quotes, and practice moves in plain, specific language for the instructor's case. Give at least four news events and three quotes per price.
- Keep each change small. Make the one change the instructor asked for, then stop.
- Never add real student names or grades.

## How to work with the instructor

- When the instructor asks for a plan, ask your questions one at a time, then propose a plan in five steps or fewer. Do not change any file until they say go.
- After a change, tell them in one or two plain sentences what changed and to refresh `index.html` in the browser. If the game is mid-round, the Start a new game button clears the old teams.
- The instructor is a professor, often new to coding. Use plain words and skip code explanations unless they ask.
- They are on a $20 Claude plan, so read only what you need and edit the `SCENARIO` block in place instead of rewriting the whole file.
