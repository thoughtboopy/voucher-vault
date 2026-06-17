'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Voucher } from '@/types'
import { Icon } from './Icons'
import { cn, formatDate, getStatusBadge } from '@/lib/utils'
import { SPRING_CONFIG } from '@/lib/constants'

interface FlipCardProps {
  voucher: Voucher
  onRequestRedeem?: (voucherId: string) => void
  onUndoRedeem?: (voucherId: string) => void
  onConfirmRedeem?: (voucherId: string) => void
}

export function FlipCard({ 
  voucher, 
  onRequestRedeem, 
  onUndoRedeem, 
  onConfirmRedeem 
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const statusBadge = getStatusBadge(voucher.status)
  const isRedeemed = voucher.status === 'redeemed'

  const handleAction = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation()
    action()
  }

  return (
    <div 
      className={cn(
        'relative h-[420px] w-full cursor-pointer perspective-1000',
        isRedeemed && 'opacity-75'
      )}
      onClick={() => !isRedeemed && setIsFlipped(!isFlipped)}
      onMouseEnter={() => !isRedeemed && setIsFlipped(true)}
      onMouseLeave={() => !isRedeemed && setIsFlipped(false)}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={SPRING_CONFIG}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <motion.div
          className={cn(
            'absolute inset-0 rounded-2xl p-8 flex flex-col',
            'bg-cream-100 shadow-card hover:shadow-card-hover',
            'backface-hidden'
          )}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Category Badge */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-sans uppercase tracking-widest text-cream-400">
              {voucher.category}
            </span>
            <div className={cn('px-3 py-1 rounded-full text-xs font-sans', statusBadge.bgColor, statusBadge.color)}>
              {statusBadge.label}
            </div>
          </div>

          {/* Icon */}
          <div className="flex-1 flex items-center justify-center">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${voucher.color}20` }}
            >
              <Icon 
                name={voucher.icon} 
                size={36} 
                color={voucher.color} 
              />
            </div>
          </div>

          {/* Title & Description */}
          <div className="text-center space-y-2">
            <h3 className="font-serif text-3xl text-charcoal">{voucher.title}</h3>
            <p className="font-sans text-sm text-charcoal-light">{voucher.frontDescription}</p>
          </div>

          {/* Quantity & Flip Hint */}
          <div className="mt-6 pt-6 border-t border-cream-300 flex items-center justify-between">
            <div className="font-sans text-sm text-charcoal-light">
              <span className="font-semibold text-charcoal">{voucher.remainingQuantity}</span>
              <span className="mx-1">/</span>
              <span>{voucher.totalQuantity}</span>
              <span className="ml-1">remaining</span>
            </div>
            {isRedeemed ? (
              <div className="flex items-center gap-1 text-green-600 text-sm font-sans">
                <Icon name="check" size={16} />
                <span>Redeemed</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-cream-400 text-sm font-sans">
                <span>Tap to flip</span>
                <Icon name="arrow" size={14} />
              </div>
            )}
          </div>
        </motion.div>

        {/* Back Face */}
        <motion.div
          className={cn(
            'absolute inset-0 rounded-2xl p-8 flex flex-col',
            'bg-cream-200 shadow-card',
            'backface-hidden'
          )}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-2xl text-charcoal">{voucher.title}</h3>
            {!isRedeemed && (
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setIsFlipped(false)
                }}
                className="p-2 hover:bg-cream-300 rounded-full transition-colors"
              >
                <Icon name="x" size={18} className="text-charcoal-light" />
              </button>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4 overflow-auto">
            <p className="font-sans text-sm text-charcoal leading-relaxed">
              {voucher.backDetails}
            </p>

            {/* Terms */}
            <div className="space-y-2">
              <h4 className="font-sans text-xs uppercase tracking-widest text-cream-400 font-semibold">
                Terms & Conditions
              </h4>
              <ul className="space-y-1.5">
                {voucher.terms.map((term, index) => (
                  <li key={index} className="flex items-start gap-2 font-sans text-xs text-charcoal-light">
                    <span className="text-gold mt-0.5">•</span>
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            {/* Valid Until */}
            {voucher.validUntil && (
              <div className="pt-4 border-t border-cream-300">
                <p className="font-sans text-xs text-charcoal-light">
                  <span className="text-cream-400">Valid until:</span>{' '}
                  {formatDate(voucher.validUntil)}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 pt-4 border-t border-cream-300 space-y-3">
            {voucher.status === 'available' && (
              <button
                onClick={(e) => handleAction(e, () => onRequestRedeem?.(voucher.id))}
                className={cn(
                  'w-full py-4 rounded-xl font-sans font-semibold text-sm',
                  'bg-charcoal text-cream-50 hover:bg-charcoal-light hover:shadow-gold',
                  'transition-all duration-300'
                )}
              >
                Redeem
              </button>
            )}

            {voucher.status === 'pending' && (
              <div className="space-y-2">
                <p className="text-center font-sans text-xs text-orange-500 mb-2">
                  Are you sure you want to claim this?
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => handleAction(e, () => onUndoRedeem?.(voucher.id))}
                    className={cn(
                      'flex-1 py-3 rounded-xl font-sans font-medium text-sm',
                      'bg-cream-100 text-charcoal border border-cream-300',
                      'hover:bg-cream-300 transition-all duration-300'
                    )}
                  >
                    Undo
                  </button>
                  <button
                    onClick={(e) => handleAction(e, () => onConfirmRedeem?.(voucher.id))}
                    className={cn(
                      'flex-1 py-3 rounded-xl font-sans font-semibold text-sm',
                      'bg-gold text-charcoal hover:bg-gold-light',
                      'transition-all duration-300'
                    )}
                  >
                    Confirmed
                  </button>
                </div>
              </div>
            )}

            {voucher.status === 'redeemed' && (
              <div className="text-center py-4">
                <div className="inline-flex items-center gap-2 text-green-600 font-sans font-semibold">
                  <Icon name="check" size={20} />
                  <span>Permanently Claimed</span>
                </div>
                {voucher.redeemedAt && (
                  <p className="mt-2 font-sans text-xs text-charcoal-light">
                    on {formatDate(voucher.redeemedAt)}
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
