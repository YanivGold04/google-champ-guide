import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const CalendarPage = () => {
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
              <Calendar className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">Google Calendar</h1>
                <p className="text-xl text-muted-foreground">Outlook Calendar → Google Calendar</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What is Google Calendar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Google Calendar is a time-management and scheduling tool that integrates seamlessly with Gmail, Google Meet, 
                  and Zoom. It allows you to create multiple calendars with different colors, share calendars with team members, 
                  and automatically add video conferencing links to events. Calendar syncs across all devices and offers smart 
                  scheduling features like "Find a time."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Master scheduling with Google Calendar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video: Creating and Managing Events</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video: Sharing Calendars and Setting Permissions</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video: Integrating Google Meet and Zoom</p>
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
                    How to Create an Event
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Go to calendar.google.com</li>
                    <li>Click on a time slot or click "Create" button</li>
                    <li>Enter event title, date, and time</li>
                    <li>Add guests by entering their email addresses</li>
                    <li>Click "Save" to create the event</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Add Google Meet to an Event
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Create or edit an event</li>
                    <li>Click "Add Google Meet video conferencing"</li>
                    <li>A Meet link is automatically generated</li>
                    <li>Guests receive the link when they accept the invite</li>
                    <li>Click the link at event time to join the meeting</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Add Zoom to an Event
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Install Zoom for Google Workspace add-on</li>
                    <li>Create or edit an event in Calendar</li>
                    <li>Click the Zoom icon in the event details</li>
                    <li>Zoom meeting details are added automatically</li>
                    <li>Save the event - guests get the Zoom link</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Create Multiple Calendars
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>In the left sidebar, click "+" next to "Other calendars"</li>
                    <li>Select "Create new calendar"</li>
                    <li>Name your calendar (e.g., "Personal," "Marketing Team")</li>
                    <li>Add description and timezone (optional)</li>
                    <li>Click "Create calendar" - new calendar appears in sidebar</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Share Your Calendar
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Hover over your calendar in the left sidebar</li>
                    <li>Click the three dots and select "Settings and sharing"</li>
                    <li>Scroll to "Share with specific people"</li>
                    <li>Click "Add people" and enter email addresses</li>
                    <li>Set permissions (See all event details, Make changes, etc.)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Use "Find a Time"
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Create a new event and add guests</li>
                    <li>Click "Find a time" tab at the top</li>
                    <li>View guests' availability (if calendars are shared)</li>
                    <li>Drag to select a time when everyone is free</li>
                    <li>Return to event details and save</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Switch Guide: Outlook Calendar vs Google Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Outlook Calendar</th>
                        <th className="text-left py-3 px-4 font-semibold">Google Calendar</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-3 px-4">New appointment</td>
                        <td className="py-3 px-4">Create event (click time slot or "Create")</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Scheduling Assistant</td>
                        <td className="py-3 px-4">Find a time tab</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Add Teams meeting</td>
                        <td className="py-3 px-4">Add Google Meet / Zoom</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Share calendar</td>
                        <td className="py-3 px-4">Calendar settings → Share with specific people</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Create multiple calendars</td>
                        <td className="py-3 px-4">+ next to "Other calendars"</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Working hours</td>
                        <td className="py-3 px-4">Settings → Working hours & location</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Reminders</td>
                        <td className="py-3 px-4">Event notifications (email or popup)</td>
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
                    <li>• 'c' - Create new event</li>
                    <li>• 'd' - Switch to Day view</li>
                    <li>• 'w' - Switch to Week view</li>
                    <li>• 'm' - Switch to Month view</li>
                    <li>• 't' - Jump to today</li>
                    <li>• 'n' or 'j' - Next period</li>
                    <li>• 'p' or 'k' - Previous period</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Organization Tips</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Color-code calendars by project</li>
                    <li>• Set working hours to help others</li>
                    <li>• Use "Out of office" for vacations</li>
                    <li>• Enable world clock for time zones</li>
                    <li>• Subscribe to team calendars</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Add video links to all meetings</li>
                    <li>• Set reminders for important events</li>
                    <li>• Share calendars with team members</li>
                    <li>• Use "Find a time" for group meetings</li>
                    <li>• Enable desktop notifications</li>
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

export default CalendarPage;
