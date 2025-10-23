import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Video, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import LabCompletionCheck from "@/components/LabCompletionCheck";
import { useLabCompletion } from "@/hooks/useLabCompletion";

const MeetPage = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<"zoom" | "meet" | null>(null);
  // Always track completion under "meet" for the main page regardless of sub-platform
  const { completedLabs, isComplete, markLabComplete, markPlatformComplete } = useLabCompletion("meet");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let scrollY = 0;

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "lab-complete" && event.data?.lab) {
        scrollY = window.scrollY;
        const labName = event.data.lab;
        
        // Map the incoming lab names to our internal format based on selected platform
        const zoomLabMap: Record<string, string> = {
          "zoom-new": "New_zoom",
          "zoom-share": "Share_zoom",
          "zoom-screen": "Screen_share"
        };
        
        const meetLabMap: Record<string, string> = {
          "meet-new": "New_meeting",
          "meet-share": "Share_meet",
          "meet-screen": "Screen_share"
        };
        
        const labMap = selectedPlatform === "zoom" ? zoomLabMap : meetLabMap;
        const mappedLab = labMap[labName] || labName;
        markLabComplete(mappedLab);
        
        setTimeout(() => {
          window.scrollTo(0, scrollY);
        }, 150);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [markLabComplete, selectedPlatform]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => {
            if (selectedPlatform) {
              setSelectedPlatform(null);
            } else {
              navigate("/");
            }
          }}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {selectedPlatform ? "Back to Selection" : "Back to Home"}
        </Button>

        {!selectedPlatform ? (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-4 justify-center">
              <Video className="h-12 w-12 text-primary" />
              <div className="text-center">
                <h1 className="text-4xl font-bold text-foreground">Video Conferencing</h1>
                <p className="text-xl text-muted-foreground">Teams → Google Meet / Zoom</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Choose Your Platform</CardTitle>
                <CardDescription className="text-center">
                  Select which video conferencing tool you'd like to learn
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card 
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-lg"
                    onClick={() => setSelectedPlatform("zoom")}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Video className="h-6 w-6 text-primary" />
                        Zoom
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Learn Zoom for large webinars, training sessions, meetings with breakout rooms, and advanced controls.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Advanced features & customization</li>
                        <li>• Breakout rooms</li>
                        <li>• Virtual backgrounds</li>
                        <li>• Webinar capabilities</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card 
                    className="cursor-pointer hover:border-primary transition-all hover:shadow-lg"
                    onClick={() => setSelectedPlatform("meet")}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Video className="h-6 w-6 text-primary" />
                        Google Meet
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        Learn Google Meet for quick team meetings, one-on-ones, and seamless Google Calendar integration.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Seamless Google integration</li>
                        <li>• Quick instant meetings</li>
                        <li>• Calendar integration</li>
                        <li>• Simple & intuitive</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center gap-4">
                <Video className="h-12 w-12 text-primary" />
                <div>
                  <h1 className="text-4xl font-bold text-foreground">
                    {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Teams → {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"}
                  </p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>
                    What is {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"}?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedPlatform === "zoom" ? (
                    <>
                      <p className="text-muted-foreground">
                        Zoom is a powerful video conferencing platform that offers advanced features like webinars, 
                        breakout rooms, extensive customization options, virtual backgrounds, and robust meeting controls. 
                        It's perfect for large webinars, training sessions, and meetings requiring advanced features.
                      </p>
                      <Button 
                        variant="link" 
                        className="mt-4 px-0"
                        onClick={() => window.open('https://www.zoom.com/', '_blank')}
                      >
                        Open Zoom →
                      </Button>
                    </>
                  ) : (
                    <>
                      <p className="text-muted-foreground">
                        Google Meet is Google's video conferencing solution that integrates directly with Google Calendar and Gmail. 
                        It's perfect for quick meetings, team collaboration, one-on-ones, and scheduled calendar events. 
                        Simple, intuitive, and seamlessly integrated with Google Workspace.
                      </p>
                      <Button 
                        variant="link" 
                        className="mt-4 px-0"
                        onClick={() => window.open('https://meet.google.com/landing', '_blank')}
                      >
                        Open Google Meet →
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Interactive Labs */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Lab 1: Starting {selectedPlatform === "zoom" ? "Zoom" : "Meet"} Meetings</CardTitle>
                    <CardDescription>
                      Learn how to start and join {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"} calls
                    </CardDescription>
                  </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={selectedPlatform === "zoom" ? "/images/Zoom/New_zoom/new_zoom.mp4" : "/images/Meet/New_meeting/new_meeting.mp4"}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has(selectedPlatform === "zoom" ? "New_zoom" : "New_meeting") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has(selectedPlatform === "zoom" ? "New_zoom" : "New_meeting") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src={selectedPlatform === "zoom" ? "/images/Zoom/New_zoom/New_Zoom_lab.html" : "/images/Meet/New_meeting/New_Meeting_lab.html"}
                        className="w-full h-[650px] border-0"
                        title="Starting Meetings Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Lab 2: Sharing {selectedPlatform === "zoom" ? "Zoom" : "Meet"} Links</CardTitle>
                    <CardDescription>
                      Learn how to share {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"} meeting links
                    </CardDescription>
                  </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={selectedPlatform === "zoom" ? "/images/Zoom/Share_zoom/share_zoom.mp4" : "/images/Meet/Share_meet/share_meet.mp4"}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has(selectedPlatform === "zoom" ? "Share_zoom" : "Share_meet") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has(selectedPlatform === "zoom" ? "Share_zoom" : "Share_meet") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src={selectedPlatform === "zoom" ? "/images/Zoom/Share_zoom/Share_Zoom_lab.html" : "/images/Meet/Share_meet/Share_Meet_lab.html"}
                        className="w-full h-[650px] border-0"
                        title="Sharing Links Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Lab 3: Screen Sharing</CardTitle>
                    <CardDescription>
                      Learn how to share your screen in {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"}
                    </CardDescription>
                  </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={selectedPlatform === "zoom" ? "/images/Zoom/Screen_share/screen_share.mp4" : "/images/Meet/Screen_share/screen_share.mp4"}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                      <span className={`text-sm font-medium ${completedLabs.has(selectedPlatform === "zoom" ? "Screen_share" : "Screen_share") ? "text-green-600" : "text-muted-foreground"}`}>
                        {completedLabs.has(selectedPlatform === "zoom" ? "Screen_share" : "Screen_share") ? "✅ Completed" : "❌ Not started"}
                      </span>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src={selectedPlatform === "zoom" ? "/images/Zoom/Screen_share/Screen_Share_lab.html" : "/images/Meet/Screen_share/Screen_Share_lab.html"}
                        className="w-full h-[650px] border-0"
                        title="Screen Sharing Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

              {/* Lab Completion Check */}
              <LabCompletionCheck
                platform={selectedPlatform === "zoom" ? "Zoom" : "Google Meet"}
                completedLabs={completedLabs}
                isComplete={isComplete}
                onComplete={markPlatformComplete}
                labNames={selectedPlatform === "zoom" ? ["New_zoom", "Share_zoom", "Screen_share"] : ["New_meeting", "Share_meet", "Screen_share"]}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Step-by-Step Instructions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {selectedPlatform === "zoom" ? (
                    <>
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Start a Zoom Meeting
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Open Zoom app or go to zoom.us</li>
                          <li>Click "New Meeting" to start instantly</li>
                          <li>Choose audio/video settings and join</li>
                          <li>Click "Invite" to copy meeting link</li>
                          <li>Share link with participants</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Schedule a Zoom Meeting
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Install the Zoom for Google Workspace add-on</li>
                          <li>In Google Calendar, create a new event</li>
                          <li>Click the Zoom icon in the event details</li>
                          <li>Zoom meeting details are automatically added</li>
                          <li>Save the event and share with participants</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Share Your Screen in Zoom
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Join the Zoom meeting</li>
                          <li>Click "Share Screen" button at the bottom</li>
                          <li>Choose what to share (screen, window, or whiteboard)</li>
                          <li>Click "Share" to start sharing</li>
                          <li>Click "Stop Share" when finished</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Use Breakout Rooms
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>During meeting, click "Breakout Rooms"</li>
                          <li>Choose number of rooms and assignment method</li>
                          <li>Click "Create Rooms"</li>
                          <li>Click "Open All Rooms" to start</li>
                          <li>Click "Close All Rooms" to bring everyone back</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Record a Zoom Meeting
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Start or join the meeting</li>
                          <li>Click "Record" button at the bottom</li>
                          <li>Choose "Record on this Computer" or "Record to Cloud"</li>
                          <li>Recording starts (participants are notified)</li>
                          <li>Click "Stop Recording" when done</li>
                        </ol>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Start a Google Meet Call
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Go to meet.google.com</li>
                          <li>Click "New meeting" and choose "Start an instant meeting"</li>
                          <li>Click "Join now" to enter the meeting room</li>
                          <li>Copy the meeting link and share with participants</li>
                          <li>Participants can join by clicking the link</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Schedule a Google Meet from Calendar
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Open Google Calendar</li>
                          <li>Click on a time slot or click "Create"</li>
                          <li>Add event title and guest emails</li>
                          <li>Click "Add Google Meet video conferencing"</li>
                          <li>Click "Save" - meeting link is automatically added</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Share Your Screen in Google Meet
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Join the Google Meet meeting</li>
                          <li>Click "Present now" at the bottom</li>
                          <li>Choose "Your entire screen", "A window", or "A tab"</li>
                          <li>Select what to share and click "Share"</li>
                          <li>Click "Stop sharing" when finished</li>
                        </ol>
                      </div>

                      <div>
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          How to Record a Google Meet Meeting
                        </h3>
                        <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                          <li>Start or join the meeting</li>
                          <li>Click the three dots menu (More options)</li>
                          <li>Select "Record meeting"</li>
                          <li>Recording starts (all participants are notified)</li>
                          <li>Click "Stop recording" when done - file saves to Google Drive</li>
                        </ol>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    Quick Switch Guide: Teams vs {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Microsoft Teams</th>
                          <th className="text-left py-3 px-4 font-semibold">
                            {selectedPlatform === "zoom" ? "Zoom" : "Google Meet"}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b">
                          <td className="py-3 px-4">Meet now</td>
                          <td className="py-3 px-4">
                            {selectedPlatform === "zoom" ? "New Meeting" : "Start instant meeting"}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Schedule meeting</td>
                          <td className="py-3 px-4">Add to Google Calendar event</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Share screen</td>
                          <td className="py-3 px-4">
                            {selectedPlatform === "zoom" ? "Share Screen" : "Present now"}
                          </td>
                        </tr>
                        {selectedPlatform === "zoom" && (
                          <tr className="border-b">
                            <td className="py-3 px-4">Breakout rooms</td>
                            <td className="py-3 px-4">Breakout Rooms</td>
                          </tr>
                        )}
                        <tr className="border-b">
                          <td className="py-3 px-4">Record meeting</td>
                          <td className="py-3 px-4">
                            Record (saves to {selectedPlatform === "zoom" ? "computer/cloud" : "Google Drive"})
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Live captions</td>
                          <td className="py-3 px-4">Turn on captions</td>
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
                  {selectedPlatform === "zoom" ? (
                    <>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Zoom Tips</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Download desktop app for full features</li>
                          <li>• Use virtual backgrounds</li>
                          <li>• Create breakout rooms before meeting</li>
                          <li>• Use reactions for engagement</li>
                          <li>• Enable waiting room for security</li>
                          <li>• Try gallery view for large groups</li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">Google Meet Tips</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Use Chrome for best performance</li>
                          <li>• Pin important speakers</li>
                          <li>• Use "Raise hand" to speak</li>
                          <li>• Enable captions for accessibility</li>
                          <li>• Use grid view for team calls</li>
                          <li>• Blur background for privacy</li>
                        </ul>
                      </div>
                    </>
                  )}

                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Test audio/video before meetings</li>
                      <li>• Mute when not speaking</li>
                      <li>• Use good lighting</li>
                      <li>• Share meeting links in advance</li>
                      <li>• Record important meetings</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MeetPage;
