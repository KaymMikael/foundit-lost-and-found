import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import config from "@/config/config";
import db from "@/instantdb/database";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [nonce] = useState(crypto.randomUUID());
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageHeader activePath="/login" />
      <div className="flex justify-center pt-20">
        <GoogleLogin
          nonce={nonce}
          onError={() => alert("Login failed")}
          onSuccess={({ credential }) => {
            db.auth
              .signInWithIdToken({
                clientName: config.GOOGLE_CLIENT_NAME,
                idToken: credential as string,
                // Make sure this is the same nonce you passed as a prop
                // to the GoogleLogin button
                nonce,
              })
              .then(() => {
                navigate("/new-profile");
              })
              .catch((err) => {
                alert("Uh oh: " + err.body?.message);
              });
          }}
        />
      </div>
    </PageLayout>
  );
};

export default LoginPage;
