# BotSpot Sender Profile Images

Status as of 2026-05-24:

- Google Cloud Identity users exist for:
  - `contact@botspot.trade`
  - `contact@news.botspot.trade`
  - `rob@botspot.trade`
- All three accounts are in the `BotSpot Sender Identities` organizational unit.
- All three accounts show `Cloud Identity Free` only and `$0.00` total estimated monthly bill in Google Admin.
- All three accounts have been signed in once and their Google Account profile-picture visibility is set to `Anyone`.
- Fresh real SES test messages to `rob@lumiwealth.com` show the BotSpot sender avatar in Gmail for all three accounts.

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

Google Admin accepted only PNG/JPG/JPEG uploads for profile photos. The animated GIF upload was rejected with:

`Unsupported file type. Please upload images only.`

The Admin file picker advertised:

`accept=".png,.jpg,.jpeg"`

Gmail sender avatars are therefore using the static canonical PNG. Do not spend money on BIMI/CMC/VMC unless Rob explicitly reverses the cost decision.

## Required Google Setup

Admin-uploading the photo is not enough by itself for SES-sent external mail to show the Gmail avatar.

For each sender user:

1. Upload the canonical badge in Google Admin.
2. Sign in as that user once.
3. Open Google Account About Me / Profile.
4. Confirm `Profile picture` is visible to `Anyone`.
5. Send a real SES test message and inspect it in Gmail.

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

## Historical Failed Evidence

Earlier screenshots in this folder show the bad favicon/generic-avatar attempts and are retained only as debugging evidence. Do not copy their assets forward.
