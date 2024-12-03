import Image from "next/image";
import Link from "next/link";
import SectionWithContainer from "./SectionWithContainer";
import BorderLine from "./BorderLine";

const TwoColgridCard = ({
  src,
  title,
  description,
  link,
  urlText,
  subTitle,
}) => {
  return (
    <SectionWithContainer>
      <div className="w-full grid lg:grid-cols-2 gap-5 items-center justify-center">
        <div className="w-full relative aspect-square rounded-full overflow-hidden">
          <Image src={src} alt={title} fill className="object-cover object-center" />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <BorderLine />
          <h2 className="lg:text-4xl text-2xl tracking-wider text-center text-white">{title}</h2>
          {subTitle && <p className="text-center">{subTitle}</p>}
          <p className="text-center italic  lg:text-xl text-base text-white">{description}</p>
          <div className="flex items-center justify-center">
            <Link
              href={link}
              className="px-10 py-3 max-w-full font-medium text-base  text-[#29422C] bg-white rounded-sm border border-[#F69F2B] hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-white"
            >
              {urlText}
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TwoColgridCard;
