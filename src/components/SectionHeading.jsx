import BorderLine from "./BorderLine";
import SectionWithContainer from "./SectionWithContainer";
const SectionHeading = ({
  title,
  subTitle,
  description,
  subDescription,
  titleMaxWidth = false,
  descMaxWidth = false,
  samefontsize = false,
  quote = false,
}) => {
  return (
    <SectionWithContainer className="bg-[#29422C]">
      <div className="flex flex-col items-center justify-center gap-5 py-5 md:py-10">
        <BorderLine />
        <div className="flex flex-col gap-5">
          <h1
            className={`lg:text-[40px] font-[400] text-center text-[#fff] ${titleMaxWidth && "max-w-2xl mx-auto"} w-full`}
            style={{lineHeight:"48px"}}
          >
            {title}
          </h1>
          {subTitle && (
            <h3
              className={`${samefontsize ? "lg:text-4xl text-2xl" : "lg:text-2xl text-xl"} -mt-4 tracking-wider text-center text-[#fff] ${titleMaxWidth && "max-w-4xl mx-auto"} w-full`}
            >
              {subTitle}
            </h3>
          )}

          <p
            className={`text-center italic font-medium lg:text-2xl text-base text-[#fff] ${descMaxWidth && "max-w-4xl mx-auto"} w-full`}
          >
            {description}
          </p>
          {subDescription && (
            <p
              className={`text-center italic font-medium lg:text-xl text-base text-[#fff] ${descMaxWidth && "max-w-4xl mx-auto"} w-full`}
            >
              {subDescription}
            </p>
          )}
          {quote && (
              <p className="lg:text-2xl mt-6 text-base text-white text-center italic">
                &quot;A pet-friendly escape where your furry companions are
                always welcome.&quot;
              </p>
            )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SectionHeading;
