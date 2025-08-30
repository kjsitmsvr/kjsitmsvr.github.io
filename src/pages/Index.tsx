import { ServerStatusCard } from "@/components/ServerStatusCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-warning/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-6xl relative z-10">
        <div className="text-center mb-12 space-y-6 animate-slide-up">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary tracking-wide">SYSTEM MONITORING</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              KJSIT-MSVR
            </h1>
            
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent max-w-md mx-auto"></div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced server status monitoring and automated recovery system for institutional infrastructure management.
            </p>
          </div>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
          <ServerStatusCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
