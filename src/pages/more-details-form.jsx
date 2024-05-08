import DetailForm from "../components/sign-up/detail-form";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const MoreDetailForm = () => {
  const [value, setValue] = useState(50);

  return (
    <section className="flex items-center flex-col gap-8">
      <Progress
        className="rounded-none"
        progressClassName="rounded-full bg-emerald-300"
        value={value}
      />
      <h1 className="text-3xl font-serif font-thin">
        Tell us a little more about yourself
      </h1>
      <span>
        Your answers will help us build an experience to match your needs.
      </span>
      <DetailForm setValue={setValue} />
    </section>
  );
};
export default MoreDetailForm;
