import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    question: "You want to schedule a recurring weekly team meeting. Where do you do this in Google Workspace?",
    options: [
      "Google Meet directly",
      "Google Calendar",
      "Gmail settings",
      "Google Drive",
    ],
    correctAnswer: 1,
    explanation: "Google Calendar is where you schedule all meetings, including recurring ones. You can add Google Meet or Zoom links directly from Calendar.",
  },
  {
    question: "In Gmail, you want to organize emails from your manager. What's the best approach?",
    options: [
      "Create a folder called 'Manager'",
      "Create a label called 'Manager' and set up a filter",
      "Move all emails to a separate inbox",
      "Archive them immediately",
    ],
    correctAnswer: 1,
    explanation: "Gmail uses labels instead of folders. Labels are more flexible - an email can have multiple labels. You can also create filters to automatically apply labels.",
  },
  {
    question: "You need to collaborate on a document with your team in real-time. Which tool should you use?",
    options: [
      "Email the document back and forth",
      "Google Docs with sharing enabled",
      "Download and use Microsoft Word offline",
      "Print and make handwritten edits",
    ],
    correctAnswer: 1,
    explanation: "Google Docs allows multiple people to edit simultaneously with changes appearing in real-time. Share the document and set appropriate permissions.",
  },
  {
    question: "Where can you find files that other people have shared with you in Google Drive?",
    options: [
      "My Drive folder",
      "Recent files",
      "Shared with me section",
      "Starred files",
    ],
    correctAnswer: 2,
    explanation: "The 'Shared with me' section shows all files and folders that others have shared with you, making them easy to find and access.",
  },
  {
    question: "You want to prevent accidental edits to a specific range in Google Sheets. What should you use?",
    options: [
      "Delete the range",
      "Hide the range",
      "Protect the range",
      "Copy it to a new sheet",
    ],
    correctAnswer: 2,
    explanation: "You can protect specific ranges or entire sheets in Google Sheets. This allows you to set who can edit that range while others can only view.",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
      toast.success("Correct! " + questions[currentQuestion].explanation);
    } else {
      toast.error(questions[currentQuestion].explanation);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
  };

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    return (
      <section id="quiz" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-center">Quiz Complete!</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="text-6xl font-bold text-primary">
                  {score}/{questions.length}
                </div>
                <p className="text-xl text-muted-foreground">
                  You scored {percentage.toFixed(0)}%
                </p>
                <div className="space-y-2">
                  {percentage >= 80 && (
                    <p className="text-lg text-secondary font-semibold">
                      Excellent! You're ready to use Google Workspace! 🎉
                    </p>
                  )}
                  {percentage >= 60 && percentage < 80 && (
                    <p className="text-lg text-accent font-semibold">
                      Good job! Review the guides for areas you missed.
                    </p>
                  )}
                  {percentage < 60 && (
                    <p className="text-lg text-destructive font-semibold">
                      Keep learning! Go through the guides again.
                    </p>
                  )}
                </div>
                <Button onClick={handleRestart} size="lg" className="mt-4">
                  Restart Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Test Your Knowledge
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-world scenarios to test your understanding
            </p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-semibold text-primary">
                  Score: {score}
                </span>
              </div>
              <CardTitle className="text-xl">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={answered}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                      answered
                        ? index === questions[currentQuestion].correctAnswer
                          ? "border-secondary bg-secondary/10 scale-[1.02]"
                          : index === selectedAnswer
                          ? "border-destructive bg-destructive/10"
                          : "border-border"
                        : "border-border hover:border-primary hover:bg-primary/5 hover:-translate-y-0.5"
                    } ${answered ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center gap-3">
                      {answered && index === questions[currentQuestion].correctAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-secondary animate-scale-in" />
                      )}
                      {answered && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                        <XCircle className="h-5 w-5 text-destructive animate-scale-in" />
                      )}
                      <span className="flex-1 font-medium">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {answered && (
                <Button onClick={handleNext} className="w-full" size="lg">
                  {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
