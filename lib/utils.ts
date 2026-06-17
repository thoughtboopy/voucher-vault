import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function getRemainingBadgeColor(remaining: number, total: number): string {
  const ratio = remaining / total
  if (ratio === 1) return 'text-gold'
  if (ratio >= 0.5) return 'text-cream-400'
  if (ratio > 0) return 'text-orange-500'
  return 'text-charcoal-light'
}

export function getStatusBadge(status: string): {
  label: string
  color: string
  bgColor: string
} {
  switch (status) {
    case 'available':
      return { label: 'Available', color: 'text-gold', bgColor: 'bg-gold/10' }
    case 'pending':
      return { label: 'Pending', color: 'text-orange-500', bgColor: 'bg-orange-500/10' }
    case 'redeemed':
      return { label: 'Redeemed', color: 'text-green-600', bgColor: 'bg-green-600/10' }
    case 'expired':
      return { label: 'Expired', color: 'text-red-500', bgColor: 'bg-red-500/10' }
    default:
      return { label: 'Unknown', color: 'text-charcoal', bgColor: 'bg-charcoal/10' }
  }
}
