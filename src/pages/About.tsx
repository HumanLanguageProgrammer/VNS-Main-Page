import { Link } from "react-router-dom";
import { ArrowLeft, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">About ContextCraft AI</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Pioneering the future of AI-enhanced workflows through context engineering
          </p>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Our Vision</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                To become the global leader in context engineering education and implementation, 
                empowering organizations worldwide to harness the full potential of AI through 
                strategic context management.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Our Approach</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed mb-4">
                We believe that effective AI implementation starts with understanding context. 
                Our methodology combines:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Structured frameworks for context design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Best practices from real-world implementations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Continuous learning and adaptation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Measurable outcomes and ROI tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Our Impact</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                Organizations that implement our context engineering methodologies typically see 
                40-60% improvement in AI output quality, reduced iteration cycles, and significantly 
                better team productivity when working with AI systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
