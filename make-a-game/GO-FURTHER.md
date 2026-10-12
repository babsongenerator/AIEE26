# Go further: the full Launch It!

The one-screen game runs on the instructor's laptop. The full Launch It!, the one in the session demo, adds two things:

- Players join from their own phones by scanning a QR code on the projector.
- Claude reads every bold move during the round and judges how customers respond, so nobody scores the moves by hand.

The full version runs a small server on your laptop, so it needs one install.

## What you need

1. Node. Download the installer marked LTS from nodejs.org and run it. It takes about five minutes.
2. The Claude desktop app. Sign in with your Claude plan.

## Steps

1. Unzip `go-further/launch-day-full-starter.zip`. On a Mac, double-click it. On Windows, right-click it and choose Extract All.
2. In the Claude desktop app, open the Code tab and choose the `launch-day-starter` folder.
3. Paste this prompt:

   > Read CLAUDE.md and README.md. My case is in the SCENARIO block of index.html in the make-a-game folder, two folders up from this one. Turn it into a new scenario file for this game, test it twice with a quick simulated game, and start the game on my laptop. Ask me before you run anything.

4. Open the `/admin` address that Claude gives you. The host PIN is launch. Put the `/display` address on the projector, and players join from their phones.

Some campus networks keep phones from reaching a laptop. If players can't open the page, connect your laptop and their phones to a phone hotspot.

The AI market uses your own Claude login. A three-round game with 12 teams uses about $0.13 of your plan.
