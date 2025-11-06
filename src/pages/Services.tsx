import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Context Engineering Training",
      description: "Comprehensive workshops and training programs to build your team's context engineering capabilities."
    },
    {
      icon: Users,
      title: "Strategic Consulting",
      description: "Expert guidance on integrating AI and context engineering into your organizational workflows."
    },
    {
      icon: Wrench,
      title: "Implementation Support",
      description: "Hands-on support for implementing context engineering best practices in your projects."
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Comprehensive solutions to build your context engineering capabilities
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:border-primary transition-colors">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Why Choose Us?</h2>
            <ul className="space-y-3 text-foreground/90">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Deep expertise in AI systems and prompt engineering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Proven methodologies that deliver measurable results</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tailored solutions for your specific industry and use cases</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Ongoing support and continuous improvement frameworks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
