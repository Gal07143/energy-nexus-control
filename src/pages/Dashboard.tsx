import { useEffect } from 'react'
import { useDeviceStore } from '../stores/deviceStore'
import { useEnergyStore } from '../stores/energyStore'
import { useAuthStore } from '../stores/authStore'

export default function Dashboard() {
  const { devices, fetchDevices } = useDeviceStore()
  const { energyData, fetchEnergyProduction } = useEnergyStore()
  const { user, signOut } = useAuthStore()

  useEffect(() => {
    fetchDevices()
    fetchEnergyProduction()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Energy Nexus Dashboard</h1>
        <div>
          <span className="mr-4">{user?.email}</span>
          <button 
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Devices Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Devices</h2>
        <div className="grid grid-cols-3 gap-4">
          {devices.map(device => (
            <div key={device.id} className="border p-4 rounded">
              <h3 className="font-bold">{device.name}</h3>
              <p>Type: {device.type}</p>
              <p>Status: {device.status}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Energy Production Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Energy Production</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Timestamp</th>
                <th className="p-2">Solar Output</th>
                <th className="p-2">Battery Charge</th>
                <th className="p-2">Grid Import</th>
                <th className="p-2">Carbon Offset</th>
              </tr>
            </thead>
            <tbody>
              {energyData.map(entry => (
                <tr key={entry.id} className="border-b">
                  <td className="p-2">{new Date(entry.timestamp).toLocaleString()}</td>
                  <td className="p-2">{entry.solar_output} kWh</td>
                  <td className="p-2">{entry.battery_charge}%</td>
                  <td className="p-2">{entry.grid_import} kWh</td>
                  <td className="p-2">{entry.carbon_offset} kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
