# Voucher Vault

A minimalist luxury 2-page web application for gifting electronic vouchers with a calm cream aesthetic.

## Project Structure

```
voucher-vault/
├── app/
│   ├── vouchers/
│   │   └── page.tsx              # Voucher gallery (Page 2)
│   ├── globals.css               # Global styles + Tailwind
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Login page (Page 1)
├── components/
│   ├── FlipCard.tsx              # 3D flip card with redeem flow
│   ├── Icons.tsx                 # SVG icon components
│   ├── Input.tsx                 # Styled input component
│   └── Button.tsx                # Reusable button
├── data/
│   └── vouchers.ts               # Voucher data
├── lib/
│   ├── constants.ts              # App constants
│   ├── hooks.ts                  # useVouchers, useAuth
│   └── utils.ts                  # Utility functions
├── types/
│   └── index.ts                  # TypeScript types
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Features

- **3D Flip Card Animation** - Hover/tap to reveal voucher details
- **"Calm Cream" Aesthetic** - Warm ivory palette with champagne gold accents
- **Mobile Responsive** - Optimized for phone viewing
- **Simple Question Auth** - Personal question only you and she know
- **Safe Redemption Flow** - "Redeem" → "Undo" or "Confirmed" (irreversible)
- **Local Storage Persistence** - Redemption state persists across sessions

## Redemption Flow

1. **Available** → Tap "Redeem" → goes to "Pending"
2. **Pending** → "Undo" (back to Available) or "Confirmed" (permanent)
3. **Redeemed** → Done, no more actions possible

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Custom SVG (Lucide-style, ultra-thin)
- **Fonts:** Cormorant Garamond (serif) + Plus Jakarta Sans (sans)
- **Storage:** localStorage (no backend required)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Login Answer

The login question is: **"What is the most favorite food for Tod?"**

The answer is **"ramen"** (case-insensitive).

To change the question/answer, edit:
- `app/page.tsx` (the displayed question)
- `lib/hooks.ts` (the SECRET_ANSWER constant)

## Design Tokens

| Element | Color | Hex |
|---------|-------|-----|
| Canvas Background | Alabaster | #FDFBF7 |
| Card Front | Soft Cream | #F5F2EB |
| Card Back | Warm Oatmeal | #EAE5DA |
| Typography | Espresso Charcoal | #2C2A29 |
| Accents | Champagne Gold | #D4AF37 |

## Voucher Schema

```typescript
{
  id: string
  title: string
  category: 'Luxury Jewelry' | 'Wellness & Aesthetic' | 'Fine Dining' | 'Travel' | 'Fashion' | 'Experience'
  frontDescription: string
  backDetails: string
  terms: string[]
  totalQuantity: number
  remainingQuantity: number
  status: 'available' | 'pending' | 'redeemed' | 'expired'
  validUntil?: string
  icon: string
  color?: string
  redeemedAt?: string  // Timestamp when permanently claimed
}
```
