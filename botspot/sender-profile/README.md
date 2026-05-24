# BotSpot Sender Profile Images

Status as of 2026-05-24:

- Google Cloud Identity users exist for:
  - `contact@botspot.trade`
  - `contact@news.botspot.trade`
  - `rob@botspot.trade`
- All three accounts are in the `BotSpot Sender Identities` organizational unit.
- All three accounts show `Cloud Identity Free` only and `$0.00` total estimated monthly bill in Google Admin.
- Static profile photos were uploaded through Google Admin for all three users.
- Gmail test emails sent through SES still showed the default blue sender avatar immediately after upload.

## Assets

- Approved source animation:
  `/Users/robertgrzesik/Development/.runway_output/botspot_sender_avatar_variant_a_pulse.mp4`
- Animated GIF export:
  `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/botspot_sender_avatar_variant_a_256.gif`
- Static PNG export used for Google Admin:
  `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/botspot_sender_avatar_variant_a_static_512.png`
- Contact sheet inspected before upload:
  `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/botspot_sender_avatar_variant_a_contact_sheet.jpg`

## What Was Verified

### Google Admin Upload

Google Admin accepted only PNG/JPG/JPEG uploads for profile photos. The animated GIF upload was rejected with:

`Unsupported file type. Please upload images only.`

The Admin file picker advertised:

`accept=".png,.jpg,.jpeg"`

After uploading the PNG, each user page showed a custom `lh3.google.com` profile-photo URL after reload:

- `BotSpot News <contact@news.botspot.trade>`
- `BotSpot Contact <contact@botspot.trade>`
- `Rob Grzesik <rob@botspot.trade>`

### Real SES Test Sends

Sent real SES test messages to `rob@lumiwealth.com` from all three sender identities at `20260524-195722` UTC:

- `contact@botspot.trade`
  - Message ID: `0100019e5b904a97-ce91c057-0298-4f9d-b5b5-46f6d5794d2a-000000`
- `contact@news.botspot.trade`
  - Message ID: `0100019e5b904d10-7346673c-c3c9-47e7-a2f0-ca6e62785dae-000000`
- `rob@botspot.trade`
  - Message ID: `0100019e5b904f6e-8686d972-1532-4db7-8696-b2395932e0c9-000000`

Gmail received all three messages, but the opened `contact@news.botspot.trade` test still showed Gmail's default blue avatar in the message header.

Evidence screenshots:

- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_sender_avatar_test_20260524_195722.png`
- `/Users/robertgrzesik/Development/brand-assets/botspot/sender-profile/gmail_open_news_avatar_test_20260524_195722.png`

## Current Interpretation

The free Google Admin profile-photo upload is not enough by itself for Gmail sender-avatar display on SES-sent external mail.

Google's Workspace Admin help says admin-added user photos are visible to users in the organization and to external users they talk to in Google Chat. Google's Account help says user-controlled Google Account profile info can be made visible to `Anyone` and can appear in Google services including Gmail.

So the next free attempt is:

1. Re-authenticate into Google Admin.
2. Reset or set passwords for the three free Cloud Identity sender users if needed.
3. Sign in as each sender user.
4. Upload the same profile image from the Google Account side, not only Admin.
5. Set profile-photo visibility to `Anyone` where Google exposes that control.
6. Send fresh SES test messages and inspect Gmail again.

## Blocker

Google required admin re-auth before the account-side work could continue:

`Open the Gmail app on Apple iPhone 15 Pro Max ... tap Yes on the prompt`

Do not buy BIMI/CMC/VMC for this unless Rob explicitly reverses the cost decision. Gmail BIMI logo display still requires a certificate path, and Rob rejected the yearly certificate cost.
