import NotFoundIllustration from "@/assets/images/NotFoundIllustration.gif";
import PageLayout from "@/components/page-layout";

const PageNotFound = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Texts */}
        <div>
          <p className="text-5xl text-center text-primary font-bold">
            Sorry, this page isn't available
          </p>
          <p className="text-center mt-2 text-gray-400">
            The page you were looking for couldn't be found
          </p>
        </div>
        <img
          src={NotFoundIllustration}
          alt="404 illustration"
          className="max-w-[300px] w-full mx-auto"
        />
      </div>
    </PageLayout>
  );
};

export default PageNotFound;
