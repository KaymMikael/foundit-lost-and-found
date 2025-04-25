import { Link } from "react-router";
import { Button } from "./ui/button";

const ReportNotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-red-400 text-2xl">Uh Oh! Report Does Not Exists</p>
      <Button variant={"link"} asChild>
        <Link to={"/dashboard"}>Back to Dashboard</Link>
      </Button>
    </div>
  );
};

export default ReportNotFound;
