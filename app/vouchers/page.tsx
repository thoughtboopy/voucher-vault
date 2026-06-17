'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { FlipCard } from '@/components/FlipCard'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icons'
import { useVouchers, useAuth } from '@/lib/hooks'
import { APP_NAME, SPRING_CONFIG } from '@/lib/constants'
import { Voucher } from '@/types'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: SPRING_CONFIG
  }
}

export default function VouchersPage() {
  const router = useRouter()
  const { vouchers, requestRedeem, undoRedeem, confirmRedeem } = useVouchers()
  const { isAuthenticated, isLoading: isAuthLoading, logout } = useAuth()
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      router.push('/')
    } else if (!isAuthLoading && isAuthenticated) {
      setIsInitialized(true)
    }
  }, [isAuthenticated, isAuthLoading, router])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const totalVouchers = vouchers.length
  const totalQuantity = vouchers.reduce((acc, v) => acc + v.totalQuantity, 0)
  const totalRemaining = vouchers.reduce((acc, v) => acc + v.remainingQuantity, 0)
  const redeemedCount = vouchers.filter(v => v.status === 'redeemed').length

  if (isAuthLoading || !isInitialized) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-cream-50">
        <div className="animate-pulse text-cream-400 font-sans">Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream-50/80 backdrop-blur-md border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={SPRING_CONFIG}
            >
              <h1 className="font-serif text-2xl text-charcoal">{APP_NAME}</h1>
              <p className="font-sans text-xs text-cream-400 mt-0.5">
                {redeemedCount} of {totalQuantity} vouchers claimed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={SPRING_CONFIG}
            >
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <Icon name="logout" size={16} />
                <span className="ml-2 hidden sm:inline">Sign Out</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ...SPRING_CONFIG }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Happy Birthday, Praewa
          </h2>
          <p className="font-sans text-charcoal-light max-w-lg mx-auto text-xs sm:text-sm md:text-base">
            Tap to reveal. Redeem if you dare. No returns, no exchanges, no refunds.
          </p>
        </motion.div>

        {/* Voucher Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {vouchers.map((voucher: Voucher) => (
            <motion.div key={voucher.id} variants={itemVariants}>
              <FlipCard 
                voucher={voucher}
                onRequestRedeem={requestRedeem}
                onUndoRedeem={undoRedeem}
                onConfirmRedeem={confirmRedeem}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 pt-12 border-t border-cream-200"
        >
          <p className="font-serif text-lg text-charcoal-light italic">
            &quot;Unredeemed vouchers cannot be accumulated. Redeemed ones? Show Thought within a reasonable time or they vanish. Make it worth it.&quot;
          </p>
          <p className="font-sans text-xs text-cream-400 mt-4">
            — Thought (who definitely spent too long on this)
          </p>
        </motion.div>
      </div>
    </main>
  )
}
