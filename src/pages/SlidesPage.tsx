import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Presentation, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import LabCompletionCheck from "@/components/LabCompletionCheck";
import { useLabCompletion } from "@/hooks/useLabCompletion";

const SlidesPage = () => {
  const navigate = useNavigate();
  const { completedLabs, isComplete, markLabComplete, markPlatformComplete } = useLabCompletion("slides");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let scrollY = 0;

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "lab-complete" && event.data?.lab) {
        scrollY = window.scrollY;
        markLabComplete(event.data.lab);
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
            <div className="flex items-center gap-4">
              <Presentation className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">Google Slides</h1>
                <p className="text-xl text-muted-foreground">PowerPoint → Google Slides</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What is Google Slides?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Google Slides is a cloud-based presentation tool that allows teams to create, edit, and present slideshows 
                  collaboratively. It supports real-time editing, imports PowerPoint files seamlessly, and enables presenting 
                  from any device with a web browser. Slides integrates with Google Drive and offers built-in templates and themes.
                </p>
              </CardContent>
            </Card>

            {/* Interactive Labs */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Lab 1: Creating Presentations</CardTitle>
                  <CardDescription>Learn how to create and format presentations in Google Slides</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Slides/Slides_presentation/slides_presentation.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Slides/Slides_presentation/Slides_Presentation_lab.html"
                        className="w-full h-[650px] border-0"
                        title="Creating Presentations Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 2: Applying Themes</CardTitle>
                  <CardDescription>Learn how to apply themes and customize slide layouts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Slides/Theme/theme.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Slides/Theme/Theme_lab.html"
                        className="w-full h-[650px] border-0"
                        title="Applying Themes Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 3: Adding Transitions</CardTitle>
                  <CardDescription>Learn how to add slide transitions and animations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <video 
                      className="w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/images/Slides/Transition/transition.mp4"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <iframe
                        src="/images/Slides/Transition/Transition_lab.html"
                        className="w-full h-[650px] border-0"
                        title="Adding Transitions Lab"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lab Completion Check */}
            <LabCompletionCheck
              platform="Slides"
              completedLabs={completedLabs}
              isComplete={isComplete}
              onComplete={markPlatformComplete}
            />

            <Card>
              <CardHeader>
                <CardTitle>Step-by-Step Instructions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Create a New Presentation
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Go to slides.google.com or open Google Drive</li>
                    <li>Click "+ " or choose a template from the gallery</li>
                    <li>A new presentation opens with a title slide</li>
                    <li>Click "Untitled presentation" to rename</li>
                    <li>Add slides with the "+ " button in the toolbar</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Apply Themes and Layouts
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click "Slide" in the menu, then "Change theme"</li>
                    <li>Browse available themes in the right panel</li>
                    <li>Click a theme to apply it to all slides</li>
                    <li>To change a single slide layout: Slide → Apply layout</li>
                    <li>Choose from title slide, section header, content, etc.</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Insert Images and Media
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click "Insert" in the menu</li>
                    <li>Select "Image" to upload from computer, Drive, or web</li>
                    <li>For videos: Insert → Video (from Drive or YouTube)</li>
                    <li>Resize and position images by dragging corners</li>
                    <li>Use "Format options" to adjust image properties</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Present with Presenter View
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click "Present" button in the top-right</li>
                    <li>Choose "Presenter view" from the dropdown</li>
                    <li>Your screen shows notes, timer, and next slide</li>
                    <li>Audience sees only the current slide</li>
                    <li>Use arrow keys or click to advance slides</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Enable Audience Q&A
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Start presenting your slides</li>
                    <li>Click "Audience tools" at the bottom</li>
                    <li>Turn on "Start new" under Q&A section</li>
                    <li>Share the link with your audience</li>
                    <li>View and respond to questions during presentation</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Switch Guide: PowerPoint vs Google Slides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Microsoft PowerPoint</th>
                        <th className="text-left py-3 px-4 font-semibold">Google Slides</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-3 px-4">Design tab → Themes</td>
                        <td className="py-3 px-4">Slide → Change theme</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Master slide view</td>
                        <td className="py-3 px-4">Slide → Edit theme</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Presenter view (F5)</td>
                        <td className="py-3 px-4">Present → Presenter view</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Transitions</td>
                        <td className="py-3 px-4">Slide → Transition</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Animations</td>
                        <td className="py-3 px-4">Insert → Animation</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">N/A</td>
                        <td className="py-3 px-4">Q&A feature (during presentation)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Share via OneDrive</td>
                        <td className="py-3 px-4">Share button (real-time collaboration)</td>
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
                    <li>• Ctrl+M - New slide</li>
                    <li>• Ctrl+D - Duplicate slide</li>
                    <li>• Ctrl+Alt+Shift+C - Copy formatting</li>
                    <li>• Ctrl+Alt+Shift+V - Paste formatting</li>
                    <li>• Ctrl+/ - Show all shortcuts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Design Tips</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use master slides for consistency</li>
                    <li>• Keep text minimal (6 lines max)</li>
                    <li>• Use high-quality images</li>
                    <li>• Maintain consistent fonts/colors</li>
                    <li>• Use presenter notes liberally</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Import PowerPoint files easily</li>
                    <li>• Explore template gallery</li>
                    <li>• Share with "Anyone with link"</li>
                    <li>• Use Q&A for audience engagement</li>
                    <li>• Present from any browser</li>
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

export default SlidesPage;
