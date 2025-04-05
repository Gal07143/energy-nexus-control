
import { Battery, Car, Cloud, House, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function EnergyFlowDiagram() {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Energy Flow
        </CardTitle>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">Real-time</span>
          <div className="h-2 w-2 rounded-full bg-energy-saving animate-pulse-opacity"></div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Energy Flow Diagram */}
        <div className="relative h-[300px] w-full">
          {/* SVG Energy Flow */}
          <svg className="h-full w-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
            {/* Solar to Battery Flow */}
            <path
              d="M200,60 C300,60 300,120 400,120"
              className="energy-flow-path stroke-energy-solar"
              strokeDashoffset="70%"
            />
            
            {/* Solar to Home Flow */}
            <path
              d="M200,60 C250,60 300,150 400,200"
              className="energy-flow-path stroke-energy-solar"
              strokeDashoffset="20%"
            />
            
            {/* Battery to EV Flow */}
            <path
              d="M400,120 C500,120 500,60 600,60"
              className="energy-flow-path stroke-energy-battery"
              strokeDashoffset="50%"
            />
            
            {/* Battery to Home Flow */}
            <path
              d="M400,120 C450,120 350,180 400,200"
              className="energy-flow-path stroke-energy-battery"
              strokeDashoffset="80%"
            />
            
            {/* Grid to Home Flow */}
            <path
              d="M200,200 C300,200 300,200 400,200"
              className="energy-flow-path stroke-energy-grid"
              strokeDashoffset="65%"
            />
            
            {/* Labels and Nodes */}
            <g className="energy-node-labels">
              {/* Solar Node */}
              <circle cx="200" cy="60" r="40" className="fill-white dark:fill-gray-900 stroke-energy-solar stroke-2" />
              <text x="200" y="50" textAnchor="middle" className="text-sm font-medium">Solar</text>
              <text x="200" y="70" textAnchor="middle" className="text-xs">3.8 kW</text>
              
              {/* Battery Node */}
              <circle cx="400" cy="120" r="40" className="fill-white dark:fill-gray-900 stroke-energy-battery stroke-2" />
              <text x="400" y="110" textAnchor="middle" className="text-sm font-medium">Battery</text>
              <text x="400" y="130" textAnchor="middle" className="text-xs">+1.6 kW</text>
              
              {/* EV Node */}
              <circle cx="600" cy="60" r="40" className="fill-white dark:fill-gray-900 stroke-energy-ev stroke-2" />
              <text x="600" y="50" textAnchor="middle" className="text-sm font-medium">EV</text>
              <text x="600" y="70" textAnchor="middle" className="text-xs">0.0 kW</text>
              
              {/* Grid Node */}
              <circle cx="200" cy="200" r="40" className="fill-white dark:fill-gray-900 stroke-energy-grid stroke-2" />
              <text x="200" y="190" textAnchor="middle" className="text-sm font-medium">Grid</text>
              <text x="200" y="210" textAnchor="middle" className="text-xs">+0.2 kW</text>
              
              {/* Home Node */}
              <circle cx="400" cy="200" r="40" className="fill-white dark:fill-gray-900 stroke-energy-consumption stroke-2" />
              <text x="400" y="190" textAnchor="middle" className="text-sm font-medium">Home</text>
              <text x="400" y="210" textAnchor="middle" className="text-xs">2.1 kW</text>
            </g>
            
            {/* Icons */}
            <g className="energy-node-icons">
              <foreignObject x="170" y="30" width="60" height="60">
                <div className="flex h-full w-full items-center justify-center">
                  <Cloud className="h-6 w-6 text-energy-solar" />
                </div>
              </foreignObject>
              
              <foreignObject x="370" y="90" width="60" height="60">
                <div className="flex h-full w-full items-center justify-center">
                  <Battery className="h-6 w-6 text-energy-battery" />
                </div>
              </foreignObject>
              
              <foreignObject x="570" y="30" width="60" height="60">
                <div className="flex h-full w-full items-center justify-center">
                  <Car className="h-6 w-6 text-energy-ev" />
                </div>
              </foreignObject>
              
              <foreignObject x="170" y="170" width="60" height="60">
                <div className="flex h-full w-full items-center justify-center">
                  <Zap className="h-6 w-6 text-energy-grid" />
                </div>
              </foreignObject>
              
              <foreignObject x="370" y="170" width="60" height="60">
                <div className="flex h-full w-full items-center justify-center">
                  <House className="h-6 w-6 text-energy-consumption" />
                </div>
              </foreignObject>
            </g>
          </svg>
          
          {/* Legend */}
          <div className="absolute bottom-0 right-0 flex items-center space-x-4 text-xs">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-energy-solar mr-1"></div>
              <span>Solar</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-energy-battery mr-1"></div>
              <span>Battery</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-energy-grid mr-1"></div>
              <span>Grid</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-energy-consumption mr-1"></div>
              <span>Consumption</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
