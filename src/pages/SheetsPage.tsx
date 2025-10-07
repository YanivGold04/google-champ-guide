import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Table, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import LabCompletionCheck from "@/components/LabCompletionCheck";
import { useLabCompletion } from "@/hooks/useLabCompletion";

const SheetsPage = () => {
  const navigate = useNavigate();
  const { completedLabs, isComplete, markLabComplete, markPlatformComplete } = useLabCompletion("sheets");

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
              <Table className="h-12 w-12 text-primary" />
              <div>
                <h1 className="text-4xl font-bold text-foreground">Google Sheets</h1>
                <p className="text-xl text-muted-foreground">Excel → Google Sheets</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What is Google Sheets?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Google Sheets is a cloud-based spreadsheet application that supports most Excel formulas and functions. 
                  It enables real-time collaboration, automatic saving, and powerful data analysis tools. Sheets integrates 
                  with other Google Workspace apps and offers unique functions like IMPORTRANGE for linking data across spreadsheets.
                </p>
              </CardContent>
            </Card>

            {/* Interactive Labs */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Lab 1: Creating Spreadsheets</CardTitle>
                  <CardDescription>Learn how to create spreadsheets and use basic formulas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <div className="w-full h-[300px] flex items-center justify-center">
                      <p className="text-muted-foreground">Video placeholder - Upload video/GIF here</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <div className="w-full h-[650px] flex items-center justify-center">
                        <p className="text-muted-foreground">Lab 1 iframe placeholder - Upload HTML lab here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 2: Conditional Formatting</CardTitle>
                  <CardDescription>Learn how to apply conditional formatting and data validation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <div className="w-full h-[300px] flex items-center justify-center">
                      <p className="text-muted-foreground">Video placeholder - Upload video/GIF here</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <div className="w-full h-[650px] flex items-center justify-center">
                        <p className="text-muted-foreground">Lab 2 iframe placeholder - Upload HTML lab here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lab 3: Charts and Pivot Tables</CardTitle>
                  <CardDescription>Learn how to create charts and use pivot tables</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-2xl overflow-hidden bg-muted">
                    <div className="w-full h-[300px] flex items-center justify-center">
                      <p className="text-muted-foreground">Video placeholder - Upload video/GIF here</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Try it yourself - Interactive Lab</h4>
                    <div className="rounded-2xl overflow-hidden bg-muted">
                      <div className="w-full h-[650px] flex items-center justify-center">
                        <p className="text-muted-foreground">Lab 3 iframe placeholder - Upload HTML lab here</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lab Completion Check */}
            <LabCompletionCheck
              platform="Sheets"
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
                    How to Create a New Spreadsheet
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Go to sheets.google.com or open Google Drive</li>
                    <li>Click the "+ " button or choose "Blank" spreadsheet</li>
                    <li>The spreadsheet opens in a new tab</li>
                    <li>Click "Untitled spreadsheet" to rename</li>
                    <li>Start entering data - auto-saved as you work</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Use Formulas
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click on a cell where you want the result</li>
                    <li>Type "=" to start a formula</li>
                    <li>Enter formula (e.g., =SUM(A1:A10) for sum)</li>
                    <li>Press Enter to execute the formula</li>
                    <li>Most Excel formulas work the same in Sheets</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Apply Conditional Formatting
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Select the cells you want to format</li>
                    <li>Go to Format → Conditional formatting</li>
                    <li>Set your condition (e.g., "Greater than 100")</li>
                    <li>Choose formatting style (color, bold, etc.)</li>
                    <li>Click "Done" - formatting applies automatically based on values</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Protect Ranges
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Select the cells you want to protect</li>
                    <li>Right-click and choose "Protect range"</li>
                    <li>Add a description for the protected range</li>
                    <li>Set permissions (who can edit)</li>
                    <li>Click "Done" - only specified users can edit those cells</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    How to Use the Explore Feature
                  </h3>
                  <ol className="space-y-2 ml-7 list-decimal text-muted-foreground">
                    <li>Click the "Explore" button in the bottom-right corner</li>
                    <li>Sheets analyzes your data automatically</li>
                    <li>View suggested charts, pivot tables, and formulas</li>
                    <li>Click any suggestion to insert it into your sheet</li>
                    <li>Ask questions in natural language (e.g., "Average sales")</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Switch Guide: Excel vs Google Sheets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-semibold">Microsoft Excel</th>
                        <th className="text-left py-3 px-4 font-semibold">Google Sheets</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b">
                        <td className="py-3 px-4">File → Save As</td>
                        <td className="py-3 px-4">Auto-saved</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Conditional formatting</td>
                        <td className="py-3 px-4">Format → Conditional formatting</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Data validation</td>
                        <td className="py-3 px-4">Data → Data validation</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Pivot tables</td>
                        <td className="py-3 px-4">Insert → Pivot table</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Charts</td>
                        <td className="py-3 px-4">Insert → Chart</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Protect worksheet</td>
                        <td className="py-3 px-4">Data → Protect sheets and ranges</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">N/A</td>
                        <td className="py-3 px-4">Explore feature (AI-powered insights)</td>
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
                  <h4 className="font-semibold mb-2 text-foreground">Unique Sheets Functions</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• IMPORTRANGE - Link data across sheets</li>
                    <li>• QUERY - SQL-like data queries</li>
                    <li>• ARRAYFORMULA - Apply formula to entire column</li>
                    <li>• GOOGLETRANSLATE - Translate text</li>
                    <li>• SPARKLINE - Mini charts in cells</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Keyboard Shortcuts</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ctrl+; - Insert current date</li>
                    <li>• Ctrl+Shift+; - Insert current time</li>
                    <li>• Alt+= - Auto-sum</li>
                    <li>• Ctrl+/ - Show all shortcuts</li>
                    <li>• F2 - Edit cell</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Best Practices</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Use named ranges for clarity</li>
                    <li>• Freeze header rows (View → Freeze)</li>
                    <li>• Protect important ranges</li>
                    <li>• Use data validation for consistency</li>
                    <li>• Explore feature for quick insights</li>
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

export default SheetsPage;
