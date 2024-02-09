// components/Testimonials.js
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  margin-bottom: 4rem;
`;

const TestimonialBlockquote = styled.blockquote`
  border-left: 5px solid #ccc;
  margin: 20px 0;
  padding-left: 20px;
`;

const TestimonialText = styled.p`
  font-style: italic;
`;

const TestimonialFooter = styled.footer`
  margin-top: 10px;
`;

export default function Testimonials({ data, getTranslation, language }) {
  return (
    <TestimonialsSection>
      <h2>{getTranslation('testimonialsTitle', language)}</h2>
      <div>
        {data.map((testimonial, index) => (
          <TestimonialBlockquote key={index}>
            <TestimonialText>"{testimonial.text}"</TestimonialText>
            <TestimonialFooter>
              <strong>{testimonial.name}</strong> - {testimonial.title}
            </TestimonialFooter>
          </TestimonialBlockquote>
        ))}
      </div>
    </TestimonialsSection>
  );
};
