import Container from "./Container";

const SectionWithContainer = ({
  containerClassName,
  children,
  className = "",
  id = "",
}) => {
  return (
    <section
      className={`lg:py-12 py-5 max-w-[1900px] mx-auto ${className}`}
      id={id}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default SectionWithContainer;
