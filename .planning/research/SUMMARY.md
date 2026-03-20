# Project Research Summary

**Project:** SD Contractor Agency
**Domain:** Solo local agency -- contractor websites + AI receptionists (San Diego market)
**Researched:** 2026-03-19
**Confidence:** MEDIUM-HIGH

## Executive Summary

The SD Contractor Agency is a solo-operator business selling professional websites and AI phone receptionists to licensed contractors (electricians, plumbers, HVAC, general) in the San Diego metro area. Research conclusively recommends GoHighLevel ($97/month Starter plan) as the single platform replacing 5-6 separate tools: CRM, website builder, AI voice receptionist, SMS marketing, email, appointment scheduling, and reputation management. This is not a software engineering project -- it is a service delivery pipeline where Claude Code generates content and configuration, and Allan executes it inside GoHighLevel's GUI. Lovable.dev, Framer, Webflow, Vapi, and standalone AI voice platforms were all evaluated and rejected on cost, complexity, or fit grounds.

The business model is strong on paper: $1,200 setup + $200/month retainer for website-only, or $1,500 setup + $350/month for the website + AI receptionist bundle. Unit economics show 80-97% gross margins and breakeven at one client. The competitive advantage is clear -- no other San Diego agency at this price point bundles 24/7 AI phone answering with a contractor-specific website. However, the business has two critical dependencies that must be sequenced correctly: (1) sales infrastructure must exist before the first outing (contract, pricing, follow-up system, demo site), and (2) the delivery template must be built and tested before the first client closes, or delivery delays will kill the business in a trust-dependent local market.

The top risks are: operating without a contract (contractors expect handshake deals but you need legal protection), underpricing to win early clients (anchors the entire local network at an unprofitable rate), and overselling the AI receptionist's capabilities (current voice AI handles lead capture well but fails at complex conversations -- position it as a "missed-call catcher," not a virtual employee). All three are preventable with upfront preparation in the first week.

## Key Findings

### Recommended Stack

GoHighLevel Starter ($97/month) is the hub, replacing CRM, website builder, email, SMS, scheduling, review management, and AI receptionist as a single platform. Voice AI runs at $0.08-0.12 per minute on top (billed to clients via retainer). Phone numbers cost $1.15/month each via GHL. Total Day 1 cost before any clients: $97/month. With one client, usage costs bring it to $150-260/month, fully covered by a single client's retainer.

**Core technologies:**
- **GoHighLevel Starter ($97/mo):** All-in-one platform -- CRM, website builder, AI voice, SMS, email, booking, pipelines. Eliminates 4-5 separate subscriptions.
- **GHL Voice AI ($0.08-0.12/min):** Built-in AI receptionist. No additional subscription. Integrated with CRM and SMS notifications. Competitive per-minute pricing.
- **GHL Website Builder (included):** Drag-and-drop with contractor templates. Zero per-site cost. Forms flow directly into CRM. Not design-award quality, but sufficient for contractor brochure sites.
- **Claude Code (local, free):** Content generation engine. Slash commands produce website copy, AI receptionist scripts, pitch materials, and route plans. Allan pastes output into GHL.

**Critical rejection:** Lovable.dev is the wrong tool. It builds React web applications, not contractor brochure sites. Credit-based pricing, no CRM integration, no SEO tooling, and each site needs separate hosting. The "looping bug" issue makes delivery times unpredictable.

See: [STACK.md](STACK.md) for full comparison tables and pricing verification.

### Expected Features

**Must have (table stakes) -- first client delivery:**
- Click-to-call phone number (sticky on mobile) -- THE conversion element, 8-12% conversion vs 2-3% for forms
- CSLB license number displayed -- California legal requirement, non-negotiable
- Mobile-responsive design -- majority of homeowner searches are on phones
- Contact form (3-4 fields max: name, phone, service, description)
- Google Reviews / testimonials displayed -- #1 trust signal
- Service area pages -- drives local SEO ranking
- Services list with individual pages -- each page ranks independently
- Google Business Profile setup -- drives 50%+ of local contractor leads
- "Get Your Free Estimate" as primary CTA -- 3.2x more conversions than generic "Contact Us"

**Should have (differentiators) -- add within first month:**
- AI receptionist with 24/7 lead capture -- nobody at this price point offers this
- Missed call text-back automation -- captures leads that would vanish
- Speed-to-lead SMS to contractor -- first to respond wins 78% of the time
- Before/after project gallery -- strongest trust builder after reviews
- Emergency service callout banner -- captures highest-value urgent calls
- Schema markup / structured data -- 20-30% higher click-through in search results

**Defer (v2+):**
- Automated review requests (needs completed jobs first)
- Spanish landing pages (when demand proven)
- Appointment scheduling (optional add-on, not default -- contractors don't work fixed schedules)
- Blog/content section (contractors will never update it; write rich service pages instead)

**Anti-features (do NOT build):**
- Live chat widget (nobody monitoring it on a job site)
- E-commerce/online payments (contractors invoice after work)
- Outbound AI calling (TCPA legal minefield)
- Social media management (scope creep, low ROI)

See: [FEATURES.md](FEATURES.md) for full prioritization matrix, pricing research, and buyer psychology.

### Architecture Approach

The system has two layers: Allan's laptop (Claude Code with slash commands) as the authoring environment, and GoHighLevel (cloud) as the production runtime. Claude Code generates content, scripts, and configurations via purpose-built slash commands. Allan pastes and configures the output into GHL. All persistent local data lives in markdown files (logs, pipeline tracking, client files, delivery artifacts). GHL hosts all client-facing assets: websites, AI receptionist, CRM, automations, and phone numbers.

**Major components:**
1. **Sales Layer (Claude Code):** `/route`, `/brief`, `/pitch`, `/objection`, `/log` commands -- plan outings, prepare for visits, handle objections, log everything.
2. **Delivery Layer (Claude Code):** `/intake`, `/build`, `/recep`, `/launch`, `/handoff` commands -- capture client info, generate content, configure AI scripts, manage go-live.
3. **Client Delivery Platform (GoHighLevel):** Master website template (clone per client), master Voice AI script template, CRM pipeline, 4 automations (missed call text-back, speed-to-lead SMS, review requests, monthly reports).
4. **Markdown Data Store:** `logs/`, `pipeline/`, `clients/`, `delivery/` directories -- zero-cost, version-controlled, readable by both Claude and Allan.

**Key patterns:**
- Command-per-workflow (each step gets its own slash command, not a monolithic agent)
- Template-based delivery (build once, clone per client, customize colors/photos/copy)
- Content generation separated from tool execution (Claude writes, Allan clicks)
- Markdown as database (no apps, no databases, no hosting for the operator layer)

See: [ARCHITECTURE.md](ARCHITECTURE.md) for full component diagrams, data flows, and directory structure.

### Critical Pitfalls

1. **No contract before first sale** -- Contractors work on handshakes but you need written terms. Have a one-page agreement and 50% deposit requirement ready before the first outing. Prevention cost: one evening of prep. Recovery cost from a dispute without a contract: $3,000-$150,000.

2. **Pricing too low to survive** -- Charging $500 to win the first sale anchors the entire local network at an unprofitable rate. Set a floor of $1,000 setup / $150/month retainer. Anchor to the contractor's economics: one extra booked job pays for the entire year. Never discount; offer payment plans instead.

3. **Overselling AI receptionist capabilities** -- Current voice AI handles lead capture well but struggles with nuanced conversations. Sell it as a "lead capture system that never misses a call," not a "virtual receptionist." Start with the simplest call flow. Test with 20+ scenarios before going live. Have a voicemail fallback kill switch.

4. **Selling before the product is ready** -- Closing a deal then spending 2 weeks figuring out GHL destroys trust in a tight local market. Build and test the complete template (website + AI + automations) on a dummy business before the first sales outing.

5. **No follow-up system after visits** -- Cold walk-in close rate is 1-3%. The real conversion happens on follow-up touches 2 and 3. Log every visit immediately. Send a follow-up text within 2 hours. Block 30 minutes at end of each outreach day for follow-ups.

See: [PITFALLS.md](PITFALLS.md) for all 16 pitfalls with warning signs, recovery strategies, and phase mapping.

## Implications for Roadmap

Based on combined research, the project breaks into 5 phases with clear dependencies.

### Phase 0: Business Foundation
**Rationale:** Legal and financial infrastructure must exist before collecting any money. Cannot sign contracts or accept deposits without an LLC and business bank account. This is a one-time setup that unblocks everything else.
**Delivers:** LLC filed in California, business bank account opened, business phone number (can be GHL number), basic brand identity (business name, if not yet decided).
**Addresses:** Pitfall #12 (no business entity), Pitfall #1 (need entity for contracts).
**Avoids:** Personal liability exposure, unprofessional appearance.
**Estimated effort:** 1-2 days of admin tasks.

### Phase 1: Sales Process Design
**Rationale:** Allan's first outing is imminent. The sales infrastructure must exist before walking into any business. Research shows cold walk-in close rate is only 1-3% -- the system for logging, following up, and pipeline tracking is what converts visits into clients over multiple touches.
**Delivers:** Route planning command (`/route`), pre-visit briefing (`/brief`), pitch script builder (`/pitch`), objection trainer (`/objection`), session logger (`/log`), pipeline tracking system, contract template with scope/payment terms, pricing documentation, business cards ordered, referral agreement template for licensing school contact.
**Addresses:** All P1 sales features from FEATURES.md, contractor buyer psychology, pricing strategy ($1,200 setup / $200 monthly baseline).
**Avoids:** Pitfall #1 (no contract), Pitfall #2 (pricing too low), Pitfall #5 (no follow-up system), Pitfall #8 (wrong outreach expectations), Pitfall #10 (unclear referral terms).

### Phase 2: Product Delivery Pipeline
**Rationale:** Cannot sell what you cannot deliver. The GHL template system must be built and tested before closing any deals. Research shows first-build takes 4-6 hours with templates vs 12+ hours custom. A live demo site is also required before sales outings (contractors need to see and touch a real example).
**Delivers:** GoHighLevel account configured, master website template built and tested, master Voice AI script template configured and tested (20+ test calls), demo contractor site live on phone for sales visits, 4 GHL automations configured (missed call text-back, speed-to-lead SMS, review request, auto-email response), delivery slash commands (`/intake`, `/build`, `/recep`, `/launch`, `/handoff`), delivery checklist (including CSLB compliance, NAP consistency, mobile testing).
**Uses:** GoHighLevel Starter ($97/mo), GHL Voice AI, GHL Website Builder.
**Implements:** Template-based delivery architecture, client delivery data flow.
**Addresses:** All P1 website features, AI receptionist core features, demo site requirement.
**Avoids:** Pitfall #4 (selling before product ready), Pitfall #3 (AI overpromise -- by testing thoroughly), Pitfall #11 (custom builds), Pitfall #13 (phone porting -- start with new numbers), Pitfall #15 (CSLB compliance on checklist), Pitfall #16 (identical sites -- customization checklist).

### Phase 3: First Clients (Execution)
**Rationale:** With sales tools and delivery pipeline ready, begin outreach and close first 1-3 clients. This phase validates the entire business model with real revenue.
**Delivers:** First 1-3 live client websites, first 1-3 configured AI receptionists, revenue validation ($1,200-4,500 in setup fees, $200-1,050/month recurring), real-world feedback on both sales process and delivery quality.
**Addresses:** P2 features added iteratively (individual service pages, city pages, before/after gallery as photos become available, schema markup).
**Avoids:** Pitfall #6 (scope creep -- contract has numbered deliverables), Pitfall #14 (GBP included in delivery checklist).

### Phase 4: Client Retention System
**Rationale:** Research shows 25% annual client churn in agencies, driven primarily by clients not seeing ongoing value. Monthly retainer justification must be systematized before the third month of any client relationship.
**Delivers:** Monthly performance report template, quarterly check-in workflow, retainer value dashboard showing calls captured / leads generated / site visits, automated review request workflows (triggered after job completion).
**Addresses:** P3 features (automated review requests, monthly reports, financing info section as requested).
**Avoids:** Pitfall #9 (retainer value gap -- monthly report proves ROI), Pitfall #7 (platform dependency -- document all configurations externally for portability).

### Phase Ordering Rationale

- **Phase 0 before everything:** Legal foundation is non-negotiable. Cannot collect deposits without it.
- **Phase 1 before Phase 2:** Sales tools are needed for the first outing (which is imminent). However, Phase 1 and Phase 2 can overlap -- build sales commands in the evening, start GHL setup in parallel.
- **Phase 2 before Phase 3:** The demo site and tested templates must exist before closing any deals. This is the strongest finding across all research: selling before you can deliver is the fastest way to kill the business in a local market.
- **Phase 3 is execution, not building:** By this point, all tools and templates exist. This phase is about using them, iterating, and collecting feedback.
- **Phase 4 after revenue exists:** Retention systems matter only after there are clients to retain. But design the monthly report template during Phase 2 so it is ready when needed.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2 (GHL Voice AI configuration):** Voice AI quality is the weakest confidence area. Mixed reviews on GHL's voice quality. Plan for a fallback (My AI Front Desk at $65/mo) if testing reveals issues. Need hands-on testing, not more desk research.
- **Phase 2 (GHL Website Builder):** Functional but not as polished as Framer/Webflow. Need to verify contractor template availability and customization depth during actual setup. Again, hands-on testing needed.

Phases with standard patterns (skip research-phase):
- **Phase 0 (Business Foundation):** Standard LLC filing, bank account. Well-documented process.
- **Phase 1 (Sales Process Design):** Slash command architecture is well-defined in ARCHITECTURE.md. Contract templates are widely available. Pricing is researched and recommended.
- **Phase 4 (Client Retention):** Standard agency retention patterns. GHL reporting is built-in.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | GoHighLevel pricing verified across official docs and multiple third-party sources. Tool rejections (Lovable, Framer, Vapi) well-justified with cost comparisons. |
| Features | MEDIUM-HIGH | Contractor website features well-documented across multiple sources. Pricing strategy corroborated by San Diego market research. AI receptionist feature scope based on platform capabilities. |
| Architecture | MEDIUM | Slash command system is sound but untested. GHL template architecture based on community patterns. The Claude-generates / Allan-executes workflow is reasonable but needs real-world validation. |
| Pitfalls | MEDIUM-HIGH | Critical pitfalls (contracts, pricing, AI overpromise) well-sourced. Cold outreach conversion data is anecdotal but consistent across multiple agency forums. |

**Overall confidence:** MEDIUM-HIGH

### Gaps to Address

- **GHL Voice AI quality in production:** Reviews are mixed. Only hands-on testing with real scenarios will confirm whether it meets the bar for contractor clients. Have My AI Front Desk ($65/mo) as a tested backup before selling the AI package.
- **GHL Website Builder template depth:** Need to verify that contractor-specific templates exist and are customizable enough to avoid the "identical sites" problem. If templates are too limited, WordPress + Divi ($5-10/mo hosting + $249 lifetime) is the documented backup.
- **Actual delivery time per client:** Architecture estimates 1-2 hours with templates. First builds will take 4-6 hours. Need to track actual time and adjust pricing if delivery consistently exceeds 6 hours.
- **San Diego contractor density by trade:** Route planning assumes enough contractors without websites exist in each target area. Validate during first week of outreach. If density is lower than expected, expand target geography or trades.
- **Licensing school referral volume:** Lead source #1 is described but not quantified. Need to formalize the relationship and understand realistic monthly referral volume before depending on it for revenue projections.
- **A2P 10DLC registration:** Sending business SMS through GHL requires carrier registration. Takes 1-2 weeks and costs ~$15 one-time. Must be started early in Phase 2 or SMS automations will not work.

## Sources

### Primary (HIGH confidence)
- [GoHighLevel Official Pricing](https://www.gohighlevel.com/pricing) -- plan costs, feature inclusions
- [GoHighLevel AI Product Pricing](https://help.gohighlevel.com/support/solutions/articles/155000006652-ai-product-pricing-update) -- per-minute voice AI costs
- [GHL Voice AI Pricing Guide](https://ghlcentral.com/highlevel-voice-ai-pricing-guide/) -- detailed cost breakdown
- [GoHighLevel AI Voice Agent Overview](https://help.gohighlevel.com/support/solutions/articles/155000003911-ai-voice-agents-overview) -- capabilities documentation

### Secondary (MEDIUM confidence)
- [Vendasta: Why Digital Agencies Fail](https://www.vendasta.com/blog/why-digital-agencies-fail/) -- agency failure patterns
- [Resonate AI: AI Receptionist Statistics](https://www.resonateapp.com/resources/ai-receptionists-statistics) -- missed call data
- [Sakas & Company: Client Turnover Rates](https://sakasandcompany.com/client-turnover-rates/) -- 25% annual churn
- [San Diego Web Studio Pricing](https://www.sandiegowebstudio.com/webpage-design-prices.html) -- local market rates
- [Bloominari SD Website Design](https://www.bloominari.com/pricing/website-design-packages-prices) -- local competitor pricing
- [Martal Group: B2B Conversion Statistics](https://martal.ca/conversion-rate-statistics-lb/) -- follow-up conversion data
- [Synthflow: Bland AI vs Vapi Comparison](https://synthflow.ai/blog/bland-ai-vs-vapi-ai) -- AI platform comparison

### Tertiary (LOW confidence)
- [Warrior Forum: Door to Door Web Design Sales](https://www.warriorforum.com/main-internet-marketing-discussion-forum/816204-web-development-door-door-sales-good-idea.html) -- cold walk-in conversion anecdotes
- [Cleverly: Cold Calling Statistics](https://www.cleverly.co/blog/cold-calling-statistics) -- outreach data (not specific to walk-ins)
- Agency owner forum discussions on GHL Voice AI quality -- anecdotal, mixed sentiment

---
*Research completed: 2026-03-19*
*Ready for roadmap: yes*
