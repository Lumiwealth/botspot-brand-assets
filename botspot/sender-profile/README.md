# BotSpot Sender Profile Images

Status as of 2026-05-25:

- Google Cloud Identity users exist for:
  - `contact@botspot.trade`
  - `contact@news.botspot.trade`
  - `rob@botspot.trade`
- All three accounts are in the `BotSpot Sender Identities` organizational unit.
- All three accounts show `Cloud Identity Free` only and `$0.00` total estimated monthly bill in Google Admin.
- All three accounts have been signed in once and their Google Account profile-picture visibility is set to `Anyone`.
- Fresh real SES test messages to `rob@lumiwealth.com` show the BotSpot sender avatar in Gmail for all three accounts.
- Animated Google Account profile GIFs are now set for all three sender accounts through the direct Google Account profile-photo flow.
- `contact@botspot.trade` is also saved in Rob's Google Contacts as `BotSpot by Lumiwealth` with the canonical badge, because Gmail iOS can use the recipient's Contacts card/directory resolution in the message list.

## Canonical Asset

Use this for Google sender/profile avatars:

`/Users/robertgrzesik/Development/brand-assets/botspot/botspot_icon_badge_rgba.png`

Convenience pointer:

`/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/botspot_sender_profile_logo.png`

That pointer is a symlink to the canonical badge above.

## Do Not Use

Do not use these for Gmail sender/profile avatars:

- `/Users/robertgrzesik/Development/brand-assets/botspot/botspot_favicon.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/botspot_favicon_rgba.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/botspot_favicon_cyan.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/botspot_sender_avatar_variant_a_static_512.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/botspot_sender_avatar_variant_a_256.gif`

The favicon is an app/browser icon, not the BotSpot sender logo. The generated sender-avatar variant is also rejected for this use because it does not match the actual BotSpot badge.

## Animated GIF Result

Google Admin accepted only PNG/JPG/JPEG uploads for profile photos. The animated GIF upload was rejected there with:

`Unsupported file type. Please upload images only.`

The Admin file picker advertised:

`accept=".png,.jpg,.jpeg"`

Do not use Google Admin for animated avatars.

Direct Google Account profile-photo upload does accept animated GIFs. On 2026-05-25, Chrome MCP uploaded and saved:

`/Users/robertgrzesik/Development/recovery/botspot_node_sender_avatar_20260524/tmp/sender-avatar/selected/botspot_sender_avatar_selected_gen45_pulse_256.gif`

for:

- `contact@news.botspot.trade`
- `contact@botspot.trade`
- `rob@botspot.trade`

Chrome network evidence after saving showed the profile image responses as `content-type: image/gif` with `filename="unnamed.gif"` for all three Google Account profile pages.

Fresh SES test messages were sent to `rob@lumiwealth.com` at stamp `20260525-233201`. Gmail opened-message inspection for `contact@news.botspot.trade` loaded the sender avatar from:

`https://lh3.googleusercontent.com/a/ACg8ocLGARk4-opZ3KVMgc7_NrzqVE5u28RsX7_IMw--yZ0ojr72Fzw=s80-p`

That Gmail-rendered sender-avatar asset was downloaded to:

`/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_rendered_news_avatar_s80_20260525.gif`

and verified as `GIF image data, version 89a, 80 x 80` with `73` frames.

Evidence screenshots:

- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_animated_avatar_test_list_20260525-233201.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_animated_avatar_test_open_news_20260525-233201.png`

Important caveat: Gmail says profile-photo changes can take a day or two to propagate across all Google services. If iOS still shows a cached static image immediately after upload, wait for propagation and re-check before changing assets again.

Do not spend money on BIMI/CMC/VMC unless Rob explicitly reverses the cost decision.

## Required Google Setup

Admin-uploading the photo is not enough by itself for SES-sent external mail to show the Gmail avatar.

For each sender user:

1. Upload the canonical badge in Google Admin.
2. Sign in as that user once.
3. Open Google Account About Me / Profile.
4. Confirm `Profile picture` is visible to `Anyone`.
5. Send a real SES test message and inspect it in Gmail.

For `contact@botspot.trade`, also save/update the matching Google Contacts card in Rob's `rob@lumiwealth.com` contacts:

- Name: `BotSpot by Lumiwealth`
- Email: `contact@botspot.trade`
- Photo: `/Users/robertgrzesik/Development/brand-assets/botspot/botspot_icon_badge_rgba.png`

Reason: on 2026-05-24, Gmail web opened-message headers showed the badge, but Gmail iOS still showed the blue default avatar for the message-list rows from `contact@botspot.trade`. Saving the contact card and assigning the same canonical badge fixed the most likely iOS list-view override/cache path.

This was verified on 2026-05-24.

## Verified Gmail Evidence

Final SES test stamp: `20260524-210728`

Message IDs:

- `contact@news.botspot.trade`: `0100019e5bd07a13-b9795dd9-10ff-45b8-a3fb-dde2117d70ef-000000`
- `contact@botspot.trade`: `0100019e5bd07cad-e23be3ed-ab63-4b31-9e63-4144d5305804-000000`
- `rob@botspot.trade`: `0100019e5bd07f06-17f1ad53-4cf7-46f2-92a3-5b33b93a7d06-000000`

Screenshots:

- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_final_logo_results_20260524-210728.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_open_news_final_logo_20260524-210728.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_open_contact_final_logo_20260524-210728.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_open_rob_final_logo_20260524-210728.png`

All three opened Gmail screenshots show the real circular BotSpot badge next to the sender name.

Follow-up `contact@botspot.trade` retest after Google Contacts override:

- First retest message ID: `0100019e5bf36401-58b88543-37f2-4583-8a5c-c7c8b8f25b3e-000000`
- Final retest message ID: `0100019e5bf854aa-1af8c02b-d8db-46b4-9b89-e32f0fd6ad9f-000000`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/google_contacts_contact_botspot_trade_after_contact_photo_20260524.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_open_contact_after_contact_override_20260524-214537.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_open_contact_after_name_photo_override_20260524-215101.png`

The final Gmail web opened-message screenshot shows `BotSpot by Lumiwealth <contact@botspot.trade>` with the real circular BotSpot badge after the contact-card photo and name normalization.

## Historical Failed Evidence

Earlier screenshots in this folder show the bad favicon/generic-avatar attempts and are retained only as debugging evidence. Do not copy their assets forward.
