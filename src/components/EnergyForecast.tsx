
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Clock, CloudSun, TrendingUp } from "lucide-react";

const forecastData = {
  solar: [
    { time: '00:00', power: 0 },
    { time: '03:00', power: 0 },
    { time: '06:00', power: 0.2 },
    { time: '09:00', power: 2.1 },
    { time: '12:00', power: 3.8 },
    { time: '15:00', power: 2.9 },
    { time: '18:00', power: 0.6 },
    { time: '21:00', power: 0 },
  ],
  consumption: [
    { time: '00:00', power: 0.8 },
    { time: '03:00', power: 0.7 },
    { time: '06:00', power: 1.2 },
    { time: '09:00', power: 1.5 },
    { time: '12:00', power: 2.1 },
    { time: '15:00', power: 2.4 },
    { time: '18:00', power: 3.2 },
    { time: '21:00', power: 2.1 },
  ],
  price: [
    { time: '00:00', price: 0.08 },
    { time: '03:00', price: 0.07 },
    { time: '06:00', price: 0.09 },
    { time: '09:00', price: 0.12 },
    { time: '12:00', price: 0.15 },
    { time: '15:00', price: 0.18 },
    { time: '18:00', price: 0.22 },
    { time: '21:00', price: 0.17 },
  ]
};

const energyConfig = {
  solar: {
    label: "Solar",
    theme: {
      light: "#f97316",
      dark: "#f97316",
    },
  },
  consumption: {
    label: "Consumption",
    theme: {
      light: "#64748b",
      dark: "#94a3b8",
    },
  },
  grid: {
    label: "Grid Import",
    theme: {
      light: "#8b5cf6",
      dark: "#a78bfa",
    },
  },
  price: {
    label: "Price ($/kWh)",
    theme: {
      light: "#10b981",
      dark: "#34d399",
    },
  },
};

export function EnergyForecast() {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Energy Forecast
        </CardTitle>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">AI-powered predictions</span>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="power" className="space-y-4">
          <TabsList>
            <TabsTrigger value="power">Power Forecast</TabsTrigger>
            <TabsTrigger value="price">Price Forecast</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>
          
          <TabsContent value="power" className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>Next 24 hours prediction</span>
              </div>
              <div className="text-xs text-muted-foreground flex items-center ml-4">
                <CloudSun className="h-3 w-3 mr-1" />
                <span>Based on weather forecast and usage patterns</span>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ChartContainer config={energyConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[...forecastData.solar.map((item, index) => ({
                      time: item.time,
                      solar: item.power,
                      consumption: forecastData.consumption[index].power,
                      grid: Math.max(0, forecastData.consumption[index].power - item.power)
                    }))]}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="time" tickLine={false} axisLine={false} />
                    <YAxis 
                      tickLine={false} 
                      axisLine={false} 
                      tickFormatter={(value) => `${value} kW`} 
                    />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="solar" 
                      name="solar"
                      stackId="1" 
                      stroke="var(--color-solar)" 
                      fill="var(--color-solar)" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="grid"
                      name="grid" 
                      stackId="2" 
                      stroke="var(--color-grid)" 
                      fill="var(--color-grid)" 
                      fillOpacity={0.6}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="consumption" 
                      name="consumption"
                      stroke="var(--color-consumption)" 
                      fill="transparent"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex flex-col items-center rounded-lg border p-2">
                <span className="text-muted-foreground">Forecast Solar</span>
                <span className="font-medium">22.7 kWh</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-2">
                <span className="text-muted-foreground">Forecast Consumption</span>
                <span className="font-medium">31.4 kWh</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-2">
                <span className="text-muted-foreground">Grid Import</span>
                <span className="font-medium">8.7 kWh</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="price" className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="text-xs text-muted-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>Dynamic electricity pricing forecast</span>
              </div>
            </div>
            
            <div className="h-[300px] w-full">
              <ChartContainer config={energyConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={[...forecastData.price.map(item => ({
                      time: item.time,
                      price: item.price
                    }))]}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="time" tickLine={false} axisLine={false} />
                    <YAxis 
                      tickLine={false} 
                      axisLine={false} 
                      tickFormatter={(value) => `$${value.toFixed(2)}`} 
                    />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      name="price"
                      stroke="var(--color-price)" 
                      fill="var(--color-price)" 
                      fillOpacity={0.3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex flex-col items-center rounded-lg border p-2 bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-900">
                <span className="text-muted-foreground">Peak Hours</span>
                <span className="font-medium">17:00 - 19:00</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-2 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-900">
                <span className="text-muted-foreground">Cheapest Hours</span>
                <span className="font-medium">01:00 - 05:00</span>
              </div>
              <div className="flex flex-col items-center rounded-lg border p-2">
                <span className="text-muted-foreground">Avg. Price Today</span>
                <span className="font-medium">$0.14/kWh</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="optimization" className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>AI recommends optimal energy usage schedule</span>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h4 className="text-sm font-medium mb-3">Battery Charging Schedule</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 02:00 - 05:00</span>
                    <span className="font-medium text-green-600 dark:text-green-400">Grid charging (low rate)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 09:00 - 15:00</span>
                    <span className="font-medium text-amber-600 dark:text-amber-400">Solar charging</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 17:00 - 19:00</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">Discharge (peak shaving)</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <h4 className="text-sm font-medium mb-3">EV Charging Schedule</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 10:00 - 14:00</span>
                    <span className="font-medium text-amber-600 dark:text-amber-400">Solar charging (2.2 kW)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> 02:00 - 05:00</span>
                    <span className="font-medium text-green-600 dark:text-green-400">Grid charging (low rate)</span>
                  </div>
                  <div className="text-xs mt-3 pt-3 border-t">
                    <div className="flex justify-between mb-1">
                      <span>Expected savings:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">$2.40 / day</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CO₂ reduction:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">1.8 kg / day</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
