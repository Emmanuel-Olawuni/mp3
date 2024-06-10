"use client";
import React, { useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";

const DownloadButton = ({ path }: { path: string }) => {
  const [download, isDownload] = useState<boolean>(false);
  const handleClick = () => {
    isDownload(true);
  };
  return (
    <>
      {download ? (
        <Spinner label="Downloading ..." />
      ) : (
        <Button className="" onClick={handleClick}>
          <Link download href={path}>
            Download Mp3
          </Link>
        </Button>
      )}
    </>
  );
};

export default DownloadButton;
