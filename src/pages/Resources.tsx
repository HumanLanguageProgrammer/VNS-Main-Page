import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Context Engineering Guide",
      description: "Comprehensive guide to building effective AI prompts and context structures",
      type: "PDF Guide"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step tutorials on implementing context engineering in your workflows",
      type: "Video Series"
    },
    {
      icon: Download,
      title: "Template Library",
      description: "Ready-to-use templates for common context engineering scenarios",
      type: "Download"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Navigation
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Learning Resources</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Expand your knowledge and master context engineering
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <resource.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground">{resource.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Latest Insights</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-1">The 5 Pillars of Effective Context Engineering</h3>
                <p className="text-sm text-muted-foreground">Learn the fundamental principles that make context engineering work</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-1">Case Study: Enterprise AI Implementation</h3>
                <p className="text-sm text-muted-foreground">How a Fortune 500 company improved AI outcomes by 60%</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold text-foreground mb-1">Context Engineering Checklist</h3>
                <p className="text-sm text-muted-foreground">A practical checklist for every AI interaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
