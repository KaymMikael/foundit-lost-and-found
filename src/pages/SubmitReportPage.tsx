import SubmitReportForm from "@/components/submit-report-form";

const SubmitReportPage = () => {
  return (
    <div className="max-w-7xl 2xl:mx-auto flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Submit Report</h2>
      {/* Submit Report Form */}
      <SubmitReportForm />
    </div>
  );
};

export default SubmitReportPage;
