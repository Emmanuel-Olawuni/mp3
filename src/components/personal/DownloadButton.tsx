import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const DownloadButton = ({ path }: { path: string }) => {
  console.log(path);
  return (
    <>
      <Link
        download
        href={path}
        className=" w-full rounded-md text-white flex justify-center px-4 py-2 bg-primary shadow-primary shadow-md  text-primary font-semibold text-medium"
      >
        Download Mp3
      </Link>
    </>
  );
};

export default DownloadButton;
