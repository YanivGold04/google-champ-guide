import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="max-w-2xl w-full animate-scale-in">
        <CardContent className="pt-12 pb-8 text-center">
          <div className="mb-6">
            <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-muted-foreground text-lg">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/progress">
                <BookOpen className="h-4 w-4" />
                View Progress
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { to: "/gmail", label: "Gmail" },
                { to: "/drive", label: "Drive" },
                { to: "/meet", label: "Meet" },
                { to: "/docs", label: "Docs" },
              ].map(({ to, label }) => (
                <Button key={to} asChild variant="ghost" size="sm">
                  <Link to={to}>{label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
