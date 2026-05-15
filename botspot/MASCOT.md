# Spot — the BotSpot mascot

**Name: Spot.** Use it in copy. Don't call him "the mascot" or "the robot" — call him **Spot**.

## What Spot looks like

- White / silver robot body
- Orange goggle-eyes (two round lenses, like swim goggles)
- Teal joints and accent details
- Friendly, slightly mischievous posture
- Approachable scale (about a kid's size when posed next to humans)

The canonical reference image: `botspot_mascot_rgba.png` and
`botspot_mascot_transparent_ready.png` in this folder. AI image
generation pipelines pass these as reference images to keep
generations on-brand.

## Voice + personality

Spot is:
- **Curious**, not lecturing. Spot points at things, gestures, leans in. He's the friend who just read the same article you did and wants to talk about it.
- **Wry**, not snarky. Eye-roll-grade jokes are fine; mean humor isn't.
- **Self-aware about being a robot**. Spot can play "I asked the markets and they said…" — he gets to break the fourth wall.
- **Smart**, but doesn't show it. He's got a Chartered Financial Analyst pin in a drawer somewhere but only mentions it when it lands as a joke.

Spot is NOT:
- A trading guru
- A finance professor
- A boomer
- A fanboy of any single asset class

## How to use Spot in newsletter content

**Mascot scenes** (the `mascotMeme` and `image` blocks in the issue
schema): put Spot in a costume / setting that matches the topic. Examples
that have worked:

| Topic | Spot is… |
|---|---|
| Fed decision | Wearing a judge's robe + powdered wig, gavel raised |
| QQQ wars (BlackRock vs Invesco vs StateStreet) | Wearing a casino dealer visor at a poker table with three ETF-logo opponents |
| Earnings beat | In a ref's stripes, holding up a "TOUCHDOWN" flag |
| Market crash | In a hard hat under a falling chart, holding an "I'M FINE" sign |
| Bull market | At a rodeo, riding a stylized bull labeled "SPY" |
| Inflation print | At a grocery store with a $20 bill stretched thin like a rubber band |
| New IPO | In a suit holding a "Welcome aboard" sign at a stock-exchange podium |
| Crypto news | In a Vegas neon-lit casino, side-eye to a Bitcoin sign |

**Embedded captions** (mascot memes): keep them ≤24 chars. Big bold sans-serif text on a banner across the top or bottom of the image.

## Hard rules (also see `../README.md`)

- **NEVER alter Spot's proportions, colors, or core features** — he's white/silver, orange-eyed, teal-jointed. Pipeline image generation is OK as long as the reference image is passed and Gemini doesn't drift the colors.
- **NEVER generate a brand-new mascot from scratch with an image model** for production use. Spot is the brand. Costumes and scenes around him are fine; redesigning him isn't.
- **NEVER use Spot to dispense investment advice on-image**. He can be confused, surprised, amused, or dramatic about news, but he never says "buy X." That's a legal liability per `../../botspot_node/CLAUDE.md`.
- **DO use Spot's name in copy**. "Spot's pick of the week" / "Spot says watch QQQ" / "Spot is calling it." Builds character recognition over time.

## Files in this folder

- `botspot_mascot_rgba.png` — canonical reference (transparent)
- `botspot_mascot_transparent_ready.png` — alt cut, transparent
- `botspot_vertical_mascot_*.png` — vertical stack with logo

For weekly newsletter image generation, the Gemini pipeline at
`botspot_node/src/services/newsletter/generateImage.service.ts` already
loads the mascot reference from `assets/brand/` (a copy of the canonical
file). When the canonical file changes here, sync to that folder.

## Future

If the brand evolves — new poses, color refinements, a younger / older
Spot variant — update this doc the same day. The doc is the single
source of truth for what "on-brand Spot" means; if it falls out of sync
with the actual files, the doc wins (and the files get re-cut).
