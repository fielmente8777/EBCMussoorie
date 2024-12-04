import BorderLine from "./BorderLine";
import SectionWithContainer from "./SectionWithContainer";

const NewsLatter = () => {
  return (
    <SectionWithContainer>
      <div className="w-full bg-[#F1EECB] flex flex-col gap-6 justify-center items-center lg:py-14 py-8">
        <BorderLine />
        <h2 className="lg:text-4xl text-2xl tracking-wider text-center text-[#29422C]">
          Home Alone with Nature!
        </h2>

        <p className="text-center italic  lg:text-xl text-base text-[#29422C] max-w-3xl">
          You’re in for a wild time! The experiences and activities that await
          you at the campsite are nothing less than a love affair with deodars,
          magpies, and untouched serenity.
        </p>
        <form className="flex flex-col justify-center w-full items-center gap-4">
          <input
            type="email"
            placeholder="Your Email Address"
            className="border-b border-[#29422C] py-1 bg-transparent text-lg max-w-sm w-full placeholder:text-center text-center text-[#29422C] focus:outline-none placeholder:text-[#29422C]/70"
          />
          <button
            type="submit"
            className="px-10 py-3 max-w-full font-medium text-base  text-white bg-[#29422C] rounded-sm border border-[#F69F2B] hover:bg-transparent  hover:text-[#29422C] duration-300 active:scale-75 hover:scale-105 "
          >
            Subscribe
          </button>
        </form>
      </div>
    </SectionWithContainer>
  );
};

export default NewsLatter;
