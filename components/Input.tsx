'use client'

import { cn } from '@/lib/utils'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full px-6 py-4 rounded-xl font-sans text-charcoal',
          'bg-cream-100 border border-cream-300',
          'placeholder:text-charcoal-light/50',
          'focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20',
          'transition-all duration-300',
          'text-center text-2xl tracking-[0.5em]',
          error && 'border-red-400 focus:border-red-400 focus:ring-red-400/20',
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'
