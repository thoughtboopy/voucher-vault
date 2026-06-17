'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '@/lib/hooks'
import { SPRING_CONFIG } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError(false)

    if (login(answer)) {
      router.push('/vouchers')
    } else {
      setError(true)
      setAnswer('')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-6 bg-cream-50 relative overflow-hidden">
      {/* Earth-tone decorative lines - top left (smaller on mobile) */}
      <motion.div 
        className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" preserveAspectRatio="xMinYMin slice">
          <motion.path 
            d="M0 80 Q40 60, 80 80 T160 80" 
            stroke="#C4784A" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          <motion.path 
            d="M0 100 Q50 70, 100 100 T200 100" 
            stroke="#A8B89C" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.path 
            d="M0 120 Q60 90, 120 120 T200 120" 
            stroke="#8B7355" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
        </svg>
      </motion.div>

      {/* Earth-tone decorative lines - top right */}
      <motion.div 
        className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" preserveAspectRatio="xMaxYMin slice">
          <motion.path 
            d="M200 90 Q160 70, 120 90 T40 90" 
            stroke="#A8B89C" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
          <motion.path 
            d="M200 110 Q150 80, 100 110 T0 110" 
            stroke="#C4784A" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
          <motion.path 
            d="M200 130 Q140 100, 80 130 T0 130" 
            stroke="#7D8471" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </svg>
      </motion.div>

      {/* Earth-tone decorative lines - bottom left */}
      <motion.div 
        className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" preserveAspectRatio="xMinYMax slice">
          <motion.path 
            d="M0 120 Q50 140, 100 120 T200 120" 
            stroke="#8B7355" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.path 
            d="M0 100 Q60 130, 120 100 T200 100" 
            stroke="#C9A9A6" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.path 
            d="M0 80 Q70 120, 140 80 T200 80" 
            stroke="#A8B89C" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
        </svg>
      </motion.div>

      {/* Earth-tone decorative lines - bottom right */}
      <motion.div 
        className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" preserveAspectRatio="xMaxYMax slice">
          <motion.path 
            d="M200 130 Q150 150, 100 130 T0 130" 
            stroke="#7D8471" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          />
          <motion.path 
            d="M200 110 Q140 140, 80 110 T0 110" 
            stroke="#C4784A" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
          <motion.path 
            d="M200 90 Q130 130, 60 90 T0 90" 
            stroke="#C9A9A6" 
            strokeWidth="1.5" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.0 }}
          />
        </svg>
      </motion.div>

      {/* Content - centered with proper mobile padding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-sm sm:max-w-md text-center px-4"
      >
        {/* Decorative line above question */}
        <motion.div 
          className="flex items-center justify-center gap-3 mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-terracotta" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-terracotta" />
        </motion.div>

        {/* Question - smaller on mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 sm:mb-12 tracking-wide"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.25rem, 5vw, 2rem)',
            fontWeight: 300,
            color: '#2C2A29',
            letterSpacing: '0.02em',
            lineHeight: 1.4
          }}
        >
          What is Tod&apos;s most favorite food?
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer..."
              autoComplete="off"
              className={cn(
                'w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-charcoal text-center',
                'bg-cream-100 border',
                'placeholder:text-charcoal-light/40 placeholder:font-sans',
                'focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20',
                'transition-all duration-300 touch-manipulation',
                error 
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                  : 'border-cream-300',
                'text-lg sm:text-xl tracking-wide'
              )}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            />
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 sm:mt-3 text-sm text-red-500 font-sans"
              >
                That&apos;s not quite right. Try again.
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button
              type="submit"
              disabled={!answer.trim()}
              className={cn(
                'w-full py-3 sm:py-4 rounded-xl font-sans font-semibold text-base sm:text-lg',
                'bg-charcoal text-cream-50',
                'active:bg-charcoal-light active:scale-[0.98]',
                'transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
                'touch-manipulation select-none'
              )}
            >
              UNLOCK
            </button>
          </motion.div>
        </form>

        {/* Decorative line below button */}
        <motion.div 
          className="flex items-center justify-center gap-3 mt-8 sm:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-sage" />
          <div className="w-1 h-1 rounded-full bg-cream-400" />
          <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-sage" />
        </motion.div>

        {/* Footer hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 sm:mt-8 text-xs sm:text-sm text-cream-400 font-sans"
        >
          Thought worked hard on this. Be nice.
        </motion.p>
      </motion.div>
    </main>
  )
}
