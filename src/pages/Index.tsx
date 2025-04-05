
import { EnergyAppSidebar } from "@/components/EnergyAppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { EnergySummaryStats } from "@/components/EnergySummaryStats";
import { EnergyFlowDiagram } from "@/components/EnergyFlowDiagram";
import { EnergyOverview } from "@/components/EnergyOverview";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <EnergyAppSidebar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="container mx-auto">
            <div className="flex justify-end mb-4 md:hidden">
              <SidebarTrigger />
            </div>
            <div className="space-y-6">
              <DashboardHeader />
              <EnergySummaryStats />
              <EnergyFlowDiagram />
              <EnergyOverview />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
