import BorderLine from "../../components/BorderLine";
import SectionWithContainer from "../../components/SectionWithContainer";
import Section from "../../components/Section";
import Image from "next/image";
import Link from "next/link";
import { bookingLink } from "../../utils/data";

const AddOnExperience = ({ addOnData }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-4 lg:py-10 py-5">
          <BorderLine />
          <div className="flex flex-col gap-5">
            <h2
              className={`lg:text-4xl text-2xl tracking-wider text-center text-[#fff]`}
            >
              Add-on Experience
            </h2>
          </div>
        </div>
        <SectionWithContainer className="bg-[#ffffff]">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-7">
            {addOnData.map((item, index) => (
              <div
                className="w-full flex flex-col items-center justify-center gap-7"
                key={index}
              >
                <BorderLine />
                <h3 className="text-2xl font-medium tracking-wider text-center text-[#29422C]">
                  {item.title}
                </h3>
                <div className="w-full relative aspect-[4/2.4]">
                  <Image
                    src={item.src || item}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-[#29422C]">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center mt-10">
            <Link
              href={bookingLink}
              target={"_blank"}
              rel="noopener noreferrer"
              className="px-10 py-2 w-fit mx-auto font-medium text-base  text-white bg-[#29422C] rounded-sm border border-[#F69F2B] hover:bg-transparent  hover:text-[#29422C] duration-300 active:scale-75 hover:scale-105 "
            >
              Book Now
            </Link>
          </div>
        </SectionWithContainer>
      </div>
    </div>
  );
};

export default AddOnExperience;
