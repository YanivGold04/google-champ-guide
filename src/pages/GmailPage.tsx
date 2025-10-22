import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import LabCompletionCheck from "@/components/LabCompletionCheck";
import { useLabCompletion } from "@/hooks/useLabCompletion";
import { CoordinatePicker } from "@/components/CoordinatePicker";

const GmailPage = () => {
  const navigate = useNavigate();
  const { completedLabs, isComplete, markLabComplete, markPlatformComplete } = useLabCompletion("gmail");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let scrollY = 0;

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "lab-complete" && event.data?.lab) {
        scrollY = window.scrollY;
        const labName = event.data.lab;
        
        // Map the incoming lab names to our internal format if needed
        const labMap: Record<string, string> = {
          "gmail-compose": "compose",
          "gmail-trash": "trash",
          "gmail-search": "search"
        };
        
        const mappedLab = labMap[labName] || labName;
        markLabComplete(mappedLab);
        
        setTimeout(() => {
          window.scrollTo(0, scrollY);
        }, 150);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [markLabComplete]);

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
                <Button 
                  variant="link" 
                  className="mt-4 px-0"
                  onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox', '_blank')}
                >
                  Open Gmail →
                </Button>
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
                  <div className="rounded-2xl overflow-hidden bg-white">
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
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("compose") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("compose") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-white">
                      <iframe
                        src="/images/gmail/compose/compose_lab.html"
                        className="w-full h-[650px]"
                        title="Gmail Compose Lab"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          borderRadius: "1rem",
                        }}
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
                  <div className="rounded-2xl overflow-hidden bg-white">
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
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("trash") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("trash") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-white">
                      <iframe
                        src="/images/gmail/trash/trash_lab.html"
                        className="w-full h-[650px]"
                        title="Gmail Trash Lab"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          borderRadius: "1rem",
                        }}
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
                  <div className="rounded-2xl overflow-hidden bg-white">
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
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("search") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("search") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-white">
                      <iframe
                        src="/images/gmail/search/search_lab.html"
                        className="w-full h-[650px]"
                        title="Gmail Search Lab"
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          borderRadius: "1rem",
                        }}
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
              labNames={["compose", "trash", "search"]}
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
                    <li>• Enable "Undo Send" (5–30 seconds)</li>
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
      <CoordinatePicker />
    </div>
  );
};

export default GmailPage;
