import React from "react";
import TestimonialCard from "./TestimonialCard";
import Section from "../Section";
import Container from "../Container";
import BorderLine from "../BorderLine";

const Testimonial = () => {
  return (
    <Section>
      <Container className="lg:py-12 py-6">
        <div className="flex flex-col items-center gap-6 py-8 bg-[#F1EECB] rounded-lg w-full">
          <BorderLine />
          <h2 className="heading_2">Testimonials</h2>
          <TestimonialCard />
        </div>
      </Container>
    </Section>
  );
};

export default Testimonial;
