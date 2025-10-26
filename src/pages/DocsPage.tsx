import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import LabCompletionCheck from "@/components/LabCompletionCheck";
import { useLabCompletion } from "@/hooks/useLabCompletion";

const DocsPage = () => {
  const navigate = useNavigate();
  const { completedLabs, isComplete, markLabComplete, markPlatformComplete } = useLabCompletion("docs");

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
          "docs-edit": "Edit_text",
          "docs-new": "New_docs",
          "docs-share": "Share_comment"
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
      <Navigation />
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
            <div className="flex items-center gap-4">
              <FileText className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">Google Docs</h1>
                <p className="text-xl text-muted-foreground">Word → Google Docs</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What is Google Docs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Google Docs is a cloud-based word processor that enables real-time collaboration. Multiple users can edit 
                  the same document simultaneously, with changes appearing instantly. Documents are auto-saved, and version 
                  history tracks all changes. Google Docs works in any browser and integrates seamlessly with Google Drive.
                </p>
                <Button 
                  variant="link" 
                  className="mt-4 px-0"
                  onClick={() => window.open('https://docs.google.com/document/u/0/', '_blank')}
                >
                  Open Google Docs →
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Labs */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Lab 1: Creating New Docs</CardTitle>
                  <CardDescription>Learn how to create new documents from templates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Docs/New_docs/new_docs.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("New_docs") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("New_docs") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Docs/New_docs/New_Docs_lab.html"
                        className="w-full h-[650px] border-0"
                        title="Creating New Docs Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 2: Editing Text</CardTitle>
                  <CardDescription>Learn how to create and format documents in Google Docs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Docs/Edit_text/edit_text.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("Edit_text") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("Edit_text") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Docs/Edit_text/Docs_Create_Lab.html"
                        className="w-full h-[650px] border-0"
                        title="Editing Text Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 3: Sharing and Commenting</CardTitle>
                  <CardDescription>Learn how to share documents and add comments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Docs/Share_comment/share_comment.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("Share_comment") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("Share_comment") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Docs/Share_comment/Share_comment_lab.html"
                        className="w-full h-[650px] border-0"
                        title="Sharing and Commenting Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lab Completion Check */}
            <LabCompletionCheck
              platform="Docs"
              completedLabs={completedLabs}
              isComplete={isComplete}
              onComplete={markPlatformComplete}
              labNames={["New_docs", "Edit_text", "Share_comment"]}
            />

            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Create a New Document
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Go to docs.google.com or open Google Drive</li>
                    <li>Click the "+ " button or "Blank" template</li>
                    <li>A new untitled document opens automatically</li>
                    <li>Click "Untitled document" at the top to rename</li>
                    <li>Start typing - changes are saved automatically</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Share and Collaborate
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the "Share" button in the top-right corner</li>
                    <li>Enter email addresses of collaborators</li>
                    <li>Choose permission level: Viewer, Commenter, or Editor</li>
                    <li>Add a message (optional) and click "Send"</li>
                    <li>Collaborators receive an email with a link to the document</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Use Suggesting Mode (Like Track Changes)
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the pencil icon in the top-right (Edit mode)</li>
                    <li>Select "Suggesting" from the dropdown</li>
                    <li>Any edits you make appear as suggestions</li>
                    <li>Others can accept or reject your suggestions</li>
                    <li>Comments and suggestions are preserved in version history</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Add Comments
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Highlight the text you want to comment on</li>
                    <li>Click the "+" (Add comment) icon or press Ctrl+Alt+M</li>
                    <li>Type your comment in the box</li>
                    <li>Use '@' to mention specific people</li>
                    <li>Click "Comment" to post - mentioned people get notified</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to View Version History
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click "File" in the menu</li>
                    <li>Select "Version history" → "See version history"</li>
                    <li>A timeline appears on the right showing all changes</li>
                    <li>Click on any version to preview it</li>
                    <li>Click "Restore this version" if you want to revert</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Switch Guide: Word vs Google Docs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Microsoft Word</th>
                        <th className="text-left py-3 px-4 font-semibold">Google Docs</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-3 px-4">File → Save As</td>
                        <td className="py-3 px-4">Auto-saved (no manual saving needed)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Track Changes</td>
                        <td className="py-3 px-4">Suggesting mode</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Comments (Review tab)</td>
                        <td className="py-3 px-4">Comments (Ctrl+Alt+M or "+" icon)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Version history (limited)</td>
                        <td className="py-3 px-4">Complete version history (File → Version history)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Share via OneDrive</td>
                        <td className="py-3 px-4">Share button (real-time collaboration)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Styles gallery</td>
                        <td className="py-3 px-4">Format menu → Paragraph styles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Tips & Tricks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Keyboard Shortcuts</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ctrl+Alt+M - Add comment</li>
                    <li>• Ctrl+Alt+Shift+H - See revision history</li>
                    <li>• Ctrl+K - Insert link</li>
                    <li>• Ctrl+/ - Show all shortcuts</li>
                    <li>• Ctrl+Alt+C - Word count</li>
                    <li>• Ctrl+Alt+X - Strikethrough</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Collaboration Features</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use @ to mention people in comments</li>
                    <li>• Assign action items with comments</li>
                    <li>• See who's editing in real-time</li>
                    <li>• Use Suggesting mode for feedback</li>
                    <li>• Version history never loses work</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use templates for consistency</li>
                    <li>• Explore add-ons for extra features</li>
                    <li>• Set appropriate sharing permissions</li>
                    <li>• Name documents clearly</li>
                    <li>• Use outline view for long docs</li>
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

export default DocsPage;
