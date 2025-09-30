import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import ToolGuides from "@/components/ToolGuides";
import Quiz from "@/components/Quiz";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ComparisonTable />
      <ToolGuides />
      <Quiz />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
