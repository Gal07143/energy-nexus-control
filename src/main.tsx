import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { startEnergyDataSimulation } from './utils/simulateEnergyData'

// Only run in development
if (import.meta.env.DEV) {
  startEnergyDataSimulation()
}

createRoot(document.getElementById("root")!).render(<App />);
