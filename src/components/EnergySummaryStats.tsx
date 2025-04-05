
import { ChartLine, Cloud, Gauge, Settings, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function EnergySummaryStats() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">CO₂ Saved Today</p>
            <h3 className="text-2xl font-bold">8.2 kg</h3>
          </div>
          <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
            <Cloud className="h-5 w-5 text-green-600 dark:text-green-400" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Money Saved</p>
            <h3 className="text-2xl font-bold">$4.35</h3>
          </div>
          <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
            <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Energy Efficiency</p>
            <h3 className="text-2xl font-bold">93%</h3>
          </div>
          <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
            <Gauge className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">System Health</p>
            <h3 className="text-2xl font-bold">Optimal</h3>
          </div>
          <div className="p-2 rounded-full bg-amber-100 dark:bg-amber-900">
            <Settings className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
