import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import TeamCollaboration from "@/assets/images/TeamCollaboration.svg";
import IdeasFlow from "@/assets/images/IdeasFlow.svg";

const featureItems = [
  {
    icon: "📝",
    title: "Report Lost or Found",
    description: "Quickly submit reports with details and photos.",
  },
  {
    icon: "📍",
    title: "Location Pinning",
    description: "Pin the exact place where the item or pet was lost or found.",
  },
  {
    icon: "🔍",
    title: "Search & Filter",
    description: "Browse by item type, date, or location to find matches.",
  },
  {
    icon: "📷",
    title: "Upload Images",
    description: "Add photos for better recognition.",
  },
  {
    icon: "💬",
    title: "Contact Easily",
    description: "Reach out to report owners directly and safely.",
  },
  {
    icon: "🐕",
    title: "Pet-Specific Reports",
    description: "Designed especially for lost and found pets in your area.",
  },
];

const HomePage = () => {
  return (
    <PageLayout>
      <PageHeader activePath="/" />
      {/* Hero Section */}
      <div className="hero-section-h py-14 mt-5">
        <p className="leading-15 text-center max-w-sm mx-auto text-4xl font-bold md:text-5xl md:max-w-2xl">
          <span className="text-primary">Lost</span> Something?
          <span className="text-primary md:ms-1">Found</span> Something? Let's
          Reunite!
        </p>
        <p className="text-center mt-2 text-gray-400 max-w-[535px] mx-auto">
          FoundIt is your local platform for reporting lost and found items and
          pets in MataasNaKahoy, Batangas.
        </p>
        <div className="flex justify-center mt-8">
          <Button className="cursor-pointer" size={"lg"}>
            Get Started
          </Button>
        </div>
      </div>
      {/* Intro Section */}
      <div className="my-5 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-12">
          <img
            src={TeamCollaboration}
            alt="Team collaboration illustration"
            className="max-w-96 w-full max-h-80 h-full"
          />
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Helping You Find What Matters
            </h2>
            <p className="text-xl mt-2">
              Whether it&apos;s your pet dog, a misplaced wallet, or a found
              phone—<span className="italic">phone—FoundIt</span> makes it easy
              for locals to report and recover lost or found items in
              Mataasnakahoy. We&apos;re here to connect people, not just
              objects.
            </p>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="mb-5 py-14">
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-12">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Why We Built FoundIt
            </h2>
            <p className="text-xl mt-2">
              We noticed how hard it is to find lost items or pets in our town.
              So we created <span className="italic">FoundIt</span>—a simple,
              community-powered platform that brings people together to help
              each other out. With real-time updates, location tracking, and a
              caring local community,{" "}
              <span className="italic">
                FoundIt aims to make lost things found again.
              </span>
            </p>
            <Button
              variant={"secondary"}
              size={"lg"}
              className="mt-8 cursor-pointer"
            >
              Learn More
            </Button>
          </div>
          <img
            src={IdeasFlow}
            alt="Ideas flow illustration"
            className="max-w-96 w-full max-h-80 h-full"
          />
        </div>
      </div>
      {/* Features Section */}
      <div className="py-14">
        <h2 className="text-3xl font-bold md:text-4xl text-center">
          What You Can Do with FoundIt
        </h2>
        {/* Features Grid */}
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {featureItems.map((item) => (
            <div className="w-full" key={item.title}>
              <p className="text-3xl text-center">{item.icon}</p>
              <p className="text-2xl font-bold text-center sm:text-left">
                {item.title}
              </p>
              <p className="text-center sm:text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
