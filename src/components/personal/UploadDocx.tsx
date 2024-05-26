"use client";
import { formPdfInput } from "@/utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import Conversion from "./Conversion";

const UploadDocx: React.FC = () => {
  const [currrentText, setCurrentText] = useState<string | boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formPdfInput>();

  const onSubmit: SubmitHandler<formPdfInput> = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.text !== "") {
        setCurrentText(response.data.text);
      } else {
        // unable to convert your file
      }
    } catch (error) {
      console.log(error);
      //   error uploading the file
    }
  };

  return (
    <>
      {currrentText === false && (
        <div>
          <h4> Let's Upload a docx today</h4>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Label htmlFor="name" className=" text-md font-bold ">
                Name
              </Label>
              <Input
                {...register("name", { required: true, minLength: 2 })}
                aria-invalid={errors.name ? true : false}
                placeholder="e.g My Notes"
                id="name"
              />
            </div>
            {errors.name?.type === "required" && (
              <p role="alert" className=" text-destructive">
                This field is required
              </p>
            )}
            {errors.name?.type === "minLength" && (
              <p role="alert" className=" text-destructive">
                Minimum character is 2
              </p>
            )}

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
            <Button type="submit">Convert</Button>
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
