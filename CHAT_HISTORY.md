# Voucher Vault - Chat History Export

## Project Overview
A minimalist luxury 2-page web application for gifting electronic vouchers to Praewa (PW), created by Thought.

**Tech Stack:** Next.js 14 + Tailwind CSS + Framer Motion
**Design:** "Calm Cream" aesthetic with earth-tone accents
**Login:** "What is Tod's most favorite food?" → "ramen" (case-insensitive)
**URL:** Deployed on Vercel (see GitHub for latest)

---

## Key Decisions

### 1. Login Page
- Single question: "What is Tod's most favorite food?"
- Answer: "ramen" (case-insensitive)
- Font: Cormorant Garamond (elegant serif)
- Button: "UNLOCK" (all caps)
- Footer: "Thought worked hard on this. Be nice."

### 2. Header Text
- Page header: "Hello 30s PRAEWA"
- Intro: "Happy Birthday, Praewa"
- Description: "Tap to reveal. Redeem if you dare. No returns, no exchanges, no refunds."

### 3. Voucher Counter
- Shows: "{redeemedCount} of 14 vouchers claimed"
- Total: 14 individual vouchers across 8 types

### 4. Redemption Flow
1. **Available** → Tap "Redeem" → goes to **Pending**
2. **Pending** → "Undo" (back to Available) OR "Confirmed" (permanent)
3. **Redeemed** → Done, irreversible

### 5. Font Choices
- Headings/Question: Cormorant Garamond (serif, elegant)
- Body/UI: Plus Jakarta Sans (clean sans-serif)

### 6. Color Palette
| Element | Color | Hex |
|---------|-------|-----|
| Canvas Background | Alabaster | #FDFBF7 |
| Card Front | Soft Cream | #F5F2EB |
| Card Back | Warm Oatmeal | #EAE5DA |
| Typography | Espresso Charcoal | #2C2A29 |
| Accents | Champagne Gold | #D4AF37 |
| Terracotta | Earth tone | #C4784A |
| Sage | Earth tone | #A8B89C |
| Warm Brown | Earth tone | #8B7355 |
| Dusty Rose | Earth tone | #C9A9A6 |
| Forest | Earth tone | #7D8471 |

### 7. Valid Until
All vouchers valid: June 16, 2026 - June 16, 2027

---

## Voucher List (8 Types, 14 Total)

### 1. The Sparkle
- **Category:** Luxury Jewelry
- **Qty:** 1
- **Front:** "Tiffany & Co. Rose Gold Earrings"
- **Back:** "Thought clearly has excellent taste (finally). These Medium Link Earrings in Rose Gold are permanent, reasonably priced, and actually worth the metal. One pair, one lucky Praewa."
- **Terms:**
  - Valid for 1 pair of Tiffany & Co. Medium Link Earrings in Rose Gold
  - No, Thought cannot wear them instead
  - Yes, it has to be Rose Gold (it just does)
  - Appointment recommended, but Thought will wait at home anyway

### 2. Young at Heart
- **Category:** Wellness & Aesthetic
- **Qty:** 2
- **Front:** "Botox by Dr. Thought"
- **Back:** "Face wrinkles? What wrinkles? Praewa's face is already perfect, but just in case Time wants to test her... here's a Botox pass from the one and only Dr. Thought. (He promises gentle hands.)"
- **Terms:**
  - Valid for 2 Botox sessions by Dr. Thought (certification: loving boyfriend)
  - Side effects may include: Thought staring adoringly for longer than necessary
  - Wrinkles not guaranteed to disappear, but bad moods ARE guaranteed to vanish?!

### 3. The Tracker
- **Category:** Fitness & Health
- **Qty:** 1
- **Front:** "Tracking Chain for PW"
- **Back:** "For Praewa — the sweet-tooth, runs 6km and calls it a day, scrolls feed until midnight wondering why she's insomnia. Now you have a chain."
- **Terms:**
  - Valid for 1 fitness/biological tracking chain
  - Not responsible for Praewa forgetting to actually track things
  - Thought believes in you (mostly)
  - Chain does not guarantee results, but it looks cool, right?

### 4. Hot Yoga Teacher PW
- **Category:** Fashion & Fitness
- **Qty:** 2
- **Front:** "Super Hot Sport Bra & Pants Set"
- **Back:** "For the sexiest, cutest, healthiest version of PW. You absolutely CANNOT wear this to the store, mall or cafe — cause you're different from those..."
- **Terms:**
  - Valid for 1 set of fire-level sport bra and pants
  - STRICT: No wearing to store, mall, or cafe (this is not a request)
  - Praewa reserves the right to feel extremely hot in these
  - Thought reserves the right to malfunction upon sight

### 5. His&Her Shoes
- **Category:** Athletic Gear
- **Qty:** 1
- **Front:** "Training Shoes (Your Choice)"
- **Back:** "Running, training, or looking cool while pretending to exercise — you decide. Thought doesn't judge (okay maybe a little, but only because he cares about your arch support)."
- **Terms:**
  - Valid for 1 pair of training/running/hybrid shoes of Praewa's choice
  - Choice must align with actual activity (no, you cannot get trekking boots and sit on the couch)
  - No refunds if Praewa chooses style over comfort

### 6. PW the Iron Wok
- **Category:** Fine Dining
- **Qty:** 4
- **Front:** "Instagram Restaurant Voucher (x4)"
- **Back:** "Look, Praewa. You pick the new-opening, photogenic, Instagram-bait restaurants. The ones that look good on camera but make Thought die inside. Fine. Here are 4 vouchers. Show Thought this voucher when you've picked your spot, and he WILL shut up about it."
- **Terms:**
  - Valid for 4 Instagram-worthy restaurant experiences
  - STRICT: One voucher per Quarter (Q2, Q3, Q4, Q1)
  - Praewa picks the place, Thought pays the bill
  - When PW shows this voucher with her new restaurant choice, Thought shuts up immediately. No comments, no eye-rolls, no sighs.

### 7. Silence Mode
- **Category:** Special Powers
- **Qty:** 2
- **Front:** "Thought Shut-Up Card (x2)"
- **Back:** "When Praewa is LOSING IT because Thought won't stop talking, nerding out, or being over contrarian — BAM. Redeem this card and Thought will shut his mouth immediately. No appeals. No continuations. Complete silence (temporary)."
- **Terms:**
  - Valid for 2 instances of making Thought shut up
  - STRICT: May cause Thought slight emotional damage (he'll survive)
  - Redeemed card cannot be taken back once played
  - Side effect: Thought pouting may occur. Praewa's problem now.

### 8. Whatever You Want
- **Category:** Wildcard
- **Qty:** 1
- **Front:** "The Ultimate Get-Out-of-Jail-Free Card"
- **Back:** "The most dangerous voucher in existence. Whatever Praewa wants, whenever she wants it, however she wants it. The catch? It's entirely up to Thought's judgement. Good luck getting exactly what you want, Praewa."
- **Terms:**
  - Valid for 1 item/activity/experience of Praewa's choosing
  - Subject to Thought's final judgement (buckle up)
  - May range from "wow, that's actually perfect" to "are you kidding me"
  - Thought is not responsible for expectations exceeding reality

---

## Pending Changes

### Layout Change (NOT YET IMPLEMENTED)
**Goal:** Move last 2 vouchers (Silence Mode, Whatever You Want) to center on desktop.

**Desktop Layout (proposed):**
```
[ Card 1 ]  [ Card 2 ]  [ Card 3 ]
[ Card 4 ]  [ Card 5 ]  [ Card 6 ]
      [ Card 7 ]  [ Card 8 ]
```

**Mobile Layout (unchanged - stacked):**
```
[ Card 1 ]
[ Card 2 ]
...
[ Card 6 ]
[ Card 7 ]
[ Card 8 ]
```

**Implementation code:**
```tsx
{/* First 6 cards - 3 column grid */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {vouchers.slice(0, 6).map((voucher: Voucher) => (
    <motion.div key={voucher.id} variants={itemVariants}>
      <FlipCard ... />
    </motion.div>
  ))}
</motion.div>

{/* Last 2 cards - centered */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="flex justify-center gap-8 mt-8"
>
  {vouchers.slice(6).map((voucher: Voucher) => (
    <motion.div key={voucher.id} variants={itemVariants}>
      <FlipCard ... />
    </motion.div>
  ))}
</motion.div>
```

---

## Deployment Info
- **Platform:** Vercel
- **Repository:** GitHub (connected for auto-deploy)
- **Local dev:** `npm run dev` → http://localhost:3000

---

## Key Files
| File | Purpose |
|------|---------|
| `data/vouchers.ts` | All 8 voucher definitions |
| `app/page.tsx` | Login page |
| `app/vouchers/page.tsx` | Voucher gallery page |
| `components/FlipCard.tsx` | 3D flip card component |
| `lib/hooks.ts` | useVouchers, useAuth hooks |
| `lib/constants.ts` | APP_NAME, etc. |
| `types/index.ts` | TypeScript types |
| `tailwind.config.ts` | Color palette & fonts |

---

*Generated on: 2026-06-17*
*Created by: Droid (Factory AI)*
