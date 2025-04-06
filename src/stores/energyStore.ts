import { create } from 'zustand'
import { supabase } from '../lib/supabase'

interface EnergyProduction {
  id: string
  timestamp: string
  solar_output: number
  battery_charge: number
  grid_import: number
  carbon_offset: number
}

interface EnergyState {
  energyData: EnergyProduction[]
  fetchEnergyProduction: () => Promise<void>
  addEnergyProduction: (data: Omit<EnergyProduction, 'id'>) => Promise<void>
}

export const useEnergyStore = create<EnergyState>((set) => ({
  energyData: [],
  fetchEnergyProduction: async () => {
    const { data, error } = await supabase
      .from('energy_production')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(50)
    
    if (error) throw error
    set({ energyData: data || [] })
  },
  addEnergyProduction: async (energyData) => {
    const { data, error } = await supabase
      .from('energy_production')
      .insert(energyData)
      .select()
    
    if (error) throw error
    
    set(state => ({
      energyData: [data[0], ...state.energyData]
    }))
  }
}))
