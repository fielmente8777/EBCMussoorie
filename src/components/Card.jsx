import Link from "../../node_modules/next/link";
import BorderLine from "./BorderLine";
import SectionWithContainer from "./SectionWithContainer";

const Card = ({
  title,
  description,
  link,
  urlText,
  newTabe = false,
  descriptionArray,
}) => {
  return (
    <SectionWithContainer>
      <div className="w-full bg-[#F1EECB] flex flex-col gap-6 justify-center items-center lg:py-14 py-8 px-6">
        <BorderLine />
        <h2 className="lg:text-4xl text-2xl tracking-wider text-center text-[#29422C]">
          {title}
        </h2>

        {description && (
          <p className="text-center italic  lg:text-xl text-base text-[#29422C] max-w-4xl">
            {description}
          </p>
        )}
        {descriptionArray && (
          <>
            {descriptionArray.map((item, index) => (
              <p
                key={index}
                className="text-center italic  lg:text-xl text-base text-[#29422C] max-w-4xl"
              >
                {item}
              </p>
            ))}
          </>
        )}
        <Link
          href={link}
          target={newTabe ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="px-10 py-2 max-w-full font-medium text-base  text-white bg-[#29422C] rounded-sm border border-[#F69F2B] hover:bg-transparent  hover:text-[#29422C] duration-300 active:scale-75 hover:scale-105 "
        >
          {urlText}
        </Link>
      </div>
    </SectionWithContainer>
  );
};

export default Card;
