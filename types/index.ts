export type VoucherStatus = 'available' | 'pending' | 'redeemed' | 'expired'

export interface Voucher {
  id: string
  title: string
  category: 'Luxury Jewelry' | 'Wellness & Aesthetic' | 'Fine Dining' | 'Travel' | 'Fashion' | 'Fashion & Fitness' | 'Experience' | 'Fitness & Health' | 'Athletic Gear' | 'Special Powers' | 'Wildcard'
  frontDescription: string
  backDetails: string
  terms: string[]
  totalQuantity: number
  remainingQuantity: number
  status: VoucherStatus
  validUntil?: string
  icon: string
  color?: string
  redeemedAt?: string // When permanently confirmed
}

export interface UserSession {
  isAuthenticated: boolean
  partnerName?: string
  loginAt?: string
}
