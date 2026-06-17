'use client'

import { useState, useEffect, useCallback } from 'react'
import { vouchers as initialVouchers } from '@/data/vouchers'
import { Voucher } from '@/types'

const STORAGE_KEY = 'voucher_vault_state'
const STORAGE_VERSION = 'v2' // Bump this number when voucher data changes
const SECRET_ANSWER = 'ramen'

function loadFromStorage(): Voucher[] | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored)
    // Check if data is current version
    if (parsed._version !== STORAGE_VERSION) return null
    return parsed.vouchers
  } catch {
    return null
  }
}

function saveToStorage(vouchers: Voucher[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ vouchers, _version: STORAGE_VERSION }))
  } catch {
    // Ignore storage errors
  }
}

export function useVouchers() {
  const [vouchers, setVouchers] = useState<Voucher[]>(() => {
    const stored = loadFromStorage()
    return stored || initialVouchers
  })

  useEffect(() => {
    saveToStorage(vouchers)
  }, [vouchers])

  const requestRedeem = useCallback((voucherId: string) => {
    setVouchers(prev => prev.map(v => {
      if (v.id === voucherId && v.status === 'available') {
        return { ...v, status: 'pending' as const }
      }
      return v
    }))
  }, [])

  const undoRedeem = useCallback((voucherId: string) => {
    setVouchers(prev => prev.map(v => {
      if (v.id === voucherId && v.status === 'pending') {
        return { ...v, status: 'available' as const }
      }
      return v
    }))
  }, [])

  const confirmRedeem = useCallback((voucherId: string) => {
    setVouchers(prev => prev.map(v => {
      if (v.id === voucherId && v.status === 'pending') {
        return { 
          ...v, 
          status: 'redeemed' as const,
          remainingQuantity: v.remainingQuantity - 1,
          redeemedAt: new Date().toISOString()
        }
      }
      return v
    }))
  }, [])

  return { vouchers, requestRedeem, undoRedeem, confirmRedeem }
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem('voucher_vault_auth')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = useCallback((answer: string): boolean => {
    if (answer.toLowerCase().trim() === SECRET_ANSWER.toLowerCase()) {
      sessionStorage.setItem('voucher_vault_auth', 'true')
      setIsAuthenticated(true)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem('voucher_vault_auth')
    setIsAuthenticated(false)
  }, [])

  return { isAuthenticated, isLoading, login, logout }
}
