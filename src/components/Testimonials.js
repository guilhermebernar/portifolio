// components/Testimonials.js

export default function Testimonials({ data, getTranslation, language }) {
  return (
    <section>
      <h2>{getTranslation('testimonialsTitle', language)}</h2>
      <div className="testimonials-container">
        {data.map((testimonial, index) => (
          <blockquote key={index} className="testimonial">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <footer className="testimonial-author">
              <strong>{testimonial.name}</strong> - {testimonial.title}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};