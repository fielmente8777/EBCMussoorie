import Image from "next/image";

const GridBanner = ({ src1, src2, title, description }) => {
  return (
    <section className="max-w-[1900px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 relative w-full aspect-square">
          <Image
            src={src1 || src1.src}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 lg:px-24 max-md:py-7 max-md:px-5 tracking-widest bg-[#F1EECB] flex flex-col justify-center items-center gap-5">
          <h1 className="lg:text-4xl text-2xl text-center text-black uppercase">
            {title}
          </h1>
          <p className="lg:text-xl text-center text-[#29422C] italic">
            {description}
          </p>
        </div>
        <div className="col-span-1 relative w-full aspect-square">
          <Image
            src={src2 || src2.src}
            alt={title}
            fill
            className="object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
};

export default GridBanner;
