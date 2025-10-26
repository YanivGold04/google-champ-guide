import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HardDrive, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import LabCompletionCheck from "@/components/LabCompletionCheck";
import { useLabCompletion } from "@/hooks/useLabCompletion";

const DrivePage = () => {
  const navigate = useNavigate();
  const { completedLabs, isComplete, markLabComplete, markPlatformComplete } = useLabCompletion("drive");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let scrollY = 0;

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "lab-complete" && event.data?.lab) {
        scrollY = window.scrollY;
        const labName = event.data.lab;
        
        // Map the incoming lab names to our internal format
        const labMap: Record<string, string> = {
          "drive-upload": "MyDrive",
          "drive-move": "Move",
          "drive-share": "Share"
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
              <HardDrive className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">Google Drive</h1>
                <p className="text-xl text-muted-foreground">OneDrive → Google Drive</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What is Google Drive?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Google Drive is a cloud storage service that integrates seamlessly with all Google Workspace apps. 
                  It offers real-time collaboration, automatic version history, and easy sharing with granular permission controls. 
                  Files are organized in folders and can be accessed from any device with internet connectivity.
                </p>
                <Button 
                  variant="link" 
                  className="mt-4 px-0"
                  onClick={() => window.open('https://drive.google.com/drive/my-drive', '_blank')}
                >
                  Open Google Drive →
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Labs */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Lab 1: My Drive - Uploading Files</CardTitle>
                  <CardDescription>Learn how to upload files and folders to Google Drive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Drive/MyDrive/Kapture2025-10-09at11.06.36-ezgif.com-gif-to-mp4-converter.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("MyDrive") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("MyDrive") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Drive/MyDrive/MyDrive_lab.html"
                        className="w-full h-[650px] border-0"
                        title="My Drive Upload Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 2: Sharing Files</CardTitle>
                  <CardDescription>Learn how to share files and manage permissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Drive/Share/Kapture2025-10-09at11.24.45-ezgif.com-gif-to-mp4-converter.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("Share") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("Share") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Drive/Share/Share_lab.html"
                        className="w-full h-[650px] border-0"
                        title="Share Files Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 3: Move - Organizing with Folders</CardTitle>
                  <CardDescription>Learn how to move and organize files in folders</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Drive/Move/Kapture2025-10-09at11.16.44-ezgif.com-gif-to-mp4-converter.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has("Move") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has("Move") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Drive/Move/Move_lab.html"
                        className="w-full h-[650px] border-0"
                        title="Move Files Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lab Completion Check */}
            <LabCompletionCheck
              platform="Drive"
              completedLabs={completedLabs}
              isComplete={isComplete}
              onComplete={markPlatformComplete}
              labNames={["MyDrive", "Share", "Move"]}
            />

            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Upload Files
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the "+ New" button in the top-left corner</li>
                    <li>Select "File upload" or "Folder upload"</li>
                    <li>Browse and select files from your computer</li>
                    <li>Wait for the upload to complete (check bottom-right corner)</li>
                    <li>Files appear in "My Drive" by default</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Share Files and Set Permissions
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Right-click on a file or folder</li>
                    <li>Select "Share" from the menu</li>
                    <li>Enter email addresses of people you want to share with</li>
                    <li>Choose permission level: Viewer, Commenter, or Editor</li>
                    <li>Click "Send" or copy the link for broader sharing</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Access Shared Files
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click "Shared with me" in the left sidebar</li>
                    <li>All files shared by others appear here</li>
                    <li>Right-click and select "Add to My Drive" to organize them</li>
                    <li>This creates a shortcut in your Drive without duplicating</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Enable Offline Access
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the gear icon (Settings) in the top-right</li>
                    <li>Select "Settings" from the dropdown</li>
                    <li>Check "Offline" in the left menu</li>
                    <li>Enable "Create, open and edit your recent Google Docs, Sheets, and Slides files on this device while offline"</li>
                    <li>Files will sync automatically when you're back online</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Switch Guide: OneDrive vs Google Drive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Microsoft OneDrive</th>
                        <th className="text-left py-3 px-4 font-semibold">Google Drive</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-3 px-4">File Explorer integration</td>
                        <td className="py-3 px-4">Drive for Desktop app</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Share button</td>
                        <td className="py-3 px-4">Share button (right-click or top bar)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Version history</td>
                        <td className="py-3 px-4">Version history (right-click → Manage versions)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Shared folders</td>
                        <td className="py-3 px-4">Shared drives (for teams)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Search box</td>
                        <td className="py-3 px-4">Search box (with advanced filters)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Offline files</td>
                        <td className="py-3 px-4">Offline mode (enable in settings)</td>
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
                    <li>• 'c' - Create new document</li>
                    <li>• '/' - Search your Drive</li>
                    <li>• 'g' then 'n' - Go to navigation</li>
                    <li>• 'Shift+Z' - Add to folder</li>
                    <li>• '.' (period) - Share file</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Organization Tips</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use colors to categorize folders</li>
                    <li>• Star important files for quick access</li>
                    <li>• Create "Shared with me" shortcuts</li>
                    <li>• Use search instead of deep folders</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Set appropriate permissions</li>
                    <li>• Enable offline access for key files</li>
                    <li>• Check version history regularly</li>
                    <li>• Use Shared Drives for teams</li>
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

export default DrivePage;
