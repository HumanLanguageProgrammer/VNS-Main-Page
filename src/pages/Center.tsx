import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Center = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Navigation
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Welcome to ContextCraft AI</h1>
          </div>
          
          <div className="space-y-6 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Welcome to the hub of Context Engineering excellence. We help organizations 
              unlock the full potential of AI through strategic context management and engineering.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="leading-relaxed">
                To empower organizations with the knowledge, tools, and methodologies needed 
                to effectively work with AI systems through superior context engineering practices.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Why Context Engineering?</h2>
              <p className="leading-relaxed mb-4">
                In the age of AI, the quality of your outputs is directly proportional to the 
                quality of your inputs. Context Engineering is the discipline of crafting, 
                managing, and optimizing the context you provide to AI systems.
              </p>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Better AI responses through structured context</li>
                <li>Consistent and reliable outcomes</li>
                <li>Reduced hallucinations and errors</li>
                <li>Scalable AI integration across your organization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
