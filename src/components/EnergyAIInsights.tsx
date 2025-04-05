
import { AlertCircle, BrainCircuit, LineChart, Lightbulb, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function EnergyAIInsights() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          AI Insights & Anomaly Detection
        </CardTitle>
        <BrainCircuit className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Anomaly Alert */}
          <Alert variant="destructive" className="bg-destructive/10 text-destructive border-destructive/20">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle className="text-sm font-medium">Anomaly Detected</AlertTitle>
            <AlertDescription className="text-xs">
              Solar production is 32% below expected for current conditions. Possible panel issue or obstruction.
            </AlertDescription>
            <Button variant="outline" size="sm" className="mt-2 h-7 text-xs border-destructive/30 hover:bg-destructive/20">
              Investigate
            </Button>
          </Alert>
          
          {/* Energy Insights */}
          <div className="space-y-3">
            <div className="flex gap-2 items-start">
              <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                <Lightbulb className="h-3.5 w-3.5 text-primary" />
              </div>
              <div>
                <h3 className="text-xs font-medium">Battery Optimization</h3>
                <p className="text-xs text-muted-foreground">Shifting battery charging to off-peak hours has saved $12.40 this month.</p>
              </div>
            </div>
            
            <div className="flex gap-2 items-start">
              <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                <LineChart className="h-3.5 w-3.5 text-primary" />
              </div>
              <div>
                <h3 className="text-xs font-medium">Usage Pattern</h3>
                <p className="text-xs text-muted-foreground">Your household consumption peaks between 6-8PM. Consider scheduling appliances earlier.</p>
              </div>
            </div>
            
            <div className="flex gap-2 items-start">
              <div className="p-1.5 rounded-full bg-green-100 dark:bg-green-900 mt-0.5">
                <TrendingDown className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xs font-medium">Cost Reduction</h3>
                <p className="text-xs text-muted-foreground">AI-optimized scheduling has reduced your electricity costs by 26% compared to last month.</p>
              </div>
            </div>
          </div>
          
          <Separator />
          
          {/* Recommendations */}
          <div>
            <h3 className="text-xs font-medium mb-2">Recommendations</h3>
            <div className="space-y-2">
              <div className="rounded-lg border p-2 text-xs">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Update EV charging schedule</span>
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-muted-foreground text-[10px] mb-1">Charging during predicted solar surplus (10AM-2PM) could increase self-consumption by 18%.</p>
                <Button variant="secondary" size="sm" className="h-6 text-[10px] w-full">
                  Apply Recommendation
                </Button>
              </div>
              
              <div className="rounded-lg border p-2 text-xs">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Enable peak shaving</span>
                  <TrendingDown className="h-3.5 w-3.5 text-energy-saving" />
                </div>
                <p className="text-muted-foreground text-[10px] mb-1">Using battery during peak times (6-8PM) could save approximately $28/month.</p>
                <Button variant="secondary" size="sm" className="h-6 text-[10px] w-full">
                  Apply Recommendation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
