# Make a Prototype

Jonathan Griffiths of the Weissman Foundry leads this track. You design a physical object with Claude and get a file you can 3D print. Claude does the thinking: concepts, measurements, prompts, and fixes. The tool you pick is where the file comes out.

This track works in a regular Claude chat, on the web at claude.ai or in the Claude desktop app.

## 1. Get the guide

Jonathan Griffiths wrote a guide for this track: From an idea to a printed part, with Claude. It walks through three tools with a worked example for each. During the workshop, download it from aiee.thegenerator.dev/prototype.

## 2. Describe the use

Start a new chat, fill in the square brackets, and paste this prompt:

> I want to 3D print [the object]. [Where it lives, who uses it, and what has to stay true.] Before any modeling, give me three quite different concepts in a few lines each, with what each one does well and where it might fall short. Then list what you need to know from me, with a suggested default for each.

## 3. Pick a tool

- Does it have to fit something? Start with OpenSCAD. Claude writes the model as code, and you change it one number at a time. OpenSCAD is free at openscad.org, or you can use it in the browser at ochafik.com/openscad2. (Guide page 3)
- Is it a mechanical shape you can describe but not code? Try Ragnar at app.ragnar.build. Claude writes a description with every dimension spelled out, and Ragnar turns it into a model. (Guide page 6)
- Is it a character or a curve? Use Meshy at meshy.ai. Claude writes a prompt tuned for printing. (Guide page 10)

Not sure which one fits? Describe the object to Claude and ask.

## 4. Test small, then go again

Print a thin slice or a half-size version first. These prompts help:

> Before I commit to a long print: what's most likely to be wrong with this when it's in my hand? Rank the problems, and add a small test piece that checks the riskiest one.

> Paste the complete code in a code block so I can copy it straight into OpenSCAD.

> The test piece [say exactly what happened, for example: the plug binds on the screen side by about 1 mm]. Update the design.

## 5. Print at the Foundry

During AIEE, upload your STL files to the AIEE F26 3D Prints folder. The link is in the guide and on aiee.thegenerator.dev/prototype. Put your name in each file name, for example griffiths-phone-stand-test.stl. Pick up your prints at the Weissman Foundry on Saturday or Sunday, October 17 or 18, from 12 to 8 pm. Ask a Scout, one of the Foundry's student staff.

## After today

None of these tools makes a file you would hand straight to a manufacturer. When a design is ready for that, rebuild it in real CAD such as Fusion or Onshape. Both have free education plans, and Claude can walk you through getting started.
