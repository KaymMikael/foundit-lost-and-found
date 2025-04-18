import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
  return (
    <PageLayout>
      <PageHeader activePath="/login" />
      <div className="flex justify-center pt-10">
        {/* Redirect to dashboard after login */}
        <Button>Sign in with Google</Button>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
