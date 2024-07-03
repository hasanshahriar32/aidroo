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
      <div className=" border shadow dark:bg-dark p-8   space-y-4 max-w-xl mx-auto  my-10 rounded-lg">
        <form className="  space-y-8 ">
          <div className=" w-32 mx-auto ">
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
          {/* <h1 className="text-lg">
            Forgot password?
            <Link href="/signup" className="text-lg text-primary_color">
              {" "}
              Reset
            </Link>
          </h1> */}
          <h1 className="text-lg">
            Not signed up?
            <Link href="/signup" className="text-lg text-primary_color">
              {" "}
              Sign Up
            </Link>
          </h1>
        </div>
      </div>
    </Layout>
  );
}
