import MotionDiv from "./ui/MotionDiv";

export default function ShowcaseSection() {
  const showcases = [
    {
      title: "Engaging Science Learning",
      desc: "Turn static text into interactive experiences.",
      img: "https://via.placeholder.com/400x300",
    },
    {
      title: "Built for Educators",
      desc: "Save time preparing lessons with pre-made modules.",
      img: "https://via.placeholder.com/400x300",
    },
  ];

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {showcases.map((s, idx) => (
          <MotionDiv key={idx} delay={idx * 0.3}>
            <div
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full md:w-1/2 rounded-xl shadow-lg"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-brand.dark">
                  {s.title}
                </h3>
                <p className="mt-4 text-gray-600">{s.desc}</p>
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
