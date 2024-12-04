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
}) => {
  return (
    <SectionWithContainer className="bg-[#29422C]">
      <div className="flex flex-col items-center justify-center gap-5 py-5 md:py-10">
        <BorderLine />
        <div className="flex flex-col gap-5">
          <h2
            className={`lg:text-4xl text-2xl tracking-wider text-center text-[#fff] ${titleMaxWidth && "max-w-2xl mx-auto"} w-full`}
          >
            {title}
          </h2>
          {subTitle && (
            <h3
              className={`${samefontsize ? "lg:text-4xl text-2xl" : "lg:text-2xl text-xl"} -mt-4 tracking-wider text-center text-[#fff] ${titleMaxWidth && "max-w-4xl mx-auto"} w-full`}
            >
              {subTitle}
            </h3>
          )}

          <p
            className={`text-center italic font-medium lg:text-xl text-base text-[#fff] ${descMaxWidth && "max-w-4xl mx-auto"} w-full`}
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
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default SectionHeading;
