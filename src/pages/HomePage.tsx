import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <PageLayout>
      <PageHeader activePath="/" />
      {/* Hero Section */}
      <div className="hero-section-h pt-14 mt-5">
        <p className="text-center max-w-sm mx-auto text-4xl font-bold md:text-5xl md:max-w-2xl">
          <span className="text-primary">Lost</span> Something?
          <span className="text-primary md:ms-1">Found</span> Something? Let's Reunite!
        </p>
        <p className="text-center mt-2 text-gray-400 max-w-[535px] mx-auto">
          FoundIt is your local platform for reporting lost and found items and
          pets in MataasNaKahoy, Batangas.
        </p>
        <div className="flex gap-2 justify-center mt-8">
          <Button className="cursor-pointer" size={'lg'}>Get Started</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
