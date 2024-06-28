import logo from "@/asserts/aidroo-logo.svg";
import Layout from "@/components/Layout/Layout";
import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function Login() {
  return (
    <Layout title="Login">
      <div className="bg-light dark:bg-dark p-8   space-y-4 w-1/2 mx-auto border-2 my-10 rounded-lg">
        <form className="  space-y-8 ">
          <div className=" w-44 mx-auto ">
            <Link href="/">
              <ResponsiveImage
                src={logo}
                alt="aidroo logo image"
                width={500}
                height={300}
              />
            </Link>
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email or username"
              className="bg-white dark:bg-gray-800  h-12"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password"
              className="bg-white dark:bg-gray-800  h-12"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Login
            </label>
          </div>
          <Button variant="fillButton" className="h-12 text-xl">
            Login
          </Button>
        </form>
        <div className=" w-full flex flex-col items-center justify-center ">
          <h1 className="text-xl">
            Forgot password?
            <span className="text-2xl text-primary_color"> Reset</span>
          </h1>
          <h1 className="text-xl">
            Not signed up?
            <span className="text-2xl text-primary_color"> Sign Up</span>
          </h1>
        </div>
      </div>
    </Layout>
  );
}
