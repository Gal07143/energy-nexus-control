
import { Battery, Car, Cloud, PlugZap, Router, Server, Settings, Wifi } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface DeviceProps {
  name: string;
  type: string;
  status: "online" | "offline" | "warning";
  icon: React.ReactNode;
  lastSeen?: string;
  model?: string;
}

const devices: DeviceProps[] = [
  {
    name: "Solar Inverter",
    type: "SMA Sunny Boy",
    status: "online",
    icon: <Cloud className="h-4 w-4 text-energy-solar" />,
    lastSeen: "Now",
    model: "SB 5.0-1AV-41"
  },
  {
    name: "Home Battery",
    type: "Tesla Powerwall",
    status: "online",
    icon: <Battery className="h-4 w-4 text-energy-battery" />,
    lastSeen: "Now",
    model: "Powerwall 2"
  },
  {
    name: "EV Charger",
    type: "Wallbox Pulsar Plus",
    status: "online",
    icon: <Car className="h-4 w-4 text-energy-ev" />,
    lastSeen: "Now",
    model: "22kW - 3-phase"
  },
  {
    name: "Smart Meter",
    type: "Landis+Gyr",
    status: "online",
    icon: <PlugZap className="h-4 w-4 text-muted-foreground" />,
    lastSeen: "Now",
    model: "E360"
  },
  {
    name: "Energy Gateway",
    type: "EnergyNexus Hub",
    status: "online",
    icon: <Router className="h-4 w-4 text-primary" />,
    lastSeen: "Now",
    model: "EN-100"
  }
];

const DeviceCard = ({ device }: { device: DeviceProps }) => {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg border">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-secondary flex items-center justify-center">
          {device.icon}
        </div>
        <div>
          <div className="text-sm font-medium">{device.name}</div>
          <div className="text-xs text-muted-foreground">{device.type}</div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <Badge 
          variant="outline" 
          className={cn(
            "text-[10px] px-1.5 py-0 h-5",
            device.status === "online" ? "bg-green-500/10 text-green-500 border-green-500/20" : 
            device.status === "warning" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
            "bg-gray-500/10 text-gray-500 border-gray-500/20"
          )}
        >
          {device.status === "online" && (
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
              Online
            </>
          )}
          {device.status === "warning" && "Warning"}
          {device.status === "offline" && "Offline"}
        </Badge>
        <span className="text-[10px] text-muted-foreground">
          Last seen: {device.lastSeen}
        </span>
      </div>
    </div>
  );
};

export function DeviceIntegration() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Connected Devices
        </CardTitle>
        <div className="flex items-center gap-2">
          <Wifi className="h-3.5 w-3.5 text-green-500 animate-pulse" />
          <span className="text-xs text-muted-foreground">All systems online</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {devices.map((device, i) => (
            <DeviceCard key={i} device={device} />
          ))}
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" size="sm" className="text-xs">
              <Settings className="h-3.5 w-3.5 mr-1.5" />
              Configure
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Server className="h-3.5 w-3.5 mr-1.5" />
              Add Device
            </Button>
          </div>
          
          <div className="mt-3 p-2 rounded-lg bg-secondary/50 text-xs">
            <h4 className="font-medium flex items-center">
              <Wifi className="h-3.5 w-3.5 mr-1.5" />
              Network Status
            </h4>
            <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-1">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Signal:</span>
                <span>Excellent</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Latency:</span>
                <span>24ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Uptime:</span>
                <span>99.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Last sync:</span>
                <span>2 mins ago</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
