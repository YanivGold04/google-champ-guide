import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  HardDrive,
  Video,
  FileText,
  Table,
  Presentation,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePlatformCompletions } from "@/hooks/useLabCompletion";

const tools = [
  {
    microsoft: "Outlook",
    google: "Gmail",
    icon: Mail,
    description: "Email & Communication",
    color: "text-red-500",
    path: "/gmail",
  },
  {
    microsoft: "OneDrive",
    google: "Google Drive",
    icon: HardDrive,
    description: "Cloud Storage",
    color: "text-blue-500",
    path: "/drive",
  },
  {
    microsoft: "Teams",
    google: "Google Meet / Zoom",
    icon: Video,
    description: "Video Conferencing",
    color: "text-purple-500",
    path: "/meet",
  },
  {
    microsoft: "Word",
    google: "Google Docs",
    icon: FileText,
    description: "Document Creation",
    color: "text-blue-600",
    path: "/docs",
  },
  {
    microsoft: "Excel",
    google: "Google Sheets",
    icon: Table,
    description: "Spreadsheets",
    color: "text-green-600",
    path: "/sheets",
  },
  {
    microsoft: "PowerPoint",
    google: "Google Slides",
    icon: Presentation,
    description: "Presentations",
    color: "text-yellow-600",
    path: "/slides",
  },
  {
    microsoft: "Outlook Calendar",
    google: "Google Calendar",
    icon: Calendar,
    description: "Scheduling",
    color: "text-blue-500",
    path: "/calendar",
  },
];

const ComparisonTable = () => {
  const navigate = useNavigate();
  const completions = usePlatformCompletions();

  const handleNavigate = (path: string) => {
    // ✅ Save current scroll position before leaving the page
    sessionStorage.setItem("lastScrollPosition", String(window.scrollY));

    // ✅ Save which tool was clicked (for smoother context restoration)
    sessionStorage.setItem("lastClickedTool", path);

    navigate(path);
  };

  return (
    <section id="comparison" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Microsoft vs. Google Workspace
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's how your familiar Microsoft tools map to Google Workspace
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border cursor-pointer hover:border-primary"
                onClick={() => handleNavigate(tool.path)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                    <div className={`${tool.color} p-3 bg-muted rounded-lg`}>
                      <tool.icon className="h-8 w-8" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-semibold text-lg text-foreground mb-1">
                        {tool.description}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 flex-1 justify-center">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Microsoft</p>
                        <p className="font-semibold text-foreground">
                          {tool.microsoft}
                        </p>
                      </div>

                      <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />

                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Google</p>
                        <p className="font-semibold text-primary">
                          {tool.google}
                        </p>
                      </div>
                    </div>

                    <div className="w-16 h-16 rounded-full border-2 border-muted flex items-center justify-center flex-shrink-0">
                      {completions[tool.path.substring(1)] && (
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
