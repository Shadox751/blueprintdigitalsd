# Architecture Patterns

**Domain:** Solo local agency delivery pipeline (websites + AI receptionists for contractors)
**Researched:** 2026-03-19 (Updated with stack-informed delivery architecture)

## System Overview

Two interconnected systems work together:

1. **Allan's Operator System** (Claude Code on laptop) -- Sales workflows, route planning, content generation, session logging. Markdown files as data stores, slash commands as the interface. (Defined in previous research pass -- see slash command architecture below.)

2. **Client Delivery Platform** (GoHighLevel) -- Where client-facing assets live: websites, AI receptionists, CRM pipelines, automations, phone numbers. This is the production system clients interact with.

```
ALLAN'S LAPTOP (Claude Code)              GOHIGHLEVEL (Cloud Platform)
================================          ================================

SALES LAYER                               AGENCY ACCOUNT ($97/mo)
+------------------------+                +----------------------------+
| /route  - Plan day     |                | Agency Sub-Account         |
| /brief  - Pre-visit    |                |   Sales pipeline tracking  |
| /pitch  - Script gen   |                |   (mirrors pipeline/ files)|
| /objection - Practice  |                +----------------------------+
| /log    - After visit  |
+------------------------+                CLIENT SUB-ACCOUNTS (up to 3)
          |                               +----------------------------+
          v                               | Client #1 Sub-Account      |
DELIVERY LAYER                            |   Website (from template)  |
+------------------------+                |   Voice AI Receptionist    |
| /intake  - Capture     |---content--->  |   Phone Number (local SD)  |
| /build   - Gen content |---paste--->    |   CRM: Lead pipeline       |
| /recep   - AI scripts  |---config--->   |   Automations:             |
| /launch  - Go-live     |---verify--->   |     - Missed call textback |
| /handoff - Client pkg  |               |     - Speed-to-lead SMS    |
+------------------------+                |     - Review requests      |
          |                               |   Booking Calendar         |
          v                               +----------------------------+
MARKDOWN DATA STORE                       | Client #2 Sub-Account      |
+------------------------+                |   (Same structure)         |
| logs/YYYY-MM-DD.md     |               +----------------------------+
| pipeline/[name].md     |
| clients/[name].md      |
| delivery/[name]/       |
+------------------------+
```

**How they connect:** Claude Code generates content and configuration. Allan pastes/configures it into GHL. GHL is the runtime. Claude Code is the authoring environment.

## Build Order (Explicit and Justified)

### TONIGHT (Before Tomorrow's Route)

These are the only things that need to exist before Allan walks out the door.

**1. Route Planning Command** `/route`
- Input: Target area (e.g., "Chula Vista contractors no website")
- Output: Ordered list of businesses to visit with addresses, what they do, and notes
- Why first: Cannot do sales visits without knowing where to go
- MVP: A slash command that takes `$ARGUMENTS` (area + trade type) and outputs a markdown route sheet

**2. Pre-Visit Briefing Command** `/brief`
- Input: Business name and address
- Output: One-page brief -- what they do, why they need a website, conversation opener, pricing anchor
- Why second: Even a 30-second brief per business improves close rate
- MVP: Slash command that generates a briefing from the business name alone (Google-searchable info)

**3. Session Log Command** `/log`
- Input: Natural language about what happened at each visit
- Output: Structured daily log entry appended to `logs/YYYY-MM-DD.md`
- Why third: If Allan visits 10 businesses and does not log, all intelligence is lost
- MVP: Slash command that takes `$ARGUMENTS` (free text) and structures it into the log format

### WEEK 1 (While Doing Sales Visits)

Build these in gaps between outings -- evenings and downtime.

**4. GoHighLevel Account Setup**
- Sign up for GHL Starter ($97/mo, 14-day free trial)
- Create agency sub-account with sales pipeline
- Build master contractor website template (see Template Architecture below)
- Configure master Voice AI receptionist script

**5. Pipeline Tracker** (pipeline/ markdown files)
- Each prospect gets `pipeline/[business-name].md` on first contact
- Status field: cold / visited / interested / quoted / closed / dead
- All interactions appended chronologically

**6. Pitch Script Builder** `/pitch`
- Input: Trade type + specific situation
- Output: Tailored pitch script with opener, value prop, price anchor, close line

**7. Objection Trainer** `/objection`
- Input: An objection heard in the field
- Output: 2-3 response frameworks + role-play dialogue

### WEEK 2-3 (After First Closes)

**8. Client Intake Workflow** `/intake`
- Collects all info needed for website build AND AI receptionist config
- Outputs: `clients/[business-name].md`

**9. Website Build Pipeline** `/build`
- Reads client file, generates website content
- Allan clones GHL template, pastes content, customizes colors/photos
- Target: 1-2 hours from intake to live site

**10. AI Receptionist Onboarding** `/recep`
- Reads client file, generates receptionist script and GHL Voice AI configuration
- Allan configures in GHL Voice AI settings

**11. Launch and Handoff** `/launch` and `/handoff`
- Launch: checklist for going live (DNS, test calls, SEO basics)
- Handoff: client-facing document explaining what they got

## GHL Template Architecture

### Master Contractor Website Template

Build once in GHL, clone for every client:

```
PAGE STRUCTURE:
==============

1. HOME
   - Hero: Trade-specific headline + phone CTA button
   - 3 service cards (configurable)
   - Trust bar: "Licensed | Insured | [X] Years Experience"
   - Testimonial carousel (2-3 reviews)
   - Contact form (flows to GHL CRM)
   - Embedded booking calendar

2. SERVICES
   - Individual service descriptions
   - Service area map or list
   - "Request a Quote" CTA per service

3. ABOUT
   - Owner story / company history
   - License number (CSLB requirement)
   - Team photo section
   - Years in business

4. REVIEWS
   - Google review widget or manual testimonials
   - Review request CTA for existing customers

5. CONTACT
   - Phone (click-to-call)
   - Contact form
   - Service area
   - Business hours
   - Physical address (if applicable)

GLOBAL ELEMENTS:
   - Header: Logo + Phone + "Get a Free Quote" button
   - Footer: License #, service area, phone, copyright
   - Mobile: Sticky phone CTA bar at bottom
```

### Master Voice AI Script Template

```
GREETING:
"Thanks for calling [BUSINESS NAME], this is our automated assistant.
How can I help you today?"

LEAD CAPTURE FLOW:
1. "What service do you need help with?"
   -> Capture: service_type
2. "Can I get your name?"
   -> Capture: caller_name
3. "And a good phone number to reach you?"
   -> Capture: caller_phone
4. "What's the address where you need the work done?"
   -> Capture: service_address
5. "Is this an emergency, or can it wait for a callback?"
   -> Capture: urgency

BOOKING (if enabled):
"I can schedule an estimate for you. We have availability on [NEXT SLOTS].
Would any of those work?"

CLOSING:
"Great, I've got all your information. [OWNER NAME] will call you back
within [TIMEFRAME]. Is there anything else I can help with?"

AFTER HOURS:
"Thanks for calling [BUSINESS NAME]. We're currently closed but your call
is important to us. Let me take your information and we'll call you first
thing in the morning."

EMERGENCY:
"If this is an electrical/plumbing emergency, I'm going to connect you
directly to [OWNER NAME] right now."
-> Transfer to owner's cell

FAQ RESPONSES:
- Hours: "[BUSINESS HOURS]"
- Service area: "We serve [CITIES/NEIGHBORHOODS]"
- Licensing: "Yes, we're fully licensed. Our CSLB license number is [NUMBER]"
- Estimates: "We offer free estimates. Let me get your info and schedule one."
```

## Component Details

### Session Log System

(Unchanged from previous architecture -- see file structure below)

**File structure:**
```
logs/
  2026-03-20.md
  2026-03-21.md
pipeline/
  joes-plumbing.md
  sd-electric-co.md
clients/
  martinez-hvac.md
delivery/
  martinez-hvac/
    content.md
    receptionist.md
    launch-checklist.md
    handoff.md
```

### Sales Agent Command System

| Command | File | Input | Output | Reads | Writes |
|---------|------|-------|--------|-------|--------|
| `/route` | `route.md` | Area, trade type | Ordered visit list | Nothing (web search) | `logs/YYYY-MM-DD.md` |
| `/brief` | `brief.md` | Business name | Pre-visit briefing | `pipeline/[name].md` if exists | Nothing (stdout) |
| `/pitch` | `pitch.md` | Trade, situation | Tailored pitch script | Nothing | Nothing (stdout) |
| `/objection` | `objection.md` | Objection text | Response frameworks | `logs/` (past objections) | Nothing (stdout) |
| `/log` | `log.md` | Free text about visit | Structured log entry | Current day's log | `logs/YYYY-MM-DD.md`, `pipeline/[name].md` |
| `/dashboard` | `dashboard.md` | Date range (optional) | Stats summary | `logs/`, `pipeline/`, `clients/` | Nothing (stdout) |
| `/intake` | `intake.md` | Client info | Structured client file | Nothing | `clients/[name].md` |
| `/build` | `build.md` | Client name | Website content package | `clients/[name].md` | `delivery/[name]/content.md` |
| `/recep` | `recep.md` | Client name | Receptionist config | `clients/[name].md` | `delivery/[name]/receptionist.md` |

### Client Delivery Data Flow

**New customer calls contractor's number:**
```
Customer dials --> GHL LC Phone --> Voice AI answers
    --> AI captures: name, service needed, address, urgency
    --> Lead created in client CRM pipeline
    --> SMS sent to contractor: "New lead: John, needs panel upgrade, 92105"
    --> If booking enabled: appointment scheduled on calendar
    --> Call recording saved for review
```

**Customer visits contractor's website:**
```
Customer lands on site --> Browses services --> Fills contact form
    --> Lead created in client CRM pipeline
    --> SMS sent to contractor: "New web lead: Jane, needs rewiring"
    --> Auto-email to customer: "Thanks, we'll call you within 1 hour"
```

**Production pipeline (Allan delivers a new client):**
```
CLOSE --> /intake --> clients/acme-electric.md
                        |
                        v
                   /build --> delivery/acme-electric/content.md
                        |
                        v
                   Clone GHL template --> Paste content --> Customize
                        |
                        v
                   /recep --> delivery/acme-electric/receptionist.md
                        |
                        v
                   Configure GHL Voice AI --> Purchase phone number
                        |
                        v
                   Set up 4 automations (missed call, speed-to-lead, etc.)
                        |
                        v
                   /launch --> Test everything --> DNS --> Go live
                        |
                        v
                   /handoff --> Client gets: login info, what to expect, support contact
```

## Patterns to Follow

### Pattern 1: Command-per-workflow, not monolithic agent
**What:** Each workflow step gets its own slash command with a single responsibility.
**When:** Always.
**Why:** Solo operator needs to trust each tool. Small commands are debuggable.

### Pattern 2: Markdown as database
**What:** All persistent data lives in markdown files with consistent structure.
**When:** For all CRM, pipeline, and delivery data.
**Why:** Zero cost, version-controlled, readable by Claude AND Allan.

### Pattern 3: Template-based delivery in GHL
**What:** Build one master website template and one master AI script, clone per client.
**When:** Every new client.
**Why:** Keeps delivery to 1-2 hours instead of 8-12 hours of custom work.

### Pattern 4: Content generation separated from tool execution
**What:** Claude generates content/scripts/checklists. Allan executes them in GHL.
**When:** For website building, AI receptionist configuration, DNS setup.
**Why:** External tools have GUIs faster to click through than to automate.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Building a web app for the CRM
**Instead:** Markdown files + `/dashboard` command.

### Anti-Pattern 2: Automating Google Maps scraping
**Instead:** Manual 15-minute research, paste into `/route`.

### Anti-Pattern 3: Hosting client sites outside GHL
**Instead:** Use GHL's built-in hosting. One platform, one bill, one login.

### Anti-Pattern 4: Over-engineering the AI voice script
**Instead:** Simple linear flow: greet > capture info > promise callback.

### Anti-Pattern 5: Promising custom integrations
**Instead:** Core package only. Integrations are a separate paid project.

## Directory Structure

```
website/                          # Project root
  .claude/
    commands/                     # Slash command definitions
      route.md
      brief.md
      pitch.md
      objection.md
      log.md
      dashboard.md
      intake.md
      build.md
      recep.md
      launch.md
      handoff.md
  logs/                           # Daily session logs
  pipeline/                       # Prospect tracking (pre-close)
  clients/                        # Client files (post-close)
  delivery/                       # Per-client delivery artifacts
  .planning/                      # Project planning
    PROJECT.md
    research/
    roadmap/
```

## Scalability Considerations

| Concern | 1-2 Clients | 5-10 Clients | 20+ Clients |
|---------|-------------|--------------|-------------|
| GHL Plan | Starter ($97/mo, 3 sub-accts) | Unlimited ($297/mo) | Pro ($497/mo) |
| Delivery time | 4-6 hours (learning) | 1-2 hours (templated) | Hire VA for builds |
| Voice AI costs | $50-150/mo total | $250-750/mo total | Negotiate enterprise |
| Operator system | Markdown files work fine | Still fine | Consider status index |
| Revenue | $150-600/mo | $750-3,000/mo | $3,000-6,000+/mo |

## Sources

- GoHighLevel sub-account architecture documentation
- Agency delivery model patterns (common in GHL community)
- Previous architecture research (slash command system)
- [Building Effective AI Agents - Anthropic](https://www.anthropic.com/research/building-effective-agents)
- [Claude Code Slash Commands Docs](https://code.claude.com/docs/en/slash-commands)
