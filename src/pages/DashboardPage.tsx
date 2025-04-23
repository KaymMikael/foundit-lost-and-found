import MyReportsSection from "@/components/MyReportsSection";
import QuickStatsSummary from "@/components/quick-stats-summary";

const DashboardPage = () => {
  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      {/* Personal Greeting */}
      <p className="text-2xl md:text-3xl font-semibold">
        Hi User, welcome back!
      </p>
      {/* Quick Stats Summary */}
      <QuickStatsSummary />
      {/* My Reports */}
      <MyReportsSection />
    </div>
  );
};

export default DashboardPage;
