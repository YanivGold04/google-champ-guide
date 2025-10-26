import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgressPage from "./pages/ProgressPage";
import GmailPage from "./pages/GmailPage";
import DrivePage from "./pages/DrivePage";
import MeetPage from "./pages/MeetPage";
import DocsPage from "./pages/DocsPage";
import SheetsPage from "./pages/SheetsPage";
import SlidesPage from "./pages/SlidesPage";
import CalendarPage from "./pages/CalendarPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ThemeToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/gmail" element={<GmailPage />} />
            <Route path="/drive" element={<DrivePage />} />
            <Route path="/meet" element={<MeetPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/sheets" element={<SheetsPage />} />
            <Route path="/slides" element={<SlidesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
