"use client";
import { formPdfInput } from "@/utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import Conversion from "./Conversion";
import { Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";

const UploadDocx: React.FC = () => {
  const [currrentText, setCurrentText] = useState<string | boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formPdfInput>();

  const onSubmit: SubmitHandler<formPdfInput> = async (data) => {
    isLoading(true);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.text !== "") {
        toast.success("Text Extracted Successfully!.");
        setCurrentText(response.data.text);
        isLoading(false);
      } else {
        toast.error("Unable to extract text");
        isLoading(false)
      }
    } catch (error) {
      toast.error("Unable to extract text");
      isLoading(false);
    }
  };

  return (
    <>
      {currrentText === false && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="upload" className=" text-md font-bold ">
                Upload a file
              </Label>
              <Input
                {...register("file", { required: true })}
                aria-invalid={errors.file ? true : false}
                name="file"
                type="file"
                id="upload"
              />
            </div>
            {errors.file?.type === "required" && (
              <p role="alert" className=" text-destructive">
                This field is required
              </p>
            )}
            {loading ? (
              <Spinner label="Please wait .." />
            ) : (
              <Button type="submit">Convert</Button>
            )}
          </form>
        </div>
      )}

      {currrentText !== false && (
        <Conversion
          text={currrentText}
          setCurrentTextFunction={setCurrentText}
        />
      )}
    </>
  );
};

export default UploadDocx;
