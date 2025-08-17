"use client";

import {
  Award,
  ChevronLeft,
  ChevronRight,
  Heart,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import MotionDiv from "./ui/MotionDiv";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "High School Physics Teacher",
      quote:
        "Vignam has completely revolutionized how I teach complex physics concepts. My students are now excited about quantum mechanics!",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBmYWNlfGVufDB8fDB8fHww",
      rating: 5,
      subject: "Physics",
      experience: "8 years",
      impact: "98% student engagement",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Rahul Mehta",
      role: "Engineering Student",
      quote:
        "The interactive simulations helped me visualize thermodynamics in ways textbooks never could. Game changer for STEM learning!",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      subject: "Engineering",
      experience: "3rd Year",
      impact: "40% grade improvement",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chemistry Professor",
      quote:
        "My organic chemistry students finally grasp molecular interactions through these beautiful 3D visualizations. Outstanding platform!",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      subject: "Chemistry",
      experience: "12 years",
      impact: "Students love chemistry",
      color: "from-green-500 to-teal-500",
    },
    {
      name: "Marcus Rodriguez",
      role: "Medical Student",
      quote:
        "Studying anatomy has never been this immersive. I can explore the human body in ways that make everything click instantly!",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      subject: "Medicine",
      experience: "2nd Year",
      impact: "Top 10% of class",
      color: "from-red-500 to-orange-500",
    },
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Award, value: "4.9", label: "Average Rating" },
    { icon: Heart, value: "99%", label: "Satisfaction" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setAutoPlay(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <MotionDiv className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-600 mb-4">
            <Quote className="w-4 h-4" />
            Real Stories, Real Impact
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            What People Say About Vignam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of educators and students who've transformed their
            learning experience
          </p>
        </MotionDiv>

        {/* Stats */}
        <MotionDiv
          delay={0.2}
          className="flex justify-center items-center gap-8 mb-16"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-800">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </MotionDiv>

        {/* Main Testimonial Carousel */}
        <MotionDiv delay={0.4} className="relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Background gradient for active testimonial */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].color} opacity-5 transition-all duration-700`}
            />

            <div className="relative z-10">
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-x-1 group"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:translate-x-1 group"
              >
                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
              </button>

              {/* Testimonial Content */}
              <div className="text-center px-16 py-8">
                <div className="mb-6">
                  <img
                    src={testimonials[activeIndex].img}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 rounded-full mx-auto shadow-xl ring-4 ring-white/50 transition-all duration-700"
                  />
                </div>

                <div className="mb-4 flex justify-center">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>

                <blockquote className="text-2xl font-medium text-slate-700 mb-6 leading-relaxed max-w-4xl mx-auto">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                <div className="mb-4">
                  <h4 className="text-xl font-bold text-slate-800">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {testimonials[activeIndex].role}
                  </p>
                </div>

                <div className="flex justify-center gap-6 text-sm text-gray-600">
                  <span className="bg-blue-50 px-3 py-1 rounded-full">
                    📚 {testimonials[activeIndex].subject}
                  </span>
                  <span className="bg-green-50 px-3 py-1 rounded-full">
                    ⏱️ {testimonials[activeIndex].experience}
                  </span>
                  <span className="bg-purple-50 px-3 py-1 rounded-full">
                    📈 {testimonials[activeIndex].impact}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setAutoPlay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </MotionDiv>

        {/* Grid of All Testimonials */}
        <MotionDiv delay={0.6} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  hoveredCard === idx ? "scale-105 z-10" : ""
                } ${activeIndex === idx ? "ring-2 ring-blue-400" : ""}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  setActiveIndex(idx);
                  setAutoPlay(false);
                }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 ring-2 ring-white shadow-md"
                    />

                    <div className="mb-3 flex justify-center">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 italic">
                      "{testimonial.quote}"
                    </p>

                    <div className="text-center">
                      <h4 className="font-semibold text-slate-800 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                      <div className="text-xs text-blue-600 mt-1">
                        {testimonial.subject}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

        {/* Call to Action */}
        <MotionDiv delay={0.8} className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Learning?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of educators and students who've already
              revolutionized their educational experience with Vignam.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Your Journey Today
            </button>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
