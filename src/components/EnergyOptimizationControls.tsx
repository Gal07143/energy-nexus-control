
import { 
  Battery, 
  Car, 
  DollarSign, 
  Leaf, 
  Shield, 
  Zap 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export function EnergyOptimizationControls() {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Energy Optimization Controls
        </CardTitle>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">AI-powered management</span>
          <Zap className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Battery Optimization Mode */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="flex items-center text-sm font-medium">
                <Battery className="h-4 w-4 mr-2" /> 
                Battery Strategy
              </h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <span className="sr-only">Info</span>
                    <Shield className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 text-xs">
                  <div className="space-y-2">
                    <h4 className="font-medium">About Battery Strategies:</h4>
                    <p><span className="font-medium">Self-Consumption:</span> Prioritizes using your own solar energy.</p>
                    <p><span className="font-medium">Time-of-Use:</span> Charges when electricity is cheap, discharges when expensive.</p>
                    <p><span className="font-medium">Backup Ready:</span> Maintains higher charge for emergency backup power.</p>
                    <p><span className="font-medium">Grid Support:</span> Participates in grid services for financial incentives.</p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Select defaultValue="self_consumption">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select strategy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self_consumption">Self-Consumption Maximization</SelectItem>
                <SelectItem value="time_of_use">Time-of-Use Optimization</SelectItem>
                <SelectItem value="backup_ready">Backup Ready Mode</SelectItem>
                <SelectItem value="grid_support">Grid Support</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs">Reserve capacity</span>
                <span className="text-xs font-medium">30%</span>
              </div>
              <Slider defaultValue={[30]} max={100} step={5} />
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <DollarSign className="h-3 w-3 mr-1" />
                  <span>Priority charging at low rates</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
          
          {/* EV Charging Optimization */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="flex items-center text-sm font-medium">
                <Car className="h-4 w-4 mr-2" /> 
                EV Charging Mode
              </h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <span className="sr-only">Info</span>
                    <Shield className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 text-xs">
                  <div className="space-y-2">
                    <h4 className="font-medium">About EV Charging Modes:</h4>
                    <p><span className="font-medium">Eco:</span> Mostly charges from solar, may take longer.</p>
                    <p><span className="font-medium">Smart:</span> AI balances speed, cost, and renewables.</p>
                    <p><span className="font-medium">Fast:</span> Charges at maximum power without delay.</p>
                    <p><span className="font-medium">Scheduled:</span> Follows a specific time schedule you set.</p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            <Select defaultValue="smart">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eco">Eco (Solar Priority)</SelectItem>
                <SelectItem value="smart">Smart (AI Optimized)</SelectItem>
                <SelectItem value="fast">Fast Charge</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">Target charge level</span>
                <span className="text-xs font-medium">80%</span>
              </div>
              <Slider defaultValue={[80]} max={100} step={5} />
              
              <div className="mt-3 p-2 rounded bg-secondary text-xs">
                <div className="flex justify-between mb-1">
                  <span>Ready by:</span>
                  <span className="font-medium">7:30 AM tomorrow</span>
                </div>
                <div className="flex justify-between">
                  <span>Optimal charging:</span>
                  <span className="font-medium">10:00 PM - 6:00 AM</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Optimization Goals */}
          <div className="rounded-lg border p-4">
            <h3 className="flex items-center text-sm font-medium mb-3">
              <Leaf className="h-4 w-4 mr-2" /> 
              Optimization Goals
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs">Cost Savings</span>
                <div className="flex items-center">
                  <Slider 
                    defaultValue={[70]} 
                    max={100} 
                    step={10} 
                    className="w-24 mr-2" 
                  />
                  <span className="text-xs font-medium">70%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs">CO₂ Reduction</span>
                <div className="flex items-center">
                  <Slider 
                    defaultValue={[30]} 
                    max={100} 
                    step={10} 
                    className="w-24 mr-2" 
                  />
                  <span className="text-xs font-medium">30%</span>
                </div>
              </div>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    <span>Participate in demand response</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <Zap className="h-3 w-3 mr-1" />
                    <span>Enable peak shaving</span>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <div className="flex justify-center mt-3">
                <Button size="sm" className="w-full">Apply Optimization Settings</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 border rounded-lg bg-muted/30">
          <div className="flex items-center">
            <div className="flex-shrink-0 p-1.5 rounded-full bg-primary/10 mr-3">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium">AI Recommendation</h4>
              <p className="text-xs text-muted-foreground">Based on your usage patterns and weather forecast, we recommend charging your EV tonight during off-peak hours (12 AM - 5 AM) to save approximately $3.20.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
