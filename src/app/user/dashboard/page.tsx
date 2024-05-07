import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MdInfoOutline } from "react-icons/md";
const page = () => {
  return (
    <main>
      <div className="h2">
        <h2> Welcome Back , Emmanuel</h2>

        <p className="text-muted-foreground">
          {" "}
          Ler's convert some docx to mp3 today
        </p>
        <div>
          <Alert>
            <MdInfoOutline className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </main>
  );
};

export default page;
