import { Trophy, Medal, Star, Award, Crown, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AchievementBadgeProps {
  title: string;
  description: string;
  isUnlocked: boolean;
  icon?: "trophy" | "medal" | "star" | "award" | "crown" | "zap";
  rarity?: "common" | "rare" | "epic" | "legendary";
}

const AchievementBadge = ({ 
  title, 
  description, 
  isUnlocked, 
  icon = "trophy",
  rarity = "common" 
}: AchievementBadgeProps) => {
  const icons = {
    trophy: Trophy,
    medal: Medal,
    star: Star,
    award: Award,
    crown: Crown,
    zap: Zap,
  };

  const rarityColors = {
    common: "from-zinc-400 to-zinc-500",
    rare: "from-blue-400 to-blue-600",
    epic: "from-purple-400 to-purple-600",
    legendary: "from-amber-400 to-amber-600",
  };

  const Icon = icons[icon];

  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover-lift",
        isUnlocked 
          ? "border-primary/50 bg-card" 
          : "opacity-50 grayscale"
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={cn(
            "p-3 rounded-lg bg-gradient-to-br",
            isUnlocked ? rarityColors[rarity] : "from-muted to-muted-foreground/20"
          )}>
            <Icon className={cn(
              "h-6 w-6",
              isUnlocked ? "text-white" : "text-muted-foreground"
            )} />
          </div>
          <div className="flex-1">
            <h3 className={cn(
              "font-semibold mb-1",
              isUnlocked ? "text-foreground" : "text-muted-foreground"
            )}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            {isUnlocked && (
              <p className="text-xs text-primary font-medium mt-2">✓ Unlocked</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementBadge;
