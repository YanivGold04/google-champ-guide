import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, HardDrive, Video, FileText, Table, Presentation, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { usePlatformCompletions } from "@/hooks/useLabCompletion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const guides = [
  {
    id: "gmail",
    title: "Gmail",
    icon: Mail,
    comparison: "Outlook → Gmail",
    keyDifferences: [
      "Labels instead of folders - emails can have multiple labels",
      "Conversation view groups related emails together",
      "Powerful search with operators (from:, has:attachment, etc.)",
      "Smart filters and categories (Primary, Social, Promotions)",
    ],
    tips: [
      "Use keyboard shortcuts: 'c' for compose, 'r' for reply",
      "Set up filters to automatically label and organize emails",
      "Use the search bar with operators for quick email retrieval",
      "Enable 'Undo Send' in settings for a safety net",
    ],
  },
  {
    id: "drive",
    title: "Google Drive",
    icon: HardDrive,
    comparison: "OneDrive → Google Drive",
    keyDifferences: [
      "Seamless integration with all Google Workspace apps",
      "Real-time collaboration on documents",
      "Shared drives for team collaboration",
      "Version history automatically saved for all files",
    ],
    tips: [
      "Right-click files to share and set permissions easily",
      "Use 'Shared with me' to find files others shared with you",
      "Enable offline access for important files",
      "Organize with folders and use colors to categorize",
    ],
  },
  {
    id: "meet",
    title: "Google Meet & Zoom",
    icon: Video,
    comparison: "Teams → Google Meet / Zoom",
    keyDifferences: [
      "Google Meet integrates directly with Calendar",
      "Zoom offers more advanced features for webinars",
      "Both support screen sharing and breakout rooms",
      "Meet is browser-based, Zoom has desktop app",
    ],
    tips: [
      "Schedule Meet calls directly from Google Calendar",
      "Use Zoom for large webinars and training sessions",
      "Enable captions for better accessibility",
      "Record meetings for later reference (check permissions)",
    ],
  },
  {
    id: "docs",
    title: "Google Docs",
    icon: FileText,
    comparison: "Word → Google Docs",
    keyDifferences: [
      "Real-time collaboration with multiple users",
      "Auto-save - no need to manually save documents",
      "Comment and suggestion mode for feedback",
      "Version history tracks all changes automatically",
    ],
    tips: [
      "Use '@' to mention collaborators in comments",
      "Explore add-ons for enhanced functionality",
      "Use 'Suggesting' mode instead of Track Changes",
      "Access version history: File → Version history",
    ],
  },
  {
    id: "sheets",
    title: "Google Sheets",
    icon: Table,
    comparison: "Excel → Google Sheets",
    keyDifferences: [
      "Cloud-based with real-time collaboration",
      "Most Excel formulas work in Sheets",
      "Built-in data visualization tools",
      "IMPORTRANGE function to link data across sheets",
    ],
    tips: [
      "Use Explore feature for automatic insights",
      "Protect ranges to prevent accidental edits",
      "Learn QUERY function - it's powerful for data analysis",
      "Use conditional formatting for visual data insights",
    ],
  },
  {
    id: "slides",
    title: "Google Slides",
    icon: Presentation,
    comparison: "PowerPoint → Google Slides",
    keyDifferences: [
      "Collaborate on presentations in real-time",
      "Present from anywhere with a browser",
      "Import PowerPoint files easily",
      "Q&A feature for audience questions",
    ],
    tips: [
      "Use master slides for consistent branding",
      "Explore templates in the template gallery",
      "Enable presenter view for notes during presentation",
      "Share with 'Anyone with link' for easy access",
    ],
  },
  {
    id: "calendar",
    title: "Google Calendar",
    icon: Calendar,
    comparison: "Outlook Calendar → Google Calendar",
    keyDifferences: [
      "Easy integration with Meet and Zoom",
      "Multiple calendars with different colors",
      "Find a time feature for group scheduling",
      "World clock shows time zones",
    ],
    tips: [
      "Create separate calendars for different projects",
      "Set working hours to help others schedule appropriately",
      "Use 'Find a time' when scheduling with multiple people",
      "Enable desktop notifications for upcoming events",
    ],
  },
];

const ToolGuides = () => {
  const completions = usePlatformCompletions();
  const navigate = useNavigate();

  const navigateToPage = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <section id="guides" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tool-by-Tool Guides
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed comparisons and practical tips for each Google Workspace tool
            </p>
          </div>

          <Tabs defaultValue="gmail" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 h-auto bg-background p-2">
              {guides.map((guide) => (
                <TabsTrigger
                  key={guide.id}
                  value={guide.id}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground relative"
                >
                  <guide.icon className="h-5 w-5" />
                  <span className="text-xs">{guide.title}</span>
                  {completions[guide.id] && (
                    <CheckCircle2 className="h-4 w-4 text-green-500 absolute -top-1 -right-1" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {guides.map((guide) => (
              <TabsContent key={guide.id} value={guide.id} className="mt-6 animate-fade-in">
                <Card className="border-2 hover-lift bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <guide.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{guide.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {guide.comparison}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Key Differences
                      </h3>
                      <ul className="space-y-2">
                        {guide.keyDifferences.map((diff, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span className="text-muted-foreground">{diff}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        Quick Tips
                      </h3>
                      <ul className="space-y-2">
                        {guide.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-secondary font-bold mt-1">→</span>
                            <span className="text-muted-foreground">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <Button 
                        onClick={() => navigateToPage(guide.id)}
                        className="w-full hover:-translate-y-0.5 transition-all group"
                      >
                        Go to {guide.title} Detailed Guide
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ToolGuides;
