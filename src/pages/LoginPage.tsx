import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    toast.success("Login Successful", {
      description:
        "You are now logged in and being redirected to the dashboard.",
    });

    // redirect to dashboard after 3 seconds
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  };

  return (
    <PageLayout>
      <PageHeader activePath="/login" />
      <div className="flex justify-center pt-10">
        {/* Redirect to dashboard after login */}
        <Button className="cursor-pointer" onClick={handleSignInClick}>Sign in with Google</Button>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
