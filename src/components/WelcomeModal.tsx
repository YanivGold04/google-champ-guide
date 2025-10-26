import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket, Target, Trophy, ArrowRight } from "lucide-react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenWelcome", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Your Google Workspace Journey! 🎉
          </DialogTitle>
          <DialogDescription className="text-base pt-4">
            Ready to master Google Workspace? Here's what you'll learn:
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="flex items-start gap-4 animate-fade-in">
            <div className="p-3 rounded-lg bg-primary/10">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Interactive Labs</h3>
              <p className="text-sm text-muted-foreground">
                Practice Gmail, Drive, Meet, Docs, Sheets, Slides, and Calendar with hands-on exercises
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="p-3 rounded-lg bg-secondary/10">
              <Target className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Track Your Progress</h3>
              <p className="text-sm text-muted-foreground">
                Complete labs, earn achievements, and see your learning journey unfold
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="p-3 rounded-lg bg-accent/10">
              <Trophy className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Test Your Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                Take quizzes to validate your understanding and get certified-ready
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg border">
            <p className="text-sm font-medium mb-2">💡 Pro Tips</p>
            <p className="text-sm text-muted-foreground mb-2">
              Use the navigation bar at the top to jump between tools, and check your progress dashboard anytime!
            </p>
            <p className="text-sm text-muted-foreground font-semibold">
              ⌨️ Press "D" during any lab for helpful hints and guidance!
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleClose} className="gap-2">
            Let's Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
