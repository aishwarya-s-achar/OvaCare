import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'FemHealth helped me detect my PCOS early and provided a diet plan that has dramatically improved my symptoms.',
      role: 'PCOS Warrior, 32'
    },
    {
      name: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The diet tracker made it so easy to stay on track. After 6 months, I\'ve seen incredible improvements in my health.',
      role: 'Wellness Advocate, 28'
    },
    {
      name: 'Lisa Chen',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'I was struggling with unexplained symptoms for years. FemHealth gave me answers and a path forward.',
      role: 'Teacher, 35'
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear from women who have taken control of their PCOS journey with FemHealth
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              quote={testimonial.quote}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;