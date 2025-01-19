import ProductLogo from "@/components/ProductLogo";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import SignupForm from "./components/signupForm";

const SignupPage = () => {
  return (
    <div className="grid grid-cols-2 w-full h-lvh">
      <div className="bg-fade-bg py-8 px-4 flex items-start">
        <ProductLogo />
      </div>

      <div className="p-8 flex gap-4 justify-center items-center flex-col min-w-[500px] max-w-[600px] mx-auto my-0 ">
        <SignupForm />
        <div className=" w-full justify-center  flex items-center">
          <Button variant="link">
            <p>Already a customer ?</p>
            <Link to="/login" className="text-secondary-text">
              Login
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
