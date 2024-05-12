import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdFacebook, MdOutlineFacebook } from 'react-icons/md'
import { FaGoogle , FaFacebookF} from 'react-icons/fa6'

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <Input
                  placeholder="example@gmail.com"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-normal underline underline-offset-2 text-primary"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 hover:text-primary hover:border-1 hover:border-primary py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-700">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-primary hover:text-primary"
            >
              Start a 14 day free trial
            </a>
          </p>

          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <p className=" text-muted-foreground px-3 py-4  text-xs">
              Or continue with
            </p>
            <div className="button flex flex-col gap-3">
              <Button className="flex w-full justify-center rounded-md hover:bg-primary px-3  border-1 border-primary py-1.5 text-sm font-semibold leading-6 hover:text-white shadow-sm bg-transparent focus-visible:outline  text-primary focus-visible:outline-2 focus-visible:outline-offset-2 ">
           <FaGoogle className="px-4 " size={26} />    Google
              </Button>
              <Button className="flex w-full justify-center rounded-md bg-primary px-3 hover:text-primary hover:border-1 hover:border-primary py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
               <FaFacebookF className=" px-4" size={26}/>    Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
