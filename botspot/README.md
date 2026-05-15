# BotSpot Brand Assets

Master files for the BotSpot mascot, wordmark, and brand lockups.

## ⚠️ Critical gotcha: nano-banana outputs JPEG, not PNG

The `nano-banana` MCP image generator (Gemini 3 Pro Image / 3.1 Flash Image)
**always saves files as JPEG even when the filename ends in `.png`**. JPEG
cannot store an alpha channel, so any "transparent background" prompt comes
back as a solid color rectangle baked into the image.

You can verify with:

```bash
file botspot_mascot_transparent_ready.png
# JPEG image data, ... <-- not a real PNG
```

This is why the navbar logo on botspot.trade used to show a dark navy
rectangle around the mascot — the rectangle was the JPEG background, not
something CSS could remove.

## File naming convention

| Suffix       | What it is                                                  |
|--------------|-------------------------------------------------------------|
| (no suffix)  | Raw nano-banana output. **JPEG** under a `.png` extension.  |
| `_rgba`      | Real PNG with alpha channel, processed via the script below. Use this in code. |

When you regenerate via MCP, the new file overwrites the no-suffix version.
You then run the script to produce a fresh `_rgba` file.

## How to produce a real transparent PNG

Use `process_brand_asset.py` (lives in this folder, next to the masters). It
does proper background removal with edge-aware alpha and **color
decontamination** (removes the chroma-key tint from semi-transparent edges so
the subject doesn't carry a halo on dark backgrounds).

```bash
cd "$BRAND"   # this folder

# Pure-magenta chroma-key background (preferred — magenta is not in the BotSpot
# palette, so the keying is clean even when the subject contains white text or
# dark elements). Generate the asset on magenta via nano-banana, then:
python3 process_brand_asset.py \
  botspot_horizontal_dark_magenta.png \
  botspot_horizontal_dark_rgba.png \
  --bg magenta --inner 14 --outer 45

# White-background variants (mascot full-body, horizontal_light, etc.)
python3 process_brand_asset.py \
  botspot_mascot_transparent_ready.png \
  botspot_mascot_rgba.png \
  --bg white --inner 18 --outer 55

python3 process_brand_asset.py \
  botspot_horizontal_light.png \
  botspot_horizontal_light_rgba.png \
  --bg white --inner 18 --outer 55
```

The script verifies its output is a real RGBA PNG before exiting (it checks
the file magic bytes and the Pillow mode), so a regression where the file is
secretly a JPEG cannot slip through.

### Dark-background variants

Don't try to chroma-key the original dark-navy versions directly — the mascot
contains dark elements that get eaten by the keying. Instead, use nano-banana
edit_image to **re-render the asset on a pure magenta (#FF00FF) background**
first, keeping the rest of the composition identical. Then key out the magenta:

```bash
python3 process_brand_asset.py \
  botspot_horizontal_dark_magenta.png \
  botspot_horizontal_dark_rgba.png \
  --bg magenta --inner 14 --outer 45
```

Magenta is not in the BotSpot palette so nothing in the subject gets
incorrectly keyed.

## Where these files are used

- `botspot_react/src/assets/botspot_mascot.png` — copy of `botspot_mascot_rgba.png`,
  rendered in the navbar by `App.js` together with CSS-rendered "BotSpot" wordmark
  and "by LumiWealth" tagline. **Wordmark and tagline are HTML text, not baked
  into the image** — that way they stay crisp on retina, scale with the layout,
  and can be tweaked without regenerating art.

## Regeneration workflow

1. Use the nano-banana MCP to regenerate the asset (saves as fake-PNG JPEG).
2. Run `scripts/process_brand_asset.py` to produce the `_rgba` version.
3. Copy the `_rgba` file into the consuming project (e.g.
   `botspot_react/src/assets/botspot_mascot.png`).
4. Hard-refresh the dev server and visually verify on a non-matching background.
5. Commit the consuming project's copy of the asset.
