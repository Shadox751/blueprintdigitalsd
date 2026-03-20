# Technology Stack

**Project:** SD Contractor Agency
**Researched:** 2026-03-19

## Budget Reality Check

**$100/month is NOT realistic for the full stack.** Here is why:

- Website builder/hosting for client sites: $10-30/site/month (Framer) or ~$5/site/month (WordPress)
- AI receptionist platform: $29-97/month minimum
- CRM/pipeline: $0-97/month
- Phone number per client: $1-2/month each

**Realistic minimum budget:** $150-200/month to serve your first 2-3 clients. However, after your first client's monthly retainer ($150-300/mo) covers tools, the budget becomes self-funding. The real question is: what do you spend on Day 1 before revenue?

**Recommended Day 1 budget:** $97/month (GoHighLevel Starter) + ~$15-20/month in usage costs. Total: ~$115-120/month. This exceeds $100 by a small margin but replaces 4-5 separate tools.

---

## Recommended Stack

### Winner: GoHighLevel Starter ($97/mo) as the Hub

GoHighLevel is the correct answer for this use case. It is purpose-built for exactly what Allan is doing: a solo agency selling websites + AI services to local businesses. Here is why it wins as the core platform:

| What It Replaces | Standalone Cost | GHL Cost |
|-------------------|----------------|----------|
| CRM + pipeline | $25-50/mo (HubSpot, Pipedrive) | Included |
| Website/funnel builder | $10-30/mo per site | Included |
| Email marketing | $20-50/mo (Mailchimp) | Included |
| Appointment scheduling | $10-15/mo (Calendly) | Included |
| SMS marketing | $20-40/mo (Twilio + app) | Pay-per-use |
| AI chat receptionist | $29-65/mo | Included (text-based) |
| Reputation management | $30-50/mo | Included |

**GHL Starter plan includes:**
- 3 sub-accounts (one for Allan's agency + 2 client accounts)
- Unlimited websites and funnels (drag-and-drop builder)
- Full CRM with unlimited contacts
- Email + SMS marketing (usage-based costs for SMS)
- Appointment booking calendars
- AI Employee (text-based chat, SMS auto-responder) -- included
- Voice AI (inbound receptionist) -- $0.06/min + LLM tokens, ~$0.08-0.12/min total
- Pipeline/deal tracking
- Review request automation

**Confidence:** HIGH -- pricing verified across multiple sources including official GHL documentation.

### AI Voice Receptionist: GoHighLevel Voice AI (Add-on to Starter)

**Recommendation:** Use GHL's built-in Voice AI rather than a separate platform.

| Platform | Monthly Base | Per-Minute | White Label | Solo Agency Fit |
|----------|-------------|------------|-------------|-----------------|
| **GHL Voice AI** | $0 (included in $97) | ~$0.08-0.12/min total | Yes (via GHL) | BEST -- no extra subscription |
| Vapi | $0 | $0.30-0.33/min total | Needs wrapper ($99-399/mo) | Too complex, too expensive |
| Bland AI | $0 | $0.09/min + extras | Needs engineering | Not for solo operators |
| Synthflow | $29/mo (starter) | $0.12-0.13/min overage | $1,400/mo agency plan | Way over budget |
| Retell AI | $0 | $0.13-0.31/min total | Enterprise only ($3k+/mo) | Over budget |
| My AI Front Desk | $65/mo | Included in plan | $194/mo white-label | Decent but redundant with GHL |

**Why GHL Voice AI wins:**
1. No additional monthly subscription -- already paying $97 for GHL
2. Per-minute cost is competitive ($0.08-0.12/min)
3. A contractor getting 20 calls/day at ~2 min average = 40 min/day = ~1,200 min/month = ~$96-144/month in voice usage PER CLIENT. This is what you bill the client for ($150-300/mo retainer covers this easily with margin)
4. Integrated with the same CRM, calendar, and pipeline -- no Zapier glue needed
5. Built-in call recording, transcription, and analytics

**Confidence:** MEDIUM -- GHL Voice AI is newer and reviews on quality are mixed. Test thoroughly before selling to clients. Have a fallback plan (My AI Front Desk at $65/mo is the backup).

### Client Websites: GoHighLevel Website Builder (Included)

**Do NOT use Lovable, Framer, Webflow, or WordPress for client sites.** Here is why:

| Builder | Monthly Cost Per Site | Speed to Build | Contractor Fit | Verdict |
|---------|----------------------|----------------|----------------|---------|
| **GHL Builder** | $0 (included) | 1-2 hours with template | Good -- forms, booking, SEO | USE THIS |
| Lovable.dev | $25/mo (Pro) for credits | 2-4 hours | Overkill -- builds React apps | REJECT |
| Framer | $10-30/mo per site | 1-2 hours | Pretty but $$ scales badly | REJECT |
| Webflow | $18-29/mo per site | 2-3 hours | Too expensive per site | REJECT |
| WordPress + Divi | $5-10/mo hosting + $249 lifetime Divi | 2-4 hours first, 1-2 after | Good but unnecessary complexity | BACKUP OPTION |
| Carrd | $1.60/mo ($19/year for 10 sites) | 30 min | Too simple -- single page only | REJECT for primary |

**Why GHL builder wins:**
1. Zero additional cost -- included in $97/mo
2. Templates exist for contractor/service businesses
3. Built-in forms flow directly into the CRM (no integration needed)
4. Booking calendar embeds natively
5. SEO basics covered (meta tags, schema markup with AI)
6. Client sites live under your GHL account -- you control them

**Why NOT Lovable.dev:** Lovable is an AI app builder that generates React code. It is designed for MVPs and SaaS prototypes, NOT for churning out contractor brochure sites. Problems for this use case:
- Credit-based system means each site costs credits ($25/mo minimum)
- "Looping bug" problem where AI fixes one thing and breaks another
- No built-in CRM, booking, or lead capture integration
- No SEO dashboard or performance optimization
- Gets you "70% of the way there" -- the last 30% is painful
- Each site is a standalone React app requiring its own hosting
- Massive overkill for a 5-page contractor website

**Confidence:** HIGH on the Lovable rejection. MEDIUM on GHL builder quality -- it is functional but not as polished as Framer or Webflow. For contractor sites (which need to be professional but not design-award-winning), it is sufficient.

---

## Complete Stack Summary

| Category | Tool | Cost | Notes |
|----------|------|------|-------|
| **CRM + Pipeline** | GoHighLevel Starter | $97/mo | 3 sub-accounts, unlimited contacts |
| **Client Websites** | GHL Website Builder | $0 (included) | Drag-and-drop, templates |
| **AI Text Receptionist** | GHL AI Employee | $0 (included) | SMS, chat, Instagram DM auto-response |
| **AI Voice Receptionist** | GHL Voice AI | ~$0.08-0.12/min | Bill to client via retainer |
| **Phone Numbers** | GHL (LC Phone) | $1.15/mo per local number | One per client |
| **Email Marketing** | GHL Email | Included (fair use) | Automated sequences |
| **SMS Marketing** | GHL SMS | ~$0.0079/segment | Usage-based |
| **Appointment Booking** | GHL Calendar | $0 (included) | Embeds in client sites |
| **Reviews** | GHL Reputation Mgmt | $0 (included) | Auto-request reviews post-job |
| **Domain Registration** | Namecheap/Cloudflare | ~$10-12/year per client domain | Client pays or include in setup fee |

### Monthly Cost Breakdown (Allan's costs)

**Fixed costs:**
- GoHighLevel Starter: $97/mo

**Variable costs (per client):**
- Phone number: $1.15/mo
- Voice AI usage: depends on call volume (~$50-150/mo per active client)
- SMS: minimal (~$5-10/mo per client)

**Day 1 cost (before any clients):** $97/mo
**With 1 client:** $97 + ~$55-165 in usage = ~$150-260/mo
**Revenue from 1 client:** $150-300/mo retainer = break-even or profitable from client #1

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| All-in-one platform | GoHighLevel ($97/mo) | Separate tools (CRM + builder + AI) | 3-4x the cost, integration headaches |
| Website builder | GHL Builder (included) | WordPress + Divi ($249 lifetime + hosting) | Extra complexity and cost for no gain |
| Website builder | GHL Builder (included) | Lovable.dev ($25/mo+) | Wrong tool -- app builder, not site builder |
| Website builder | GHL Builder (included) | Framer ($10-30/mo per site) | Per-site cost kills margins |
| AI voice | GHL Voice AI ($0.08-0.12/min) | My AI Front Desk ($65/mo) | Extra cost when GHL includes voice |
| AI voice | GHL Voice AI | Vapi ($0.30+/min + wrapper) | 3x per-minute cost, needs white-label wrapper |
| AI voice | GHL Voice AI | Synthflow ($29-1400/mo) | Starter too limited, Agency plan way over budget |
| CRM | GHL CRM (included) | HubSpot Free | Missing automation, SMS, no sub-accounts |

---

## What NOT to Use (and Why)

### Do NOT use Lovable.dev
- It builds React web applications, not contractor brochure sites
- Credit system is unpredictable for production delivery
- No CRM/booking integration -- you would need to wire everything manually
- The "looping" bug issue means unpredictable build times
- Zero SEO tooling built in
- Each site needs separate hosting (Vercel/Netlify)
- **Bottom line:** Lovable solves a problem Allan does not have

### Do NOT use Framer for client sites
- Beautiful but $10-30/month PER CLIENT SITE with no volume discount
- 5 client sites = $50-150/mo just for hosting, eating your entire budget
- No CRM integration -- leads go nowhere without Zapier ($20+/mo)
- Overkill design capabilities for contractor sites

### Do NOT use Webflow for client sites
- $18-29/mo per site (CMS plan needed for blog/SEO content)
- Same per-site scaling problem as Framer
- Steeper learning curve than GHL builder
- No built-in CRM or booking

### Do NOT use Vapi/Bland AI/Retell AI directly
- All require technical integration (API coding, webhook setup)
- Per-minute costs are higher than GHL Voice AI
- White-label wrappers (Vapify, VoiceAIWrapper) add $99-399/mo
- Solo operator cannot afford the complexity or cost

### Do NOT start with the GHL $297 Unlimited plan
- $97 Starter gives 3 sub-accounts (agency + 2 clients)
- Upgrade when you hit client #3
- Do not pre-spend on capacity you do not have yet

---

## Upgrade Path

| Milestone | Action | New Cost |
|-----------|--------|----------|
| 0-2 clients | GHL Starter ($97/mo) | ~$97 + usage |
| 3+ clients | Upgrade to GHL Unlimited ($297/mo) | ~$297 + usage (unlimited sub-accounts) |
| 10+ clients | Consider GHL Pro ($497/mo) for white-label branding | ~$497 + usage |
| High call volume clients | Evaluate dedicated voice AI (Synthflow Pro $450/mo) if GHL voice quality is insufficient | Add $450/mo |

---

## Installation / Setup Steps

```
1. Sign up for GoHighLevel Starter plan ($97/mo)
   - URL: gohighlevel.com (14-day free trial available)

2. Configure agency sub-account
   - Set up your agency pipeline (Lead > Pitched > Closed > Onboarding > Live)
   - Create intake form template for new clients

3. Build contractor website template in GHL
   - Hero with phone CTA
   - Services section
   - About / license info
   - Reviews/testimonials
   - Contact form + embedded booking calendar
   - Footer with license number, service area

4. Set up Voice AI receptionist template
   - Configure greeting script for contractors
   - Set up lead capture (name, phone, service needed, address)
   - Connect to CRM pipeline
   - Set business hours + after-hours behavior

5. Set up phone number
   - Purchase local San Diego number via GHL ($1.15/mo)
   - Configure call routing to Voice AI

6. Test everything end-to-end
   - Call the number, verify AI answers correctly
   - Submit website form, verify lead appears in CRM
   - Book appointment, verify calendar works
```

---

## Sources

- [GoHighLevel Pricing](https://www.gohighlevel.com/pricing) -- official pricing page
- [GoHighLevel $97 Starter Plan Explained](https://ghl-services-playbooks-automation-crm-marketing.ghost.io/gohighlevel-97-starter-plan-explained-2026/) -- detailed starter plan breakdown
- [GoHighLevel AI Product Pricing](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update) -- official AI/voice pricing
- [GHL Voice AI Pricing Guide](https://ghlcentral.com/highlevel-voice-ai-pricing-guide/) -- per-minute cost breakdown
- [Lovable.dev Pricing](https://lovable.dev/pricing) -- official pricing
- [Lovable.dev Review - Credit Trap?](https://www.superblocks.com/blog/lovable-dev-review) -- agency limitations
- [Lovable.dev Agency Review](https://mcstarters.com/blog/lovable-dev-review/) -- "70% of the way there" assessment
- [Framer Pricing](https://www.framer.com/pricing) -- per-site costs
- [Vapi AI Pricing](https://vapi.ai/pricing) -- per-minute costs
- [Synthflow AI Pricing](https://synthflow.ai/pricing) -- agency plan costs
- [Retell AI Pricing](https://www.retellai.com/pricing) -- pay-as-you-go costs
- [Bland AI Pricing](https://www.dialora.ai/blog/bland-ai-pricing) -- reseller complexity
- [My AI Front Desk Pricing](https://www.myaifrontdesk.com/pricing) -- backup option pricing
- [Divi Pricing](https://wpblogging360.com/divi-pricing-how-much-does-divi-cost/) -- lifetime deal
- [Elementor Pricing](https://turnkeydirectories.com/elementor-pro-cost-pricing-plans-compared/) -- per-site costs
- [Hostinger Pricing](https://www.hostinger.com/pricing) -- cheap WordPress hosting
