import { Card, CardContent } from "@/components/ui/card";
import { Activity, ClipboardList, Handshake } from "lucide-react";

const QuickStatsSummary = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardContent>
          <ClipboardList size={28} />
          <p className="text-2xl font-bold mt-4 mb-2">Reports Created</p>
          <p className="text-xl text-gray-400">25</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Handshake size={28} />
          <p className="text-2xl font-bold mt-2 mb-4">Reunited / Found</p>
          <p className="text-xl text-gray-400">25</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Activity size={28} />
          <p className="text-2xl font-bold mt-2 mb-4">Active Reports</p>
          <p className="text-xl text-gray-400">25</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickStatsSummary;
