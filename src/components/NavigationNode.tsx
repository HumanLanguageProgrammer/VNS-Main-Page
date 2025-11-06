import { cn } from "@/lib/utils";

interface NavigationNodeProps {
  primaryText: string;
  supportingText: string;
  position: "center" | "nw" | "ne" | "sw" | "se";
  className?: string;
}

export const NavigationNode = ({ 
  primaryText, 
  supportingText, 
  position,
  className 
}: NavigationNodeProps) => {
  const isCenter = position === "center";
  
  const positionStyles = {
    center: "w-64 h-40 rounded-full border-2 border-foreground/30 bg-nav-node hover:bg-nav-node-hover hover:border-primary hover:shadow-[0_0_30px_hsl(var(--nav-glow)/0.4)]",
    nw: "w-full h-full rounded-none bg-nav-node/50 hover:bg-nav-node-hover border-r border-b border-foreground/10 hover:border-primary/60 hover:ring-2 hover:ring-primary/60 hover:shadow-[0_0_60px_hsl(var(--nav-glow)/0.35),inset_0_0_60px_hsl(var(--nav-glow)/0.2)]",
    ne: "w-full h-full rounded-none bg-nav-node/50 hover:bg-nav-node-hover border-l border-b border-foreground/10 hover:border-primary/60 hover:ring-2 hover:ring-primary/60 hover:shadow-[0_0_60px_hsl(var(--nav-glow)/0.35),inset_0_0_60px_hsl(var(--nav-glow)/0.2)]",
    sw: "w-full h-full rounded-none bg-nav-node/50 hover:bg-nav-node-hover border-r border-t border-foreground/10 hover:border-primary/60 hover:ring-2 hover:ring-primary/60 hover:shadow-[0_0_60px_hsl(var(--nav-glow)/0.35),inset_0_0_60px_hsl(var(--nav-glow)/0.2)]",
    se: "w-full h-full rounded-none bg-nav-node/50 hover:bg-nav-node-hover border-l border-t border-foreground/10 hover:border-primary/60 hover:ring-2 hover:ring-primary/60 hover:shadow-[0_0_60px_hsl(var(--nav-glow)/0.35),inset_0_0_60px_hsl(var(--nav-glow)/0.2)]",
  };
  
  return (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col items-center justify-center cursor-pointer transition-all duration-300 will-change-transform will-change-shadow",
        // Radial glow overlay on hover
        "after:absolute after:inset-0 after:content-[''] after:z-0 after:opacity-0 after:transition-opacity after:duration-300 after:bg-[radial-gradient(ellipse_at_center,hsl(var(--nav-glow)/0.50)_0%,transparent_70%)] hover:after:opacity-100",
        positionStyles[position],
        className
      )}
    >
      <span className="relative z-10 text-sm text-muted-foreground mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
        {supportingText}
      </span>
      <span className="relative z-10 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
        {primaryText}
      </span>
    </div>
  );
};
