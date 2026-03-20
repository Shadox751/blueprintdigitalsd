# Requirements: Blueprint Digital

**Defined:** 2026-03-19
**Core Value:** A contractor who answers their own phone and has no website loses jobs every day — Blueprint Digital fixes both and pays for itself with one extra booked job.

## v1 Requirements

### Business Foundation

- [ ] **FOUND-01**: Business name "Blueprint Digital" confirmed with domain registered (blueprintdigital.com or blueprintdigitalsd.com)
- [ ] **FOUND-02**: Business cards designed and ordered (Allan's name, number, website, tagline)
- [ ] **FOUND-03**: One-page client contract created with numbered deliverables and 50% deposit requirement
- [ ] **FOUND-04**: Pricing sheet defined ($1,200 setup + $200/mo standard; $1,000 setup + $150/mo floor)

### Operator Sales System (Claude Code slash commands)

- [ ] **SALES-01**: `/brief` command — pre-visit briefing that takes a business name/type and outputs talking points, likely objections, and what to say
- [ ] **SALES-02**: `/pitch` command — full contractor pitch script builder by contractor type (electrician, plumber, HVAC, GC)
- [ ] **SALES-03**: `/objection` command — takes an objection Allan heard and outputs counter-arguments with practice prompts
- [ ] **SALES-04**: `/roleplay` command — simulates a contractor conversation for Allan to practice before a visit
- [ ] **SALES-05**: `/log` command — logs a business visit (name, address, who spoke to, outcome, objections heard) to daily session log
- [ ] **SALES-06**: `/dashboard` command — shows pipeline summary (visits, follow-ups pending, deals closed, revenue)
- [ ] **SALES-07**: `/route` command — plans optimized San Diego outreach routes from Chula Vista (south first, sweep north) with target businesses

### Session Logging System

- [ ] **LOG-01**: Daily log files created automatically per day (append-only markdown)
- [ ] **LOG-02**: Each log entry captures: business name, address, contact name, outcome (interested/not/callback/closed), objections heard
- [ ] **LOG-03**: Weekly summary auto-generated: visits made, conversion rate, top objections, revenue pipeline
- [ ] **LOG-04**: Claude work log tracks what was built/changed each session

### GoHighLevel Platform Setup

- [ ] **GHL-01**: GoHighLevel Starter account created and configured for Blueprint Digital
- [ ] **GHL-02**: Master contractor website template built in GHL (electrician/plumber/HVAC/GC variants)
- [ ] **GHL-03**: GHL Voice AI configured and tested with 20+ contractor call scenarios
- [ ] **GHL-04**: A2P 10DLC SMS registration started (takes 1-2 weeks — must start early)
- [ ] **GHL-05**: Demo contractor site live and presentable on mobile (for in-person pitch)

### Client Website Pipeline

- [ ] **WEB-01**: `/intake` command — structured intake form capturing all info needed to build a contractor site (business name, services, service area, phone, photos, reviews)
- [ ] **WEB-02**: `/build` command — generates all copy, page structure, and GHL configuration for a new contractor site from intake data
- [ ] **WEB-03**: `/launch` command — checklist and steps to go live with a client site (domain, DNS, Google Business Profile link)
- [ ] **WEB-04**: `/handoff` command — client onboarding doc generator (how to send photos, how to update info, what to expect)
- [ ] **WEB-05**: Each client site includes: click-to-call (sticky), service pages, before/after gallery, Google reviews widget, contact form, service area map, local SEO basics

### AI Receptionist Pipeline

- [ ] **RECEP-01**: `/recep` command — configures GHL Voice AI for a specific client (business name, services, booking script, after-hours message)
- [ ] **RECEP-02**: AI receptionist framed and sold as "lead capture safety net" not "virtual employee" — pitch language documented
- [ ] **RECEP-03**: Monthly call summary report template created (shows client calls captured, leads generated)

### Client Retention System

- [ ] **RETAIN-01**: Monthly value report template (calls captured by AI, site visitors, leads from forms)
- [ ] **RETAIN-02**: `/report` command — generates monthly client report from GHL data
- [ ] **RETAIN-03**: Follow-up sequence for prospects who said "not now" (30-day, 60-day check-in prompts)

## v2 Requirements

### Growth

- **GROW-01**: Referral program structure for contractor-to-contractor referrals
- **GROW-02**: Licensing school partnership formally structured (referral fee agreement)
- **GROW-03**: Case study template — before/after for first 3 clients (social proof asset)
- **GROW-04**: Google Ads / Local Services Ads setup for clients (upsell)
- **GROW-05**: Spanish language AI receptionist option (GHL claimed capability — needs testing)

### Scale

- **SCALE-01**: Subcontractor onboarding (when Allan needs help with delivery)
- **SCALE-02**: Client portal in GHL
- **SCALE-03**: Automated review request sequences post-job

## Out of Scope

| Feature | Reason |
|---------|--------|
| E-commerce on client sites | Contractors don't sell products online |
| Allan's own agency marketing website | Phase 2 — get clients first, build credibility |
| Lovable.dev for website builds | Research confirmed: wrong tool for repeatable pipeline |
| Vapi / Bland AI / Synthflow | Too expensive or complex for solo operator at $100/mo budget |
| Mobile app for clients | Web-first; overkill for contractor market |
| Targeting non-contractor businesses | Focus discipline — contractors first, expand later |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUND-01 through FOUND-04 | Phase 1 | Pending |
| SALES-01 through SALES-07 | Phase 2 | Pending |
| LOG-01 through LOG-04 | Phase 2 | Pending |
| GHL-01 through GHL-05 | Phase 3 | Pending |
| WEB-01 through WEB-05 | Phase 4 | Pending |
| RECEP-01 through RECEP-03 | Phase 4 | Pending |
| RETAIN-01 through RETAIN-03 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 32 total
- Mapped to phases: 32
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-19*
*Last updated: 2026-03-19 after initial definition*
