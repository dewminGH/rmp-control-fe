import { ShadcnLoginForm } from "@/app/components";
import Image from "next/image";
const url =
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/red-and-blue-pillars-wallpaper-abstract-background-free-image.jpeg?w=600&quality=80";

const Login = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <ShadcnLoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block -mr-8">
        <Image
          width={600}
          height={600}
          src={url}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
