import { create } from 'zustand'
import { supabase } from '../lib/supabase'

interface Device {
  id: string
  name: string
  type: string
  status: string
}

interface DeviceState {
  devices: Device[]
  fetchDevices: () => Promise<void>
  addDevice: (device: Omit<Device, 'id'>) => Promise<void>
  updateDeviceStatus: (id: string, status: string) => Promise<void>
}

export const useDeviceStore = create<DeviceState>((set, get) => ({
  devices: [],
  fetchDevices: async () => {
    const { data, error } = await supabase.from('devices').select('*')
    if (error) throw error
    set({ devices: data || [] })
  },
  addDevice: async (device) => {
    const { data, error } = await supabase
      .from('devices')
      .insert(device)
      .select()
    
    if (error) throw error
    
    // Update local state
    set(state => ({
      devices: [...state.devices, data[0]]
    }))
  },
  updateDeviceStatus: async (id, status) => {
    const { error } = await supabase
      .from('devices')
      .update({ status })
      .eq('id', id)
    
    if (error) throw error
    
    // Optimistically update local state
    set(state => ({
      devices: state.devices.map(device => 
        device.id === id ? { ...device, status } : device
      )
    }))
  }
}))
