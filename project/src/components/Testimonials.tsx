import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "NovusDesign transformed our online presence completely. Their team not only delivered a stunning website but also helped us develop a comprehensive digital strategy that has significantly increased our customer engagement.",
    author: "Alex Thompson",
    position: "CEO, Thompson Enterprises",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "Working with NovusDesign was a game-changer for our brand. Their creative approach and technical expertise helped us stand out in a competitive market. The team was responsive, professional, and truly invested in our success.",
    author: "Jessica Chen",
    position: "Marketing Director, InnoTech",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "The mobile app developed by NovusDesign exceeded our expectations in every way. From the intuitive user interface to the robust functionality, they delivered a product that our customers love using. I highly recommend their services.",
    author: "Mark Rodriguez",
    position: "Founder, GreenLife",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  }, [current]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 text-white"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                    <Quote className="text-accent-500 h-10 w-10 mb-6" />
                    <p className="text-lg mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-gray-300">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5 md:-translate-x-10 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-300"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5 md:translate-x-10 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === index ? 'bg-accent-500' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;