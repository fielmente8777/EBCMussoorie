import BorderLine from "./BorderLine";
import SectionWithContainer from "./SectionWithContainer";
const SectionHeading = ({ title, description }) => {
  return (
    <SectionWithContainer className="bg-[#29422C]">
      <div className="flex flex-col items-center justify-center gap-5 py-5 md:py-10">
        <BorderLine />
        <div className="flex flex-col gap-5">
          <h2 className="lg:text-4xl text-2xl tracking-wider text-center text-[#fff]">
            {title}
          </h2>

          <p className="text-center italic font-medium lg:text-xl text-base text-[#fff] max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SectionHeading;
