import React from "react";

const DownloadButton = ({ path }: { path: string }) => {
  const handleDownload = () => {
    const date = new Date();
    const dateFilePath = date.toLocaleTimeString();
    const link = document.createElement("a");
    link.href = `/audio/${path}`;
    link.download = `${dateFilePath}-${path}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <div onClick={handleDownload}>Download Mp3</div>;
};

export default DownloadButton;
