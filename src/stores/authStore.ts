import { create } from 'zustand'
import { supabase } from '../lib/supabase'

interface AuthState {
  user: any
  session: any
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  signIn: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
    set({ user: data.user, session: data.session })
  },
  signOut: async () => {
    await supabase.auth.signOut()
    set({ user: null, session: null })
  },
  signUp: async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) throw error
    set({ user: data.user, session: data.session })
  }
}))
