import SignUpForm from "../components/sign-up/sign-up-form";

const SignUp = () => {
  return (
    <section className="flex items-center flex-col gap-8">
      <h1 className="text-4xl font-serif font-thin">
        Get Started With Teachable
      </h1>
      <span>
        Join more than 100,000 creators who've sold over <b>$1 billion.</b> in
        courses and coaching
      </span>
      <SignUpForm />
    </section>
  );
};
export default SignUp;
