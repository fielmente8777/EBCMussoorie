import Link from "next/link";
import BorderLine from "./BorderLine";
import Container from "./Container";
import ImageSwiper from "./ImageSwiper";
import Section from "./Section";

const SliderComponentImage = ({
  title,
  description,
  subDescription,
  images,
  link = "#",
  urlText = "book now",
  border = false,
}) => {
  return (
    <Section className="bg-[#ffffff]">
      <Section>
        {title && (
          <Container>
            <div className="flex flex-col items-center justify-center gap-5">
              {border && <BorderLine />}
              <div className="flex flex-col gap-5">
                <h2 className="lg:text-4xl text-2xl tracking-wider text-center text-[#29422C]">
                  {title}
                </h2>

                <p className="text-center italic  lg:text-xl text-base text-[#29422C] max-w-3xl">
                  {description}
                </p>
              </div>
            </div>
          </Container>
        )}

        <div className={`${title && "mt-12"} block`}>
          <ImageSwiper images={images} />
        </div>
        <Container>
          <div className="flex flex-col items-center justify-center gap-12 mt-12">
            <p className="text-center italic font-normal lg:text-xl text-base text-[#29422C]">
              {subDescription}
            </p>
            <div>
              <Link
                href={link}
                className="px-10 py-3 max-w-full text-base bg-[#29422C] text-[#fff] mt-10"
              >
                {urlText}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </Section>
  );
};

export default SliderComponentImage;
