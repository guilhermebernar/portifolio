import { TestimonialBlockquote, TestimonialFooter, TestimonialText, TestimonialsSection } from "@/style/components/Testimonials";


export default function Testimonials({ data, getTranslation, language }) {
  return (
    <TestimonialsSection>
      <h2>{getTranslation('testimonialsTitle', language)}</h2>
      <div>
        {data.map((testimonial, index) => (
          <TestimonialBlockquote key={index}>
            <TestimonialText>{testimonial.text}</TestimonialText>
            <TestimonialFooter>
              <strong>{testimonial.name}</strong> - {testimonial.title}
            </TestimonialFooter>
          </TestimonialBlockquote>
        ))}
      </div>
    </TestimonialsSection>
  );
};
