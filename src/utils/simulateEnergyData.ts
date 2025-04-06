import { supabase } from '../lib/supabase'

export async function simulateEnergyProduction() {
  // Generate random energy production data
  const energyData = {
    timestamp: new Date().toISOString(),
    solar_output: Math.random() * 10,
    battery_charge: Math.random() * 100,
    grid_import: Math.random() * 5,
    total_consumption: Math.random() * 15,
    carbon_offset: Math.random() * 2
  }

  const { error } = await supabase
    .from('energy_production')
    .insert(energyData)

  if (error) {
    console.error('Error inserting simulated data:', error)
  }
}

// Simulate data insertion every 5 seconds
export function startEnergyDataSimulation() {
  setInterval(simulateEnergyProduction, 5000)
}
