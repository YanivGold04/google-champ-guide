import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import LabCompletionCheck from "@/components/LabCompletionCheck";
import { useLabCompletion } from "@/hooks/useLabCompletion";

const GmailPage = () => {
  const navigate = useNavigate();
  const { completedLabs, isComplete, markLabComplete, markPlatformComplete } = useLabCompletion('gmail');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Listen for lab completion messages from iframes
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'lab-complete') {
        markLabComplete(event.data.lab);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <div className="flex items-center gap-4">
              <Mail className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">Gmail</h1>
                <p className="text-xl text-muted-foreground">Outlook → Gmail</p>
              </div>
            </div>

            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle>What is Gmail?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gmail is Google's email service that offers a clean, powerful interface with advanced search capabilities, 
                  conversation threading, and seamless integration with other Google Workspace tools. Unlike Outlook's folder 
                  structure, Gmail uses labels that can be applied to multiple emails, making organization more flexible.
                </p>
              </CardContent>
            </Card>

            {/* Interactive Labs */}
            <div className="space-y-8">
              {/* Compose Email */}
              <Card>
                <CardHeader>
                  <CardTitle>Composing and Sending Emails</CardTitle>
                  <CardDescription>Learn how to compose and send an email in Gmail</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg overflow-hidden border bg-white">
                    <video
                      src="/images/gmail/compose/compose.mp4"
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-lg overflow-hidden border shadow-sm bg-white">
                      <iframe 
                        src="/images/gmail/compose/compose_lab.html"
                        className="w-full aspect-video"
                        title="Gmail Compose Lab"
                        style={{ border: 'none' }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trash Email */}
              <Card>
                <CardHeader>
                  <CardTitle>Moving Emails to Trash</CardTitle>
                  <CardDescription>Learn how to delete emails and manage your trash folder</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg overflow-hidden border bg-white">
                    <video
                      src="/images/gmail/trash/trash.mp4"
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-lg overflow-hidden border shadow-sm bg-white">
                      <iframe 
                        src="/images/gmail/trash/trash_lab.html"
                        className="w-full aspect-video"
                        title="Gmail Trash Lab"
                        style={{ border: 'none' }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Search Email */}
              <Card>
                <CardHeader>
                  <CardTitle>Searching Emails</CardTitle>
                  <CardDescription>Learn how to use Gmail's powerful search features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg overflow-hidden border bg-white">
                    <video
                      src="/images/gmail/search/search.mp4"
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-lg overflow-hidden border shadow-sm bg-white">
                      <iframe 
                        src="/images/gmail/search/search_lab.html"
                        className="w-full aspect-video"
                        title="Gmail Search Lab"
                        style={{ border: 'none' }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lab Completion Check */}
            <LabCompletionCheck
              platform="Gmail"
              completedLabs={completedLabs}
              isComplete={isComplete}
              onComplete={markPlatformComplete}
            />

            {/* Step-by-Step Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Compose and Send an Email
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the "Compose" button in the top-left corner</li>
                    <li>Enter recipient email address in the "To" field</li>
                    <li>Add a subject line</li>
                    <li>Type your message in the composition area</li>
                    <li>Click "Send" or press Ctrl+Enter (Cmd+Enter on Mac)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Create Labels (Similar to Outlook Folders)
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click on "More" in the left sidebar</li>
                    <li>Select "Create new label"</li>
                    <li>Name your label and click "Create"</li>
                    <li>Drag emails to labels or use the label icon to tag emails</li>
                    <li>One email can have multiple labels (unlike folders)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Set Up Filters (Similar to Outlook Rules)
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the search options icon in the search bar</li>
                    <li>Enter your filter criteria (from, subject, keywords, etc.)</li>
                    <li>Click "Create filter"</li>
                    <li>Choose actions (apply label, mark as read, star, etc.)</li>
                    <li>Click "Create filter" to save</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Add a Signature
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the gear icon and select "See all settings"</li>
                    <li>Scroll down to the "Signature" section</li>
                    <li>Click "Create new" to add a signature</li>
                    <li>Format your signature with text, links, and images</li>
                    <li>Scroll down and click "Save Changes"</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Quick Switch Guide */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Switch Guide: Outlook vs Gmail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Microsoft Outlook</th>
                        <th className="text-left py-3 px-4 font-semibold">Google Gmail</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-3 px-4">Folders</td>
                        <td className="py-3 px-4">Labels (emails can have multiple labels)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Rules</td>
                        <td className="py-3 px-4">Filters</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Categories</td>
                        <td className="py-3 px-4">Primary/Social/Promotions tabs</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Search folders</td>
                        <td className="py-3 px-4">Search operators (from:, has:attachment)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Quick Steps</td>
                        <td className="py-3 px-4">Keyboard shortcuts ('c' for compose)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Focused Inbox</td>
                        <td className="py-3 px-4">Priority Inbox</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Tips & Tricks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Keyboard Shortcuts</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 'c' - Compose new email</li>
                    <li>• 'r' - Reply to email</li>
                    <li>• 'a' - Reply all</li>
                    <li>• 'f' - Forward email</li>
                    <li>• '/' - Search emails</li>
                    <li>• 'e' - Archive email</li>
                    <li>• '#' - Delete email</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Search Operators</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• from:name - Find emails from someone</li>
                    <li>• to:name - Find emails to someone</li>
                    <li>• has:attachment - Find emails with attachments</li>
                    <li>• is:unread - Find unread emails</li>
                    <li>• after:2024/01/01 - Find emails after a date</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Enable "Undo Send" (5-30 seconds)</li>
                    <li>• Use filters to auto-organize</li>
                    <li>• Archive instead of delete</li>
                    <li>• Use templates for common replies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GmailPage;
