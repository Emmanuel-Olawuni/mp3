"use client";
import { formPdfInput } from "@/utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { convertToMp3 } from "@/utils/function";

const UploadDocx: React.FC = () => {
  const [loading, isLoading] = useState<boolean>(false);
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
  const gobackHandler = () => {
    setCurrentText(false);
  };

  const goNextHandler = () => {
    convertToMp3(currrentText as string , 'texting.mp3')
  };
  return (
    <>
      {currrentText === false && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <Input
              {...register("name", { required: true, minLength: 2 })}
              aria-invalid={errors.name ? true : false}
            />
            {errors.name?.type === "required" && (
              <p role="alert">This field is required</p>
            )}
            {errors.name?.type === "minLength" && (
              <p role="alert">Minimum character is 2</p>
            )}
            <Input
              {...register("file", { required: true })}
              aria-invalid={errors.file ? true : false}
              name="file"
              type="file"
            />
            {errors.file?.type === "required" && (
              <p role="alert">This field is required</p>
            )}
            <Button type="submit">Convert</Button>
          </form>
        </div>
      )}

      {currrentText !== false && (
        <div>
          <div>
            <p>{currrentText}</p>
          </div>

          <div>
            <Button onClick={gobackHandler}>Go Back</Button>
            <Button onClick={goNextHandler}>Next</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadDocx;
