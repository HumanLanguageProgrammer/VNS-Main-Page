import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Let's discuss how context engineering can transform your AI initiatives
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>contact@contextcraft.ai</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>+1 (555) 123-4567</CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-colors">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Available 9AM-5PM EST</CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Schedule a Consultation</h2>
            <p className="text-foreground/90 mb-6">
              Book a free 30-minute consultation to learn how ContextCraft AI can help 
              your organization build robust context engineering capabilities.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-foreground/80">Assess your current AI implementation challenges</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-foreground/80">Explore tailored solutions for your use cases</span>
              </div>
              <div className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-foreground/80">Get expert recommendations on next steps</span>
              </div>
            </div>
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
              Book Your Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
