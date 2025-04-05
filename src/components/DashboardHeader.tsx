
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Download, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Energy Dashboard</h2>
        <p className="text-muted-foreground">
          Monitor and control your energy ecosystem
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Tabs defaultValue="live" className="mr-4">
          <TabsList>
            <TabsTrigger value="live" className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-energy-saving animate-pulse-opacity"></span>
              Live
            </TabsTrigger>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Calendar className="h-4 w-4" />
          <span className="hidden sm:inline">Select Date</span>
        </Button>
        
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Export</span>
        </Button>
      </div>
    </div>
  );
}
