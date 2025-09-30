import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Video, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const MeetPage = () => {
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
            <div className="flex items-center gap-4">
              <Video className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">Google Meet & Zoom</h1>
                <p className="text-xl text-muted-foreground">Teams → Google Meet / Zoom</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What are Google Meet and Zoom?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Google Meet is Google's video conferencing solution that integrates directly with Google Calendar and Gmail. 
                  It's perfect for quick meetings and team collaboration. Zoom is a third-party solution that offers more 
                  advanced features like webinars, breakout rooms, and extensive customization options.
                </p>
                <p className="text-muted-foreground">
                  <strong>When to use Google Meet:</strong> Quick team meetings, one-on-ones, scheduled calendar events.<br />
                  <strong>When to use Zoom:</strong> Large webinars, training sessions, meetings requiring breakout rooms or advanced controls.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Learn to use Google Meet and Zoom effectively</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video: Starting and Joining Google Meet Calls</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video: Scheduling Zoom Meetings from Google Calendar</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video: Screen Sharing and Presentation Mode</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
                    How to Share Your Screen
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Join the meeting (Google Meet or Zoom)</li>
                    <li>Click "Present now" (Meet) or "Share Screen" (Zoom)</li>
                    <li>Choose "Your entire screen" or "A window"</li>
                    <li>Select what to share and click "Share"</li>
                    <li>Click "Stop sharing" when finished</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Record a Meeting
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Start or join the meeting</li>
                    <li>Click the three dots menu (More options)</li>
                    <li>Select "Record meeting"</li>
                    <li>Recording starts (all participants are notified)</li>
                    <li>Click "Stop recording" when done - file saves to Drive (Meet) or computer (Zoom)</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Switch Guide: Teams vs Google Meet/Zoom</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Microsoft Teams</th>
                        <th className="text-left py-3 px-4 font-semibold">Google Meet / Zoom</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-3 px-4">Meet now</td>
                        <td className="py-3 px-4">Start instant meeting (Meet/Zoom)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Schedule meeting</td>
                        <td className="py-3 px-4">Add to Google Calendar event</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Share screen</td>
                        <td className="py-3 px-4">Present now (Meet) / Share screen (Zoom)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Breakout rooms</td>
                        <td className="py-3 px-4">Breakout rooms (Zoom) / Not in Meet</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Record meeting</td>
                        <td className="py-3 px-4">Record (saves to Drive or computer)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Live captions</td>
                        <td className="py-3 px-4">Turn on captions (both support this)</td>
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
                  <h4 className="font-semibold mb-2 text-foreground">Google Meet Tips</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use Chrome for best performance</li>
                    <li>• Pin important speakers</li>
                    <li>• Use "Raise hand" to speak</li>
                    <li>• Enable captions for accessibility</li>
                    <li>• Use grid view for team calls</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Zoom Tips</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Download desktop app for features</li>
                    <li>• Use virtual backgrounds</li>
                    <li>• Create breakout rooms before meeting</li>
                    <li>• Use reactions for engagement</li>
                    <li>• Enable waiting room for security</li>
                  </ul>
                </div>

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
      </div>
      <Footer />
    </div>
  );
};

export default MeetPage;
