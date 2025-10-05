import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const GmailPage = () => {
  const navigate = useNavigate();

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
                  {/* Video Preview */}
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

                  {/* Interactive Lab */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-lg overflow-hidden border shadow-sm bg-white">
                      <iframe 
                        src="/images/gmail/compose/compose_lab.html"
                        className="w-full h-[650px]"  // ✅ fixed height for iframe
                        title="Gmail Compose Lab"
                        style={{ border: "none" }}
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
                  {/* Video Preview */}
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

                  {/* Interactive Lab */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-lg overflow-hidden border shadow-sm bg-white">
                      <iframe 
                        src="/images/gmail/trash/trash_lab.html"
                        className="w-full h-[650px]"  // ✅ height control
                        title="Gmail Trash Lab"
                        style={{ border: "none" }}
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
                  {/* Video Preview */}
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

                  {/* Interactive Lab */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-lg overflow-hidden border shadow-sm bg-white">
                      <iframe 
                        src="/images/gmail/search/search_lab.html"
                        className="w-full h-[650px]"  // ✅ fixed iframe height only
                        title="Gmail Search Lab"
                        style={{ border: "none" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step-by-Step and Sidebar remain unchanged */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Tips & Tricks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* ...sidebar content unchanged... */}
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
