# Feature Research: Contractor Websites & AI Receptionist

**Domain:** Local contractor website agency + AI receptionist (San Diego market)
**Researched:** 2026-03-19
**Confidence:** MEDIUM-HIGH (pricing data verified across multiple sources; feature data corroborated by multiple contractor-specific platforms)

---

## Part 1: Contractor Website Features

### Table Stakes (Clients Complain If Missing)

These are non-negotiable. A contractor who pays $1,000+ for a website expects every one of these. Missing any single one and the contractor will say "my nephew could've done this."

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Click-to-call phone number (sticky on mobile) | 60% of traffic is mobile; click-to-call converts at 8-12% vs 2-3% for forms. Contractors live on phone calls. | LOW | Use `<a href="tel:">` on every phone number. Sticky header or floating button on mobile. This is THE conversion element. |
| Google Reviews / testimonials displayed | 87% of customers won't consider a business with low ratings. Reviews are the #1 trust signal. | LOW | Embed Google reviews widget or display 3-5 curated testimonials with names and photos. |
| License number displayed prominently | California law (CSLB) requires contractor license number on all advertising including websites. Not optional -- it is legally required. | LOW | Footer + about page. Link to CSLB license lookup for bonus trust. |
| Mobile-responsive design | Majority of homeowner searches happen on phones. Non-responsive = instant bounce. | LOW | Every modern builder handles this. Test on actual phones before delivery. |
| Service area / cities served page(s) | Homeowners search "[service] near me" or "[service] [city name]". No service area = no local SEO. | LOW-MEDIUM | Individual pages per city if possible (e.g., "Electrician in Chula Vista", "Electrician in National City"). Major SEO multiplier. |
| Contact form (short, 3-4 fields max) | Some customers prefer forms over calls (especially younger homeowners). Fewer fields = more submissions. | LOW | Name, phone, service needed, brief description. Do NOT require email -- contractors' customers often skip it. |
| Services list with individual pages | Homeowners search for specific services ("panel upgrade", "tankless water heater install"). Generic "our services" pages don't rank. | MEDIUM | One page per major service. Each page gets its own SEO juice. This is where the real ranking happens. |
| Business hours | Customers need to know when to call. Emergency contractors need "24/7" prominently displayed. | LOW | Header or footer. If they offer emergency service, say "24/7 Emergency Service" above the fold. |
| Google Business Profile optimization | Technically off-site but contractors expect it as part of the package. GBP drives 50%+ of local contractor leads. | LOW | Claim, verify, add photos, services, hours, and link to website. Include in delivery checklist. |
| Fast page load (under 3 seconds) | Slow sites lose 53% of mobile visitors. Contractors won't notice speed but their customers will bounce. | LOW | Optimize images, use CDN. Most website builders handle this. |

### Differentiators (What Actually Wins Jobs)

These separate a $1,000 professional site from a $200 template. They are what make the contractor's phone ring MORE.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Before/after project gallery | Contractors are PROUD of their work. Homeowners want to see real results, not stock photos. This is the single most powerful trust builder beyond reviews. | LOW-MEDIUM | Photo grid with before/after slider. Ask contractor for 5-10 project photos at intake. Many will have phone photos ready. |
| "Request a Free Estimate" as primary CTA | "Contact us" is weak. "Get Your Free Estimate" is specific and matches what homeowners actually want. Tested: specific CTAs generate 3.2x more calls. | LOW | Every page, above the fold. Button color should contrast with site. |
| Emergency service callout (for applicable trades) | Plumbers and electricians get emergency calls. A banner saying "Emergency? Call Now -- Available 24/7" captures high-value urgent leads that convert same-day. | LOW | Sticky banner or prominent hero section element. These are the highest-value calls. |
| AI receptionist included in package | No other local San Diego web agency at this price point bundles AI phone answering. This is THE differentiator. | MEDIUM | Covered in detail in Part 4. |
| Missed call text-back | If AI can't answer or call drops, auto-text: "Sorry we missed your call! How can we help?" Captures leads that would otherwise vanish. | LOW | GHL automation. Takes 10 minutes to configure. Massive value. |
| Speed-to-lead SMS notification | New lead triggers instant SMS to contractor: "New lead: John needs panel upgrade at 123 Main St." Contractor calls back in minutes, not hours. | LOW | GHL workflow. First to respond wins 78% of the time. |
| Automated review request | After job completion, auto-text asks customer for a Google review. Builds reviews passively without contractor effort. | LOW | GHL built-in feature. Set up after client has completed a few jobs. |
| Monthly performance report | Shows contractor their call volume, leads captured, website visits. Builds retention and justifies monthly fee. | LOW | GHL reporting dashboard. Deliver starting month 2. |
| Financing information | Big jobs ($5K+ panel upgrades, HVAC replacements, remodels) need financing. Mentioning "Financing Available" removes the price objection before the estimate. | LOW | Simple badge or section. Contractor provides their financing partner details. |
| Schema markup / structured data | Rich snippets in Google (star ratings, service areas, phone number) increase click-through rates 20-30%. Competitors won't have this. | MEDIUM | LocalBusiness schema, Service schema, Review schema. Invisible to user, visible to Google. |

### Anti-Features (Do NOT Build These)

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Blog / content section | "SEO needs content" | Contractors will NEVER update a blog. It becomes a dead page that signals neglect. Stale "Hello World" posts hurt credibility. | Write service pages with rich content instead. That IS the SEO content. |
| Online booking/scheduling as default | "Let customers book online" | Contractors don't work on fixed schedules. They need to assess jobs before committing times. Booking creates false expectations and no-shows. | "Request a Free Estimate" form + phone call is the right flow. Offer scheduling as optional add-on for contractors who want it. |
| Live chat widget | "Engage visitors in real time" | Contractor is on a job site with dirty hands. Nobody is monitoring chat. Unanswered chats are WORSE than no chat at all. | AI receptionist handles the phone. Form handles async requests. |
| E-commerce / online payments | "Accept payments online" | Contractors invoice after work completion. Payment terms are net-30 or on-completion. Online payments add complexity with zero demand. | Not applicable to this business model. |
| Social media feed integration | "Show our social activity" | Most contractors have dead or rarely-updated social accounts. Embedding a feed with 6-month-old posts signals the business is inactive. | Link to social profiles in footer. Don't embed feeds. |
| Excessive animations / parallax | "Make it look modern" | Slows load time. Distracts from conversion. Homeowners in a hurry don't care about animations -- they want a phone number. | Clean, fast, professional. Let the work photos speak. |
| Outbound AI calling | "Proactively reach leads" | Legal minefield (TCPA), contractors hate robocalls themselves, and it damages brand trust. | Inbound AI only -- answer calls, do not make them. |
| Social media management | "Handle our Facebook" | Scope creep, low ROI for contractors, impossible to deliver solo at scale. | Mention as a future upsell. Not part of v1. |
| Complex chatbot decision trees | "Guide visitors through options" | Contractors' customers want to talk to someone or fill a form. Decision trees frustrate and confuse. | Simple form: name, need, phone. Done. |

---

## Part 2: What Contractors Care About When BUYING

### The Contractor Buyer Psychology

Contractors are NOT like typical small business owners buying websites. They have specific patterns:

1. **They are skeptical of "marketing guys."** They've been burned by SEO companies, Yelp reps, and HomeAdvisor salespeople who promised leads and delivered nothing. Lead with empathy: "I know you've probably been pitched by a dozen marketing companies."

2. **They respect directness and no-BS.** Don't oversell. Don't use jargon. Talk about "more phone calls" not "conversion rate optimization." Speak in jobs and dollars, not impressions and clicks.

3. **They understand ROI intuitively.** They charge $150-300/hour for their labor. If the website books ONE extra job per month, it pays for itself. Frame everything in terms of jobs won.

4. **They make fast decisions.** If they trust you and the price is right, they'll say yes on the spot. If they need to "think about it," you've probably lost them. Close same-day or leave a card.

5. **Premium pricing earns respect.** Contractors charge premium rates themselves. A $500 website signals amateur work. A $1,200 website signals professional work. They understand "you get what you pay for" because they live that principle every day.

6. **They hate ongoing commitments but accept them when framed right.** Monthly fees trigger suspicion ("another subscription draining my account"). Frame it as "hosting, updates, and your AI receptionist -- less than what you'd pay a part-time receptionist for one day."

### Common Objections and Responses

| Objection | What They Really Mean | Response Framework |
|-----------|----------------------|-------------------|
| "I get all my work from word of mouth" | "I'm comfortable and scared of change" | "Word of mouth is great -- but what happens when someone gets your name from a friend and Googles you? No website means they call the next guy instead. Your website SUPPORTS word of mouth, it doesn't replace it." |
| "I don't need a website" | "I don't understand what it does for me" | "Pull out your phone right now. Search '[their trade] [their city]'. See those guys showing up? They're getting the calls that could be going to you. Every day without a website, you're handing jobs to your competition." |
| "I had a website before and it didn't do anything" | "Someone sold me a bad website and I got burned" | "That's because most web guys don't understand contractors. They build pretty sites that don't ring your phone. I build sites specifically for [trade] businesses with one goal: make your phone ring more." |
| "How much does it cost?" (asked too early) | "I'm qualifying you before I listen" | "$1,200 to set up, $200 a month. That's less than what you make on one [typical job for their trade]. If my site books you one extra job a month -- and it will -- it pays for itself ten times over." |
| "My buddy/nephew can do it cheaper" | "I don't see the value difference" | "He probably can. But does he know that California requires your CSLB license number on every page? Does he know how to make your site show up when someone searches 'emergency electrician San Diego'? This is all I do -- contractor websites." |
| "Let me think about it" | "I'm not sold yet" or polite no | "Totally fair. But every day without a site, you're invisible to people searching for [trade] in [city]. I can have you live by Friday. Want me to hold a slot?" Create urgency without pressure. Leave card regardless. |
| "I'm too busy for this" | "I don't want another thing to manage" | "That's exactly why you need this. I handle everything. Give me 15 minutes today, I build the site, you approve it, and your phone starts ringing. Zero work on your end after that." |
| "Facebook/Instagram is enough" | "I already have an online presence" | "Social media is great for showing your work. But when someone searches 'electrician near me,' Facebook pages don't show up. Your own website does. And right now your competitors' websites are getting those calls." |
| "Business is slow right now" | "I can't afford this" | "That's exactly WHEN you need a website most. When business is slow, you need every lead possible. The contractors who invest during slow times are the ones who are busy when it picks up." |

### What Closes Contractors

| Closing Factor | Why It Works | Priority |
|----------------|-------------|----------|
| Show a live demo site on your phone | Contractors are visual. Showing a real site for a similar trade in a different area makes it tangible. "This is what yours would look like." | CRITICAL |
| "One extra job pays for the whole year" | ROI math they can do in their head. $1,200 setup + ($200 x 12) = $3,600/year. One $5K panel upgrade or $8K HVAC install covers it all. | CRITICAL |
| Speed of delivery | "You'll be live in 3-5 business days" removes the "this will take forever" fear. Fast delivery = fast trust. | HIGH |
| Zero maintenance on their end | "You never touch it. I handle updates, hosting, everything." They want set-and-forget. | HIGH |
| Mention their license number / trade specifics | Shows you understand their world. Most web designers don't know what a CSLB number is. Instant credibility. | HIGH |
| Leave-behind with their business name mocked up | If you can show a 30-second mockup or template with THEIR name on it, the sale becomes visceral. They see themselves in it. | HIGH |
| AI receptionist demo call | Let them call the demo number and hear the AI answer. Hearing it is believing it. Way more powerful than describing it. | HIGH |

---

## Part 3: Pricing Research (San Diego / SoCal Market)

### Contractor Website Market Rates

| Service | Low End | Mid Market | Premium | Allan's Target |
|---------|---------|------------|---------|----------------|
| Website setup (one-time) | $499 (template, no SEO) | $995-$1,495 | $2,000-$3,000+ (custom) | **$1,200** |
| Monthly hosting/maintenance | $0 (self-hosted) | $50-$99/mo | $150-$300/mo | **$200/mo** |
| SEO add-on (monthly) | $300/mo | $500-$1,000/mo | $1,500+/mo | Bundle basic SEO into monthly |
| AI receptionist (monthly) | $97/mo (GoHighLevel unlimited) | $150-$250/mo | $300-$500/mo | **Bundled in $200/mo or $350/mo tier** |

### Pricing Strategy Recommendation

**Confidence: MEDIUM-HIGH** (based on multiple San Diego web design pricing pages and contractor-specific pricing guides)

| Package | Setup Fee | Monthly | What's Included | Notes |
|---------|-----------|---------|-----------------|-------|
| **Website Only** | $1,200 | $200/mo | 5-7 page site, mobile-optimized, basic SEO, GBP setup, hosting, updates, speed-to-lead SMS | Baseline offer |
| **Website + AI Receptionist** | $1,500 | $350/mo | Everything above + 24/7 AI phone answering, missed call text-back, lead capture notifications, monthly report | Upsell at close or as default pitch |

**Why this pricing works:**
- $1,200 setup is in the credible range ($995-$1,495 sweet spot per market research). Below $1,000 signals amateur. Above $1,500 for a contractor site invites comparison shopping.
- $200/mo is competitive with the $150-$300/mo range competitors charge. This is where recurring revenue lives.
- The AI receptionist add-on at $150/mo extra ($350 total) has strong margin. GoHighLevel unlimited voice AI is $97/mo. Allan pockets ~$53/mo per client on the AI alone, plus markup on the base monthly.
- Contractors who charge $150-300/hr understand that $200/mo = less than one hour of THEIR labor per month. Easy mental math.

### Unit Economics

| Metric | Value |
|--------|-------|
| Revenue per client Year 1 (website only) | $1,200 + ($200 x 12) = **$3,600** |
| Revenue per client Year 1 (with AI) | $1,500 + ($350 x 12) = **$5,700** |
| Cost per client Year 1 (website) | ~$120 (hosting + domain + builder time amortized) |
| Cost per client Year 1 (AI) | ~$1,164 ($97/mo GHL) |
| Gross margin (website only) | ~$3,480 / $3,600 = **~97%** |
| Gross margin (website + AI) | ~$4,536 / $5,700 = **~80%** |
| Breakeven | **1 client on website-only covers the $100/mo tool budget** |

---

## Part 4: AI Receptionist Features for Contractors

### What the AI Receptionist MUST Do

| Feature | Why Essential | Complexity | Platform Notes |
|---------|--------------|------------|----------------|
| Answer inbound calls 24/7 | Contractors miss 40-60% of calls while on job sites. Missed call = missed job. This is the entire value proposition. | CORE | All platforms handle this. |
| Capture caller name, phone, and service needed | The contractor needs to call back with context. "John called about a panel upgrade at 123 Main St" is actionable. "Someone called" is useless. | CORE | Standard across all platforms. |
| SMS/email notification to contractor immediately | Speed to lead wins. Contractor needs a text within 30 seconds of the call ending with caller details. | CORE | GoHighLevel does this natively. Others need Zapier. |
| Recognize emergency keywords | "Sparks," "flooding," "no heat," "gas smell" -- these need immediate escalation (direct transfer or urgent alert). Emergency calls are highest-value. | HIGH | Configurable in most platforms with keyword triggers. |
| Provide basic business info | Hours, service area, "yes we do [service]" responses. Callers asking "do you do panel upgrades?" should get "Yes, we do. Let me get your information for a free estimate." | HIGH | Standard script/prompt configuration. |
| Handle Spanish-language calls | San Diego is 30%+ Hispanic. A bilingual AI receptionist is a massive differentiator that most competitors can't match. | MEDIUM | Synthflow and GoHighLevel support multi-language. Vapi supports via model config. |
| Transfer to contractor when available | If the contractor is free, AI should offer to connect the caller directly rather than just taking a message. | MEDIUM | Conditional transfer logic. GoHighLevel and Vapi support this. |
| After-hours handling | Different script for evenings/weekends: "We're currently closed but I can take your information and have [name] call you first thing tomorrow morning." | LOW | Time-based routing in GHL. |

### What the AI Receptionist Should NOT Do

| Anti-Feature | Why It Seems Good | Why It's Wrong |
|--------------|-------------------|----------------|
| Provide price estimates | "Customers want to know the price" | Contractors NEVER give prices over the phone. Every job requires an in-person estimate. Quoting prices loses the contractor money or credibility. The AI says: "Every job is different -- [name] will give you a free estimate on-site." |
| Schedule specific appointment times | "Book the customer right in" | Contractors' schedules change hourly based on job progress. The AI captures interest and lets the contractor schedule the callback. Exception: some contractors may want this -- make it an optional upgrade, not default. |
| Attempt to close or hard-sell | "Convert the caller to a customer" | The contractor closes their own jobs. The AI captures the lead. Pushy AI annoys callers and damages the contractor's reputation. |
| Handle complex complaint resolution | "Full customer service" | Complaints require human judgment and empathy, often involving liability. AI says: "I'm sorry to hear that. Let me have [contractor name] call you back personally to make this right." |
| Take payment information | "Accept deposits over the phone" | Liability, PCI compliance, trust issues. Contractors handle payments in person or via invoice. |

### AI Receptionist Platform Comparison

**Recommendation: GoHighLevel Voice AI** because it is the only platform that fits the $100/mo budget while bundling CRM, SMS automation, and pipeline management.

| Criterion | GoHighLevel | Vapi | Bland AI | Synthflow |
|-----------|-------------|------|----------|-----------|
| Price (unlimited) | **$97/mo flat** | $0.13-0.33/min (adds up) | $0.09/min + hidden fees | $375/mo for 2,000 min |
| CRM included | **YES** | No | No | No |
| SMS follow-up built-in | **YES** | Needs Zapier | Needs Zapier | Needs Zapier |
| Workflow automation | **YES** (full pipeline) | No | No | Limited |
| Learning curve | Medium | High (developer-focused) | High | Medium |
| Home services templates | **YES** | No | No | No |
| Fits $100/mo budget | **YES** ($97/mo) | Maybe | Maybe | NO |
| Voice quality | Good | Excellent | Good | Good |
| Customization depth | Medium | High | High | Medium |

**Why GoHighLevel wins for this use case:** It is the only platform that provides CRM + SMS automation + pipeline management + AI voice all in one subscription. Every other option requires stitching together multiple tools, which breaks the $100/mo budget and adds operational complexity for a solo operator. GHL also has an established contractor/home services user base with pre-built templates.

**Caveat:** If voice quality becomes a deal-breaker or the AI sounds too robotic, Vapi offers superior voice models but at higher cost and complexity. Revisit if client feedback flags voice quality issues.

---

## Part 5: Business Cards for In-Person B2B Sales

### Verdict: YES. Print physical business cards. Budget $30-50 for 500 cards.

**Confidence: HIGH** (multiple data sources + domain-specific reasoning)

**Why physical cards matter for THIS specific use case:**

1. **Cold in-person visits require a leave-behind.** You walk into a shop, the contractor is busy, you need to leave something. A business card is the only thing that survives this scenario. A digital card requires the contractor to stop, pull out their phone, and scan something -- they won't do that.

2. **Contractors are physical-world people.** They carry cards in their truck visor, pin them to corkboards, hand them to their spouse who handles the books. Physical cards fit their existing workflow.

3. **The data supports it.** Business cards have a 12% conversion rate vs 2.35% for average website visits. 88% of cards get thrown away within a week, but that still leaves 12% that stick. For a $3,600/year client value, even 5% conversion on 500 cards = 25 callbacks.

4. **Cards are absurdly cheap.** $30-50 for 500 premium cards. At $3,600+ per client, you need exactly ONE conversion to get 100x ROI on cards.

**What to put on the card:**

| Element | Why |
|---------|-----|
| Your name | They need to remember who came by |
| Phone number (primary, large) | They will call, not email |
| "Contractor Websites + AI Receptionist" | What you do in 5 words |
| Benefit tagline ("Your Phone Should Ring More") | Benefit-focused, not feature-focused |
| QR code on back | Links to a demo contractor site for the curious ones |
| Premium cardstock, clean design | Cheap cards = cheap work in a contractor's mind. Thick stock, minimal design. |

**Skip digital-only cards.** NFC cards and digital card apps (HiHello, Popl) are great for tech conferences. They do not work for walking into a plumbing shop in Chula Vista at 7am. Have digital as a supplement, but always lead with physical.

---

## Feature Dependencies

```
Demo Site (for sales)
    |--- required BEFORE ---> First Sales Outing (cannot sell without showing)
    |--- required by -------> Business Card QR Code

Click-to-Call Phone Number
    |--- required by ---> AI Receptionist (needs a number to route to)
    |--- enhances ------> Contact Form (both conversion paths active)

Google Business Profile
    |--- enhances ------> Service Area Pages (GBP + city pages = local SEO dominance)
    |--- requires ------> Live Website URL (GBP links to site)

Individual Service Pages
    |--- enhances ------> Schema Markup (structured data references service pages)
    |--- drives ---------> Local SEO ranking

AI Receptionist
    |--- requires ------> Business Phone Number (GHL/Twilio number)
    |--- requires ------> Notification Workflow (SMS to contractor)
    |--- enhances ------> Speed to Lead

Before/After Gallery
    |--- requires ------> Project Photos from Contractor (intake dependency -- not available Day 1)

CRM Pipeline
    |--- required by ---> Speed-to-Lead SMS
    |--- required by ---> Missed Call Text-Back
    |--- required by ---> Review Automation
```

### Critical Sequencing Notes

- **Demo site must exist BEFORE first sales outing.** Cannot sell a website without showing one. Build a sample "SD Electric Pro" or similar demo first.
- **AI receptionist requires a provisioned phone number.** This is a Day 1 setup item on GoHighLevel.
- **Project photos are an intake dependency.** Before/after gallery can't populate until the contractor provides photos. Include "we'll add your project photos as you complete jobs" in the pitch.
- **Google Business Profile requires a live website URL.** GBP setup happens AFTER site goes live.
- **Review automation requires completed jobs.** Set up the workflow early but it won't fire until the contractor has customers to send it to.

---

## MVP Definition

### Launch With (First Client Delivery)

- [ ] **5-page contractor website** -- Home, About, Services (1 main page with sections), Service Area, Contact
- [ ] **Click-to-call on every page** -- Sticky mobile header with phone number
- [ ] **Contact form** -- Name, phone, service needed, description (4 fields max)
- [ ] **Google Reviews display** -- 3-5 reviews embedded or manually added
- [ ] **CSLB license number in footer** -- Legal requirement, non-negotiable
- [ ] **Mobile-responsive** -- Tested on actual phone before delivery
- [ ] **Basic SEO** -- Title tags, meta descriptions, city name in H1 headers
- [ ] **"Get Your Free Estimate" as primary CTA** -- Above the fold on every page
- [ ] **Google Business Profile claimed and optimized** -- Part of delivery checklist

### Add After First 3 Clients (v1.x)

- [ ] **AI receptionist configured and live** -- Once GHL is stable and tested
- [ ] **Speed-to-lead SMS automation** -- When AI receptionist is live
- [ ] **Missed call text-back** -- GHL automation, quick to add
- [ ] **Individual service pages** (1 per service) -- When SEO priority increases
- [ ] **Individual city pages** (1 per city in service area) -- When expanding geographic reach
- [ ] **Before/after project gallery** -- When contractor provides photos
- [ ] **Schema markup** -- When competing for rich snippets
- [ ] **Monthly performance report** -- Start delivering at month 2

### Future Consideration (v2+)

- [ ] **Automated review requests** -- After contractor has completed several jobs
- [ ] **Financing information section** -- When contractors request it
- [ ] **Video testimonials** -- When client relationships exist
- [ ] **Spanish landing page** -- When demand is proven
- [ ] **Appointment scheduling** -- As optional add-on for contractors who want it

---

## Feature Prioritization Matrix

| Feature | Client Value | Build Cost | Priority |
|---------|------------|------------|----------|
| Click-to-call (sticky mobile) | HIGH | LOW | **P1** |
| Contact form (short) | HIGH | LOW | **P1** |
| CSLB license number display | HIGH (legal) | LOW | **P1** |
| Mobile-responsive design | HIGH | LOW | **P1** |
| Google Business Profile setup | HIGH | LOW | **P1** |
| Services page | HIGH | LOW | **P1** |
| Service area page | HIGH | LOW | **P1** |
| Google Reviews display | HIGH | LOW | **P1** |
| "Free Estimate" CTA language | HIGH | LOW | **P1** |
| Before/after gallery | MEDIUM-HIGH | LOW-MEDIUM | **P2** |
| Individual service pages | HIGH | MEDIUM | **P2** |
| Individual city pages (SEO) | HIGH | MEDIUM | **P2** |
| AI receptionist | HIGH | MEDIUM | **P2** |
| Speed-to-lead SMS | HIGH | LOW | **P2** |
| Missed call text-back | HIGH | LOW | **P2** |
| Emergency callout banner | MEDIUM | LOW | **P2** |
| Schema / structured data | MEDIUM | MEDIUM | **P2** |
| Monthly report | MEDIUM | LOW | **P2** |
| Automated review requests | MEDIUM | LOW | **P3** |
| Financing info section | LOW-MEDIUM | LOW | **P3** |
| Spanish landing page | MEDIUM | MEDIUM | **P3** |
| Appointment scheduling | MEDIUM | MEDIUM | **P3** |

**Priority key:**
- P1: Must have for first client delivery
- P2: Add within first month / first 3 clients
- P3: Future enhancement when demand exists

---

## Competitor Landscape (San Diego)

| Feature | Cheap ($499 sites) | Mid-Range ($1K-2K) | Premium ($3K+) | Allan's Approach |
|---------|--------------------|--------------------|-----------------|-----------------|
| Custom design | Template only | Semi-custom | Fully custom | Semi-custom (builder-made, looks custom) |
| SEO | None | Basic on-page | Full campaign | Basic on-page included; upsell deeper SEO later |
| AI receptionist | Not offered | Not offered | Sometimes separate | **Bundled as core differentiator** |
| Delivery speed | 1-2 weeks | 2-4 weeks | 4-8 weeks | **3-5 business days** |
| Monthly support | None or $50/mo | $99-150/mo | $200-500/mo | $200/mo all-inclusive |
| GBP optimization | Not included | Sometimes | Usually | Always included |
| Contractor expertise | Generic | Generic | Sometimes specialized | **Contractor-only focus** |
| Speed-to-lead automation | Not offered | Not offered | Sometimes | **Included in monthly** |

**Competitive advantages to emphasize in sales pitch:**
1. **Contractor-only specialist** -- not a generic web designer who also does restaurants and dentists
2. **AI receptionist bundled** -- nobody at this price point offers 24/7 phone answering
3. **3-5 day delivery** -- faster than anyone in the market
4. **All-inclusive monthly** -- no surprise charges, no upsell treadmill, no "that's extra"
5. **ROI framing** -- one extra job pays for the entire year of service

---

## Sources

- [WebsiteFreedom - Contractor Website Cost Guide](https://websitefreedom.com/contractor-website-cost-guide)
- [SiteSwan - Common Sales Objections for Web Designers](https://www.siteswan.com/5-common-sales-objections-web-designers-face-and-how-to-overcome-them)
- [PipelineOn - Get More Calls from Contractor Website](https://pipelineon.com/blog/get-more-calls-contractor-website/)
- [Social Climb - Contractor Website Conversion Essentials 2026](https://socialclimb.org/local-seo/contractor-website-conversion-essentials/)
- [GHL Central - HighLevel Voice AI Pricing](https://ghlcentral.com/highlevel-voice-ai-pricing-guide/)
- [Synthflow - Bland AI vs Vapi vs Synthflow Comparison](https://synthflow.ai/blog/bland-ai-vs-vapi-ai)
- [Dialzara - AI Answering for Contractors](https://dialzara.com/industries/contractors)
- [Upfirst - Answering Service for Contractors](https://upfirst.ai/industries/contractors)
- [Wave Connect - Business Card Statistics 2025](https://wavecnct.com/blogs/news/business-card-statistics)
- [Wave Connect - Are Business Cards Relevant in 2026](https://wavecnct.com/blogs/news/are-business-cards-still-relevant)
- [San Diego Web Studio - Pricing](https://www.sandiegowebstudio.com/webpage-design-prices.html)
- [Bloominari - SD Website Design Packages](https://www.bloominari.com/pricing/website-design-packages-prices)
- [ServiceTitan - Contractor Leads](https://www.servicetitan.com/blog/contractor-leads)
- [Robbenmedia - Contractor Website Conversion Optimization](https://robbenmedia.com/top-10-tips-for-roofing-contractor-website-conversion-optimization/)
- [Pikel Designs - Sales Objections Web Designers Face](https://www.pikeldesigns.com/post/top-5-common-sales-objections-web-designers-face)
- [Marc Carson - Objections to a Website Pitch](https://www.marccarson.com/articles/dealing-with-common-objections-to-a-website-pitch)
- [GoHighLevel - AI Voice Agent Overview](https://help.gohighlevel.com/support/solutions/articles/155000003911-ai-voice-agents-overview)
- [Phonely - Electrician AI Answering Service](https://www.phonely.ai/industries/electrician-ai-answering-service)

---
*Feature research for: SD Contractor Agency -- websites, AI receptionist, sales approach, and pricing*
*Researched: 2026-03-19*
