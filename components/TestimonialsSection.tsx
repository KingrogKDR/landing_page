import MotionDiv from "./ui/MotionDiv";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Educator",
      quote: "Vignam has transformed my classroom experience!",
      img: "https://via.placeholder.com/80",
    },
    {
      name: "Rahul Mehta",
      role: "Student",
      quote: "I finally understand tough topics through simulations.",
      img: "https://via.placeholder.com/80",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand.gray">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <MotionDiv>
          <h2 className="text-4xl font-bold mb-12 text-brand.dark">
            What People Say
          </h2>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <MotionDiv key={idx} delay={idx * 0.3}>
              <div className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="italic text-gray-700">“{t.quote}”</p>
                <h4 className="mt-4 font-semibold text-brand.dark">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
