# Brand Assets

Single source of truth for BotSpot / Lumiwealth brand visuals. Used by:
emails, sales pages, web app, social, decks, swag, ads, anywhere a logo
or mascot appears.

Public GitHub repo:

```bash
git clone https://github.com/Lumiwealth/botspot-brand-assets.git
```

For the Nano Banana MCP server, use these public reference files when you want
Spot in an image:

```bash
export NANO_BANANA_BOTSPOT_SPOT_REFERENCES="$PWD/botspot/botspot_mascot_rgba.png,$PWD/botspot/botspot_mascot_transparent_ready.png"
```

Spot is optional. Only set `reference_profile="botspot_spot"` when the image
should include the BotSpot mascot. Generic diagrams, app mockups, textures,
product images, and backgrounds do not need Spot.

## Layout

```
brand-assets/
  botspot/
    README.md                                  Lumiwealth's notes on the asset set
    botspot_banner_16x9_*.png                  16:9 banners (cyan / dark / rgba transparent)
    botspot_favicon*.png                       favicons (square)
    botspot_horizontal_dark_*.png              horizontal logo on dark backgrounds
    botspot_horizontal_light_*.png             horizontal logo on light backgrounds
    botspot_icon_badge_*.png                   icon-only badge (square, app icon use)
    botspot_mascot_rgba.png                    mascot, transparent
    botspot_mascot_transparent_ready.png       mascot, transparent (alt cut)
    botspot_vertical_mascot_*.png              vertical mascot stack
```

## Color/variant key

- `_cyan`   primary cyan accent
- `_magenta` magenta accent (sparingly used)
- `_dark`   for dark-background usage
- `_light`  for light-background usage
- `_rgba`   transparent PNG, drop-in over any background

## Where these come from

Original masters live in Rob's Google Drive at
`/Users/robertgrzesik/Library/CloudStorage/GoogleDrive-rob.grzesik@gmail.com/My Drive/Lumiwealth/Brand Assets/BotSpot/`.

This folder mirrors the Drive contents. Copy direction is Drive -> here
(not the other way) so the Drive remains canonical. Refresh when new
masters land:

```
cp -r "/Users/robertgrzesik/Library/CloudStorage/GoogleDrive-rob.grzesik@gmail.com/My Drive/Lumiwealth/Brand Assets/BotSpot/"*.png \
      /Users/robertgrzesik/Development/brand-assets/botspot/
```

## Where to use what

| Context | File |
|---|---|
| Email header banner | `botspot_banner_16x9_dark.png` or `_rgba.png` for transparent overlays |
| Email mascot accent (newsletter dividers, sign-off) | `botspot_mascot_rgba.png` |
| Web app favicon / app icon | `botspot_icon_badge_cyan.png` |
| Web app horizontal logo (dark mode) | `botspot_horizontal_dark_cyan.png` or `_rgba.png` |
| Web app horizontal logo (light mode) | `botspot_horizontal_light.png` |
| Slide decks / investor materials | `botspot_horizontal_dark.png` (dark slides) or `botspot_horizontal_light.png` (light slides) |
| Swag / merch | high-res masters; ask Rob for vector versions |

## Hosting for email use

Most email clients block local file paths. Production-served URLs:

- Newsletter assets: `https://botspot-public-bucket.s3.us-east-1.amazonaws.com/newsletter/brand/...`
- General email images: `https://botspot.trade/images/email/...` (CloudFront -> S3 botspot-prod)

When adding a new brand asset to email templates, upload to one of those
buckets first. Do not link directly to local paths or the Google Drive
URL.

## Future state (not yet done)

This folder is a candidate for promotion to its own GitHub repository
(e.g. `Lumiwealth/brand-assets`) with:

- Full vector originals (.svg, .ai)
- A real style guide (typography, color palette, voice, logo
  do/don't rules)
- Auto-generated usage previews
- Versioning so changes are reviewable

For now, the folder is enough. Promote when there are >50 files or when
we want to make any subset publicly browsable (Stripe / Linear / Notion
all do this).

## Hard rules

- **NEVER** use the icons baked into `botspot_react/public/` or
  `botspot_react/src/assets/` for marketing materials. Those are app
  icons, not brand assets, and they drift over time.
- **NEVER** generate a logo from scratch with an image model. Rob owns
  the brand. AI-generated mascot variants are forbidden in production
  emails / pages.
- **NEVER** alter the mascot proportions, colors, or pose for use in
  marketing. Use the canonical files here as-is.
