# VLCC School of Beauty, Alambagh: ads landing page

One landing page with a version per Google Ads ad group. Leads go to a Google Sheet; the Google Ads "Website lead" conversion fires only after a lead is saved.

## Pages (Final URLs for Google Ads)

| Ad group | URL |
|---|---|
| LKO - Makeup Course | `/makeup-course` |
| LKO - Beautician Parlour | `/beautician-course` |
| LKO - Hairstyling Course | `/hair-course` |
| LKO - Nail Course | `/nail-course` |
| LKO - VLCC Brand Academy | `/` |
| (required by Google) | `/privacy` |

## Edit content

Everything editable is in `app/lib/site.ts`: phone, WhatsApp, address, timing, certificate name, course list, fees, duration, headings, FAQs and photo lists (`WORK`, `CENTRE_PHOTO`). Student work photos live in `public/work/<course>/`. Empty `fees` / `duration` show "Ask on call".

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill LEADS_WEBHOOK_URL and LEADS_SECRET
npm run dev                  # open http://localhost:3000/makeup-course
```

## Google Sheet for leads

Follow the steps at the top of `apps-script/Code.gs`. Columns: Time, Name, Phone, Course, Keyword, GCLID, Status. The team updates Status for each lead.

## Junk protection (no OTP)

- 10 digit Indian mobile only (starts 6-9), obvious fake numbers blocked
- Hidden honeypot field stops bots
- Same number saved only once per 24 hours (in the Apps Script)

## Deploy

1. Push to GitHub.
2. Vercel > Add New Project > import the repo.
3. Settings > Environment Variables: `LEADS_WEBHOOK_URL`, `LEADS_SECRET`.
4. Deploy. When the subdomain is ready, add it under Settings > Domains.
