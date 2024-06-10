"use client";
import React, { useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import Link from "next/link";

const DownloadButton = ({ path }: { path: string }) => {
  return (
    <>
      <Button className="">
        <Link download href={path}>
          Download Mp3
        </Link>
      </Button>
    </>
  );
};

export default DownloadButton;
