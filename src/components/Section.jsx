const Section = ({ children, className = "", id = "" }) => {
  return (
    <section
      className={`lg:py-10 py-5 max-w-[1900px] mx-auto w-full ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
