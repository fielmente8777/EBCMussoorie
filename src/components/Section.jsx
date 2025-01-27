const Section = ({ children, className = "", id = "" }) => {
  return (
    <section
      className={`lg:py-12 py-8 max-w-[1900px] mx-auto w-full ${className}`}
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
