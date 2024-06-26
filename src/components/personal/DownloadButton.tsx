import React from "react";
import { Button, Spinner } from "@nextui-org/react";
import useDownloader from "react-use-downloader";

const DownloadButton = ({ fileName }: { fileName: string }) => {
  const { download, isInProgress, cancel, error } =
    useDownloader();
  const fileUrl = `/audio/${fileName}.mp3`;
  return (
    <>
      <div className=" flex flex-col gap-3 mt-4 p-2 items-center justify-center max-w-xl">
        {" "}
        {isInProgress ? (
          <Spinner label="Downloading ..." />
        ) : (
          <Button
            variant="flat"
            color="primary"
            onClick={() => download(fileUrl, `${fileName}.mp3`)}
          >
            Download Mp3
          </Button>
        )}
      </div>
      {error && <p>possible error {JSON.stringify(error)}</p>}
    </>
  );
};

export default DownloadButton;
