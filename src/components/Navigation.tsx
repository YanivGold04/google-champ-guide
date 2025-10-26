import { Link, useLocation } from "react-router-dom";
import { Home, Mail, HardDrive, Video, FileText, Table, Presentation, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/progress", label: "Progress", icon: Award },
    { path: "/gmail", label: "Gmail", icon: Mail },
    { path: "/drive", label: "Drive", icon: HardDrive },
    { path: "/meet", label: "Meet", icon: Video },
    { path: "/docs", label: "Docs", icon: FileText },
    { path: "/sheets", label: "Sheets", icon: Table },
    { path: "/slides", label: "Slides", icon: Presentation },
    { path: "/calendar", label: "Calendar", icon: Calendar },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 font-semibold text-lg hover:text-primary transition-colors">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Microsoft → Google
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Button
                key={path}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "transition-all",
                  location.pathname === path && "bg-primary/10 text-primary font-medium"
                )}
              >
                <Link to={path}>
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="outline" size="sm" asChild>
              <Link to="/progress">
                <Award className="h-4 w-4 mr-2" />
                Progress
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
