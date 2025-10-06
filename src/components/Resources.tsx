import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Video, BookOpen, Download } from "lucide-react";

const resources = [
  {
    title: "Official Google Workspace Learning Center",
    description: "Comprehensive guides and tutorials from Google",
    icon: BookOpen,
    link: "https://support.google.com/a/users/answer/9259748",
    type: "Guide",
  },
  {
    title: "Google Workspace Training Videos",
    description: "Video tutorials for each Google Workspace app",
    icon: Video,
    link: "https://www.youtube.com/@GoogleWorkspace",
    type: "Videos",
  },
  {
    title: "Zoom Help Center",
    description: "Everything you need to know about using Zoom",
    icon: BookOpen,
    link: "https://support.zoom.us/",
    type: "Guide",
  },
  {
    title: "Keyboard Shortcuts Cheat Sheet",
    description: "Quick reference for Gmail, Drive, Docs, and more",
    icon: FileText,
    link: "https://support.google.com/mail/answer/6594",
    type: "Reference",
  },
];

const migrationSteps = [
  {
    title: "1. Import Your Contacts",
    description: "Export contacts from Outlook and import them to Google Contacts",
    details: [
      "In Outlook: File → Open & Export → Import/Export → Export to CSV",
      "In Google Contacts: Import → Select CSV file",
    ],
  },
  {
    title: "2. Transfer Your Files",
    description: "Move files from OneDrive to Google Drive",
    details: [
      "Download important files from OneDrive",
      "Upload to Google Drive via web or Drive app",
      "Consider using Google Drive for Desktop for sync",
    ],
  },
  {
    title: "3. Set Up Email Forwarding",
    description: "Forward Outlook emails to Gmail during transition",
    details: [
      "In Outlook: Settings → Mail → Forwarding",
      "Enter your Gmail address",
      "Keep Outlook active during transition period",
    ],
  },
  {
    title: "4. Update Calendar",
    description: "Import your Outlook calendar to Google Calendar",
    details: [
      "In Outlook: File → Save Calendar → Save as .ics file",
      "In Google Calendar: Settings → Import & Export → Select file",
    ],
  },
];

const Resources = () => {
  return (
    <section id="resources" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Keyboard Shortcuts Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Keyboard Shortcuts
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Boost your productivity with keyboard shortcuts
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>How to Enable Keyboard Shortcuts</CardTitle>
                <CardDescription>
                  To enable keyboard shortcuts, open any Google app (e.g., Gmail, Drive, Calendar), 
                  go to Settings → Keyboard Shortcuts → Turn on → Save changes.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Gmail Shortcuts</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Compose new email</span>
                      <code className="bg-muted px-2 py-1 rounded">C</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Reply to email</span>
                      <code className="bg-muted px-2 py-1 rounded">R</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Reply all</span>
                      <code className="bg-muted px-2 py-1 rounded">A</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Forward</span>
                      <code className="bg-muted px-2 py-1 rounded">F</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Search</span>
                      <code className="bg-muted px-2 py-1 rounded">/</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Archive</span>
                      <code className="bg-muted px-2 py-1 rounded">E</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Delete</span>
                      <code className="bg-muted px-2 py-1 rounded">#</code>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground">Google Drive & Docs</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Search</span>
                      <code className="bg-muted px-2 py-1 rounded">/</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Bold text (Docs)</span>
                      <code className="bg-muted px-2 py-1 rounded">Ctrl+B</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Italic text (Docs)</span>
                      <code className="bg-muted px-2 py-1 rounded">Ctrl+I</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Underline (Docs)</span>
                      <code className="bg-muted px-2 py-1 rounded">Ctrl+U</code>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Find & Replace (Docs)</span>
                      <code className="bg-muted px-2 py-1 rounded">Ctrl+H</code>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* External Resources */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Additional Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                External guides and tutorials for deeper learning
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <resource.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                          <CardDescription className="mt-1">{resource.description}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        Visit Resource
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Tips */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Productivity Hacks
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get more done with these time-saving tips
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-foreground">Keyboard Shortcuts</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Compose new email (Gmail)</span>
                        <code className="bg-muted px-2 py-1 rounded">C</code>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Reply to email (Gmail)</span>
                        <code className="bg-muted px-2 py-1 rounded">R</code>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Search (Drive/Gmail)</span>
                        <code className="bg-muted px-2 py-1 rounded">/</code>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Bold text (Docs)</span>
                        <code className="bg-muted px-2 py-1 rounded">Ctrl+B</code>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-foreground">Search Operators</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex flex-col gap-1">
                        <code className="bg-muted px-2 py-1 rounded w-fit">from:name@email.com</code>
                        <span className="text-muted-foreground">Find emails from specific sender</span>
                      </li>
                      <li className="flex flex-col gap-1">
                        <code className="bg-muted px-2 py-1 rounded w-fit">has:attachment</code>
                        <span className="text-muted-foreground">Find emails with attachments</span>
                      </li>
                      <li className="flex flex-col gap-1">
                        <code className="bg-muted px-2 py-1 rounded w-fit">after:2024/01/01</code>
                        <span className="text-muted-foreground">Find emails after a date</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
