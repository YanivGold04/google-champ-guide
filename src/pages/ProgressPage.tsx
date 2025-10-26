import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Circle, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import AchievementBadge from "@/components/AchievementBadge";
import Footer from "@/components/Footer";

interface LabProgress {
  completed: number;
  total: number;
  labs: string[];
}

interface PlatformProgress {
  [key: string]: LabProgress;
}

const platforms = [
  { name: "Gmail", path: "/gmail", labs: ["compose", "search", "trash"] },
  { name: "Drive", path: "/drive", labs: ["MyDrive", "Move", "Share"] },
  { name: "Meet", path: "/meet", labs: ["New_meeting", "Screen_share", "Share_meet"] },
  { name: "Docs", path: "/docs", labs: ["New_docs", "Edit_text", "Share_comment"] },
  { name: "Sheets", path: "/sheets", labs: ["New_sheet", "Formula", "New_chart"] },
  { name: "Slides", path: "/slides", labs: ["Slides_presentation", "Theme", "Transition"] },
  { name: "Calendar", path: "/calendar", labs: ["Event", "Invite", "Reminder"] },
];

const ProgressPage = () => {
  const [progress, setProgress] = useState<PlatformProgress>({});
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [totalLabs, setTotalLabs] = useState(0);

  useEffect(() => {
    const loadProgress = () => {
      const platformProgress: PlatformProgress = {};
      let completed = 0;
      let total = 0;

      platforms.forEach((platform) => {
        const stored = sessionStorage.getItem(`${platform.name.toLowerCase()}-labs-completed`);
        const completedLabs = stored ? JSON.parse(stored) : [];
        
        platformProgress[platform.name] = {
          completed: completedLabs.length,
          total: platform.labs.length,
          labs: completedLabs,
        };

        completed += completedLabs.length;
        total += platform.labs.length;
      });

      setProgress(platformProgress);
      setTotalCompleted(completed);
      setTotalLabs(total);
    };

    loadProgress();

    const handleUpdate = () => loadProgress();
    window.addEventListener("platform-completed", handleUpdate);
    window.addEventListener("focus", handleUpdate);

    return () => {
      window.removeEventListener("platform-completed", handleUpdate);
      window.removeEventListener("focus", handleUpdate);
    };
  }, []);

  const overallProgress = totalLabs > 0 ? Math.round((totalCompleted / totalLabs) * 100) : 0;

  // Calculate achievements
  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first lab",
      isUnlocked: totalCompleted >= 1,
      icon: "star" as const,
      rarity: "common" as const,
    },
    {
      title: "Email Master",
      description: "Complete all Gmail labs",
      isUnlocked: progress["Gmail"]?.completed === 3,
      icon: "medal" as const,
      rarity: "rare" as const,
    },
    {
      title: "Storage Expert",
      description: "Complete all Drive labs",
      isUnlocked: progress["Drive"]?.completed === 3,
      icon: "medal" as const,
      rarity: "rare" as const,
    },
    {
      title: "Meeting Pro",
      description: "Complete all Meet labs",
      isUnlocked: progress["Meet"]?.completed === 3,
      icon: "medal" as const,
      rarity: "rare" as const,
    },
    {
      title: "Halfway Hero",
      description: "Complete 50% of all labs",
      isUnlocked: overallProgress >= 50,
      icon: "trophy" as const,
      rarity: "epic" as const,
    },
    {
      title: "Google Workspace Champion",
      description: "Complete all labs across all tools",
      isUnlocked: overallProgress === 100,
      icon: "crown" as const,
      rarity: "legendary" as const,
    },
    {
      title: "Quick Learner",
      description: "Complete 3 labs in a single day",
      isUnlocked: totalCompleted >= 3,
      icon: "zap" as const,
      rarity: "epic" as const,
    },
  ];

  const unlockedCount = achievements.filter(a => a.isUnlocked).length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-muted">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Your Learning Progress</h1>
            <p className="text-xl text-muted-foreground">
              Track your journey from Microsoft to Google Workspace
            </p>
          </div>

          {/* Overall Progress Card */}
          <Card className="border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Overall Progress
              </CardTitle>
              <CardDescription>
                {totalCompleted} of {totalLabs} labs completed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-semibold text-primary">{overallProgress}%</span>
                </div>
                <Progress value={overallProgress} className="h-3" />
              </div>
              {overallProgress === 100 && (
                <div className="flex items-center gap-2 text-secondary font-semibold p-4 bg-secondary/10 rounded-lg">
                  <Trophy className="h-5 w-5" />
                  Congratulations! You've completed all labs! 🎉
                </div>
              )}
            </CardContent>
          </Card>

          {/* Platform Progress Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {platforms.map((platform) => {
              const platformProgress = progress[platform.name] || { completed: 0, total: platform.labs.length, labs: [] };
              const percentage = Math.round((platformProgress.completed / platformProgress.total) * 100);
              const isComplete = platformProgress.completed === platformProgress.total;

              return (
                <Card key={platform.name} className={`hover:shadow-lg transition-shadow ${isComplete ? 'border-secondary/50' : ''}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{platform.name}</span>
                      {isComplete && <CheckCircle2 className="h-5 w-5 text-secondary" />}
                    </CardTitle>
                    <CardDescription>
                      {platformProgress.completed} of {platformProgress.total} labs completed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Progress value={percentage} className="h-2" />
                    
                    <div className="space-y-2">
                      {platform.labs.map((lab, index) => {
                        const isLabComplete = platformProgress.labs.includes(lab);
                        return (
                          <div
                            key={lab}
                            className="flex items-center gap-2 text-sm"
                          >
                            {isLabComplete ? (
                              <CheckCircle2 className="h-4 w-4 text-secondary" />
                            ) : (
                              <Circle className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className={isLabComplete ? "text-foreground" : "text-muted-foreground"}>
                              Lab {index + 1}: {lab.replace(/_/g, " ")}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <Link to={platform.path}>
                      <Button variant="outline" className="w-full mt-2">
                        {isComplete ? "Review Labs" : "Continue Learning"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Achievements Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Achievements</h2>
                <p className="text-muted-foreground">
                  {unlockedCount} of {achievements.length} unlocked
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{unlockedCount}</div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((achievement, index) => (
                <AchievementBadge key={index} {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProgressPage;
