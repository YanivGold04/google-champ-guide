import { useEffect } from "react";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import ToolGuides from "@/components/ToolGuides";
import Quiz from "@/components/Quiz";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const shouldRestore = sessionStorage.getItem("shouldRestoreScroll");
    const savedScroll = Number(sessionStorage.getItem("lastScrollPosition")) || 0;

    if (shouldRestore === "true") {
      setTimeout(() => {
        window.scrollTo({ top: savedScroll, behavior: "smooth" });
      }, 300);
      sessionStorage.removeItem("shouldRestoreScroll");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div id="comparison-table">
        <ComparisonTable />
      </div>
      <ToolGuides />
      <Quiz />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
