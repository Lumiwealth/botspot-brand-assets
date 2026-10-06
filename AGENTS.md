# Approved BotSpot branding

Rob rejected the flat gray robot with solid orange eyes and white diagonal
arrows on 2026-10-06. Never use, restore, regenerate or copy that design for
favicons, Auth0, app icons, email, or any other brand surface.

The three rejected `botspot_favicon*.png` variants have been deleted.
`node scripts/check-brand-assets.mjs` rejects their names and exact bytes,
including renamed copies. `node --test tests/*.test.mjs` runs the complete
brand contract and is enforced by the Approved brand assets CI workflow.

Use the existing detailed Spot mascot unchanged. For square branding,
favicons and Auth0, use `botspot/botspot_icon_badge_rgba.png`. Do not use an
old deployed favicon or `logo192.png` URL as a source for brand artwork.
Check the image against the current approved website logo before using it.

Never copy a whole historical Drive folder over this repository. Import
individual approved assets, then run the brand checks before committing.
Changes must be made in an agent-owned worktree and pushed to GitHub main.
