import Navbar from "./navbar";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";

const PrimaryLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Separator className="h-px bg-primary" />
      <main className="p-11">{children}</main>
      <Toaster />
    </>
  );
};
export default PrimaryLayout;
