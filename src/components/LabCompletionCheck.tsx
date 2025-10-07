import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LabCompletionCheckProps {
  platform: string;
  completedLabs: Set<string>;
  isComplete: boolean;
  onComplete: () => void;
}

const LabCompletionCheck = ({
  platform,
  completedLabs,
  isComplete,
  onComplete,
}: LabCompletionCheckProps) => {
  const navigate = useNavigate();

  const labs = ['compose', 'trash', 'search'];

  const handleReturnHome = () => {
    if (isComplete) {
      onComplete();
    }
    navigate('/#comparison-table');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lab Completion Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {labs.map((lab) => (
            <div key={lab} className="flex items-center gap-2">
              {completedLabs.has(lab) ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-muted-foreground" />
              )}
              <span className="capitalize text-muted-foreground">{lab} Lab</span>
            </div>
          ))}
        </div>

        {isComplete && (
          <div className="pt-4 border-t">
            <p className="text-green-600 font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              ✅ All labs for {platform} completed!
            </p>
            <Button onClick={handleReturnHome} className="w-full">
              Return to Main Page
            </Button>
          </div>
        )}

        {!isComplete && (
          <p className="text-sm text-muted-foreground">
            Click on all three lab iframes above to complete this platform.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default LabCompletionCheck;
