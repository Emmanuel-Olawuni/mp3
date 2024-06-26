import { conversionType } from "@/utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider, Spinner } from "@nextui-org/react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { voicesText } from "@/utils/utils";
import { Textarea } from "../ui/textarea";
import { removeSpacesKeepNewlines } from "@/utils/function";
import DownloadButton from "./DownloadButton";
import { toast } from "react-toastify";

const Conversion = ({
  text,
  setCurrentTextFunction,
}: {
  text: string | boolean;
  setCurrentTextFunction: React.Dispatch<
    React.SetStateAction<string | boolean>
  >;
}) => {
  const [download, setDownload] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);
  const [fileName, setPath] = useState<string>("");
  const strippedText = removeSpacesKeepNewlines(text as string);

  const gobackHandler = () => {
    setCurrentTextFunction(false);
  };

  const formSchema = z.object({
    filename: z
      .string({
        invalid_type_error: "Invalid text format",
        required_error: "Name is required",
      })
      .min(2, {
        message: "Username must be at least 2 characters",
      }),
    text: z
      .string({
        invalid_type_error: "Invalid text format",
      })
      .min(20, {
        message: "Username must be at least 20 characters",
      }),
    voice: z
      .string({
        invalid_type_error: "Invalid text format",
      })
      .min(2, {
        message: "Please select a voice",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filename: "",
      text: strippedText,
      // speed: 1,
      voice: "",
      // pitch: "",
    },
  });
  async function onsubmit(values: z.infer<typeof formSchema>) {
    isLoading(true);
    try {
      const response = await axios.post("/api/text", values);
      if (response.status === 200) {
        toast.success("Enabling download button!");

        setPath(response.data.fileName);
        isLoading(false);
        setDownload(true);
      } else {
        toast.error("Unable to convert. Try again later.");
        isLoading(false);
        setDownload(false);
      }
    } catch (error) {
      console.log(error)
      toast.error("Connection failed. try again later");
      isLoading(false);
      setDownload(false);
    }
  }

  return (
    <div>
      <div>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onsubmit)}>
            <FormField
              control={form.control}
              name="filename"
              render={({ field }) => (
                <FormItem>
                  {/* <div className="mt-2"> */}
                  <label className="  block text-sm font-semibold leading-6 text-gray-900">
                    File Name
                  </label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="my books"
                      id="name"
                      name="name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </FormControl>
                  <FormDescription>Audio file name</FormDescription>

                  {/* </div> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  {/* <div className="mt-2"> */}
                  <label className="  block text-sm font-semibold leading-6 text-gray-900">
                    {/* <div className="flex items-center justify-between"> */}
                    Text
                    {/* </div> */}
                  </label>
                  <FormControl>
                    <Textarea
                      {...field}
                      defaultValue={strippedText}
                      cols={20}
                      rows={15}
                      id="text"
                      name="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </FormControl>
                  {/* </div> */}
                  <FormDescription>You can edit the text</FormDescription>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="voice"
              render={({ field }) => (
                <FormItem>
                  <label className="  block text-sm font-semibold leading-6 text-gray-900">
                    Voice
                  </label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a voice to use" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {voicesText.map((x) => (
                        <SelectItem value={x.name} key={x.id}>
                          {x.name}, {x.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="speed"
              render={({ field }) => (
                <FormItem>
                  <label className="  block text-sm font-semibold leading-6 text-gray-900">
                    Text Speed
                  </label>

                  <FormControl>
                    <Slider
                      value={field.value}
                      onChange={field.onChange}
                      step={1}
                      minValue={-10}
                      defaultValue={1}
                      maxValue={10}
                    />
                  </FormControl>
                  <p>{field.value}</p>
                  <FormDescription>
                    Text Speed within -10 to +10
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <div>
              <Button onClick={gobackHandler} type="button">
                Go Back
              </Button>
              {loading ? (
                <Spinner
                  label="loading mp3..."
                  className={` ${
                    download ? " hidden " : " flex"
                  }  w-full justify-center rounded-md  text-sm font-semibold leading-6`}
                />
              ) : (
                <Button
                  type="submit"
                  className={`flex w-full justify-center rounded-md bg-primary px-3 mt-4 hover:text-primary hover:border-1 hover:border-primary py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Convert and Download
                </Button>
              )}
              {download && <DownloadButton fileName={fileName} />}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Conversion;
