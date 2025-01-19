import { Link } from "@tanstack/react-router";

import ProductLogo from "@/components/ProductLogo";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import LoginForm from "./components/loginForm";

function LoginPage() {
  return (
    <div className=" grid grid-cols-2 w-full h-lvh">
      <div className="bg-fade-bg py-8 px-4 flex items-start">
        <ProductLogo />
      </div>
      <div className=" w-full p-8 flex gap-4 justify-center items-center flex-col min-w-[500px] max-w-[600px] mx-auto my-0 ">
        <LoginForm />
        <Label>or</Label>
        <div className=" w-full justify-center  flex items-center">
          <Button variant="link">
            <p>Register here?</p>
            <Link to="/signup" className="text-secondary-text">
              Signup
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
