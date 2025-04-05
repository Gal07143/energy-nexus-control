
import { Battery, Car, Cloud, Gauge, House, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export function EnergyOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Current Power
          </CardTitle>
          <Gauge className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4.2 kW</div>
          <div className="text-xs text-muted-foreground">
            <span className="text-energy-saving">↗ 1.2 kW</span> from yesterday
          </div>
          <div className="mt-4 h-1 w-full bg-secondary">
            <div className="h-1 w-2/3 bg-primary rounded-full" />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
            <div>0 kW</div>
            <div>12 kW</div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Solar Production
          </CardTitle>
          <Cloud className="h-4 w-4 text-energy-solar" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.8 kW</div>
          <div className="text-xs text-muted-foreground">
            76% of capacity
          </div>
          <div className="mt-4">
            <Progress value={76} className="h-2" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
            <div className="flex flex-col items-center rounded-lg border p-2">
              <span className="text-muted-foreground">Today</span>
              <span className="font-medium">18.4 kWh</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-2">
              <span className="text-muted-foreground">Month</span>
              <span className="font-medium">423 kWh</span>
            </div>
            <div className="flex flex-col items-center rounded-lg border p-2">
              <span className="text-muted-foreground">Year</span>
              <span className="font-medium">5.2 MWh</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Self-Consumption
          </CardTitle>
          <Zap className="h-4 w-4 text-energy-saving" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89%</div>
          <div className="text-xs text-muted-foreground">
            <span className="text-energy-saving">↗ 4%</span> from last week
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Self-consumed</span>
              <span className="font-medium">3.4 kW</span>
            </div>
            <Progress value={89} className="h-2" />
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between text-xs mb-1">
              <span>Grid export</span>
              <span className="font-medium">0.4 kW</span>
            </div>
            <Progress value={11} className="h-2 bg-secondary" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Home Consumption
          </CardTitle>
          <House className="h-4 w-4 text-energy-consumption" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2.1 kW</div>
          <div className="text-xs text-muted-foreground">
            <span className="text-destructive">↘ 0.3 kW</span> from average
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>HVAC</span>
              <div className="flex items-center">
                <div className="w-16 h-2 rounded-full bg-secondary">
                  <div className={cn("h-full rounded-full bg-energy-consumption")} style={{ width: "45%" }} />
                </div>
                <span className="ml-2 font-medium">0.9 kW</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Lights</span>
              <div className="flex items-center">
                <div className="w-16 h-2 rounded-full bg-secondary">
                  <div className={cn("h-full rounded-full bg-energy-consumption")} style={{ width: "25%" }} />
                </div>
                <span className="ml-2 font-medium">0.5 kW</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span>Kitchen</span>
              <div className="flex items-center">
                <div className="w-16 h-2 rounded-full bg-secondary">
                  <div className={cn("h-full rounded-full bg-energy-consumption")} style={{ width: "30%" }} />
                </div>
                <span className="ml-2 font-medium">0.7 kW</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Battery Storage
          </CardTitle>
          <Battery className="h-4 w-4 text-energy-battery" />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div className="text-2xl font-bold">78%</div>
            <div className="text-right">
              <div className="text-sm font-medium">+1.6 kW</div>
              <div className="text-xs text-muted-foreground">Charging</div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={78} className="h-3" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex flex-col rounded-lg border p-2">
              <span className="text-muted-foreground">Capacity</span>
              <span className="font-medium">10.8 kWh</span>
            </div>
            <div className="flex flex-col rounded-lg border p-2">
              <span className="text-muted-foreground">Available</span>
              <span className="font-medium">8.4 kWh</span>
            </div>
            <div className="flex flex-col rounded-lg border p-2">
              <span className="text-muted-foreground">Time to full</span>
              <span className="font-medium">~1.5 hours</span>
            </div>
            <div className="flex flex-col rounded-lg border p-2">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-energy-saving">Optimal</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            EV Charging
          </CardTitle>
          <Car className="h-4 w-4 text-energy-ev" />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div className="text-2xl font-bold">Connected</div>
            <div className="text-right">
              <div className="text-sm font-medium">0.0 kW</div>
              <div className="text-xs text-muted-foreground">Standby</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              Tesla Model 3
            </div>
            <div className="text-xs font-medium">
              65% charged
            </div>
          </div>
          <div className="mt-2">
            <Progress value={65} className="h-2" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <button className="rounded-lg border p-2 text-xs hover:bg-secondary transition-colors">
              <div className="font-medium">Eco</div>
              <div className="text-muted-foreground text-[10px]">Solar Only</div>
            </button>
            <button className="rounded-lg border p-2 text-xs hover:bg-secondary transition-colors">
              <div className="font-medium">Smart</div>
              <div className="text-muted-foreground text-[10px]">AI Optimized</div>
            </button>
            <button className="rounded-lg border p-2 text-xs hover:bg-secondary transition-colors">
              <div className="font-medium">Fast</div>
              <div className="text-muted-foreground text-[10px]">Max Power</div>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
