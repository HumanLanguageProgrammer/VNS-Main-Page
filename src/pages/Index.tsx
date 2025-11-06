import { NavigationNode } from "@/components/NavigationNode";

const Index = () => {
  return (
    <div className="h-screen w-screen bg-background flex flex-col overflow-hidden">
      {/* Header */}
      <header className="border-b border-border py-4 px-8 animate-fade-in flex-shrink-0">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-1">
            Visitor Navigation System
          </h1>
          <p className="text-sm text-muted-foreground italic cursor-pointer hover:text-primary transition-all inline-block hover:shadow-[0_0_20px_hsl(var(--nav-glow)/0.5)]">
            Need Help? Return to the Arrival Hall
          </p>
        </div>
      </header>

      {/* Main Navigation Grid */}
      <main className="flex-1 flex items-center justify-center px-4 py-4 overflow-hidden">
        <div className="relative w-full h-full max-w-7xl max-h-[calc(100vh-200px)] aspect-[16/10]">
          {/* Connecting Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            style={{ zIndex: 1 }}
          >
            {/* Horizontal line */}
            <line 
              x1="0" 
              y1="50%" 
              x2="100%" 
              y2="50%" 
              stroke="hsl(var(--nav-line))" 
              strokeWidth="2"
            />
            {/* Vertical line */}
            <line 
              x1="50%" 
              y1="0" 
              x2="50%" 
              y2="100%" 
              stroke="hsl(var(--nav-line))" 
              strokeWidth="2"
            />
          </svg>

          {/* Quadrant Navigation Buttons (Behind) */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" style={{ zIndex: 2 }}>
            {/* NW Quadrant */}
            <div className="h-full w-full animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <NavigationNode
                position="nw"
                primaryText="Librarian"
                supportingText="Learn with a"
              />
            </div>

            {/* NE Quadrant */}
            <div className="h-full w-full animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <NavigationNode
                position="ne"
                primaryText="Architect"
                supportingText="Work with an"
              />
            </div>

            {/* SW Quadrant */}
            <div className="h-full w-full animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <NavigationNode
                position="sw"
                primaryText="Philosopher"
                supportingText="Speak with a"
              />
            </div>

            {/* SE Quadrant */}
            <div className="h-full w-full animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <NavigationNode
                position="se"
                primaryText="Navigator"
                supportingText="Strategize with a"
              />
            </div>
          </div>

          {/* Center Node (On Top) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 3 }}>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <NavigationNode
                position="center"
                primaryText="Explore"
                supportingText="Take time to"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-3 px-8 animate-fade-in flex-shrink-0">
        <div className="text-center">
          <p className="text-2xl font-bold text-foreground mb-1">
            ContextCraft AI
          </p>
          <p className="text-sm text-muted-foreground">
            Applied AI in Action
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
