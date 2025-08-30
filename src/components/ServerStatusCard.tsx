import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Server, LogIn, Play, Clock, Copy, Check, Globe, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ServerStatusCard = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually",
        variant: "destructive",
      });
    }
  };

  const steps = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Navigate to play.hosting",
      description: "Open your web browser and go to the hosting platform",
      action: "visit"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Authenticate with credentials",
      description: "Use the provided KJSIT-MSVR account credentials below",
      action: "login"
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Access Server Dashboard",
      description: "Navigate to your server management control panel",
      action: "navigate"
    },
    {
      icon: <Play className="w-5 h-5" />,
      title: "Execute Server Start",
      description: "Click the 'Start Server' button to initiate restart sequence",
      action: "start"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Allow Startup Time",
      description: "Wait 3-5 minutes for complete server initialization",
      action: "wait"
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="border-warning/30 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm shadow-lg animate-glow">
        <CardHeader className="text-center pb-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-warning/20 to-warning/10 border border-warning/30">
              <AlertTriangle className="w-10 h-10 text-warning animate-pulse" />
              <div className="absolute inset-0 rounded-2xl bg-warning/5 blur-xl"></div>
            </div>
            <Badge variant="warning" className="text-base px-6 py-3 font-semibold tracking-wide">
              Server Offline
            </Badge>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
              <span className="text-sm font-mono text-primary font-semibold tracking-wider">KJSIT-MSVR</span>
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1"></div>
            </div>
            
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Server Status Monitor
            </CardTitle>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Your KJSIT-MSVR server instance appears to be offline. Follow the automated restart procedure below to restore service.
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Enhanced Credentials Section */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/50 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Authentication Credentials</h3>
            </div>
            
            <div className="grid gap-4">
              <div className="group">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                  Account Email
                </label>
                <div className="flex items-center justify-between p-4 rounded-lg bg-background/60 border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-base text-foreground font-medium break-all">
                      kjsitmsvr@gmail.com
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("kjsitmsvr@gmail.com", "Email")}
                    className="ml-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    {copiedField === "Email" ? 
                      <Check className="w-4 h-4 text-success" /> : 
                      <Copy className="w-4 h-4" />
                    }
                  </Button>
                </div>
              </div>
              
              <div className="group">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                  Access Password
                </label>
                <div className="flex items-center justify-between p-4 rounded-lg bg-background/60 border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-md">
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-base text-foreground font-medium">
                      msvr@12467
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard("msvr@12467", "Password")}
                    className="ml-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    {copiedField === "Password" ? 
                      <Check className="w-4 h-4 text-success" /> : 
                      <Copy className="w-4 h-4" />
                    }
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Steps Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-success/20">
                <Server className="w-5 h-5 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Server Restart Protocol</h3>
            </div>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="group relative flex items-start gap-5 p-5 rounded-xl hover:bg-accent/30 transition-all duration-300 border border-transparent hover:border-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center font-bold text-primary text-lg shadow-lg">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-background/50 border border-border group-hover:border-primary/30 transition-colors">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                          {index === 0 ? (
                            <a 
                              href="https://play.hosting" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {step.title}
                            </a>
                          ) : (
                            step.title
                          )}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Action Section */}
          <div className="pt-6 border-t border-gradient-to-r from-transparent via-border to-transparent">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Ready to restore KJSIT-MSVR server connectivity?
              </p>
              <Button 
                variant="success" 
                size="lg"
                className="w-full text-lg font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => window.open("https://play.hosting", "_blank")}
              >
                <Globe className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Launch play.hosting Dashboard
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <span>Secure connection • KJSIT-MSVR authorized</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};