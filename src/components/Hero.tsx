import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-slide-up">
            From Microsoft to{" "}
            <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent animate-pulse">
              Google Workspace
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A practical guide with Zoom integration for seamless transition
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover-glow group"
              onClick={() => scrollToSection("comparison")}
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:-translate-y-1 transition-all"
              onClick={() => scrollToSection("quiz")}
            >
              Test Your Knowledge
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="flex items-start gap-3 text-left p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Side-by-Side Comparisons</h3>
                <p className="text-sm text-muted-foreground">Visual guides showing Microsoft vs Google tools</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Practical Tutorials</h3>
                <p className="text-sm text-muted-foreground">Step-by-step guides for common tasks</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Interactive Quiz</h3>
                <p className="text-sm text-muted-foreground">Test your knowledge with real scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
