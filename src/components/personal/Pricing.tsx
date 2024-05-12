import { pricingData } from "@/utils/utils";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { MdCheckBox } from "react-icons/md";

export default function PricingTab() {
  return (
    <div className="bg-white py-16 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-wide text-gray-900 sm:text-4xl">
            Pricing Plan
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 underline underline-offset-4">
            Choose the Plan That Fits Your Needs.
          </p>
        </div>
        {pricingData.map((x) => (
          <div
            key={x.id}
            className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
          >
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {x.title} membership
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">{x.desc}</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-750">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {x.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 lowercase">
                    <MdCheckBox
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    {x.tag}
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      ${x.amount}
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <Button
                    color="primary"
                    variant="solid"
                    className="mt-10 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 F"
                  >
                    <Link href="#">Get access</Link>
                  </Button>
                  <p className="mt-6 text-xs leading-5 text-gray-600 underline underline-offset-4">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
