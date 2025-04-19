import NewProfileForm from "@/components/new-profile-form";
import PageLayout from "@/components/page-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const NewProfilePage = () => {
  return (
    <PageLayout>
      <Card className="max-w-[450px] mx-auto">
        <CardHeader>
          <CardTitle>Create Your Profile</CardTitle>
          <CardDescription>
            Welcome! Fill out the form below to set up your personal profile and
            unlock access to your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NewProfileForm />
        </CardContent>
      </Card>
    </PageLayout>
  );
};

export default NewProfilePage;
