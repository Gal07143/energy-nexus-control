import { useEffect, useState } from 'react'
import { useDeviceStore } from '../stores/deviceStore'
import { useEnergyStore } from '../stores/energyStore'
import { useAuthStore } from '../stores/authStore'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const { devices, fetchDevices } = useDeviceStore()
  const { energyData, fetchEnergyProduction } = useEnergyStore()
  const { user, signOut } = useAuthStore()
  
  // New real-time indicator
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [liveConsumption, setLiveConsumption] = useState(0)

  useEffect(() => {
    fetchDevices()
    fetchEnergyProduction()

    // Set up real-time subscription
    const channel = supabase
      .channel('energy_production_updates')
      .on(
        'postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'energy_production' },
        (payload) => {
          // Update last update time
          setLastUpdate(new Date())
          
          // Update live consumption
          setLiveConsumption(payload.new.total_consumption || 0)
        }
      )
      .subscribe()

    // Cleanup subscription
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  return (
    <div className="container mx-auto p-4">
      {/* Existing dashboard content */}
      
      {/* New Real-Time Indicator */}
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
        <div className="text-sm font-bold">🔴 LIVE</div>
        <div className="text-2xl font-bold">
          Current Consumption: {liveConsumption.toFixed(2)} kWh
        </div>
        <div className="text-xs mt-2">
          Last Update: {lastUpdate.toLocaleTimeString()}
        </div>
      </div>
    </div>
  )
}
