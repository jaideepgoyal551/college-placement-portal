import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    name: "Priya Sharma",
    role: "Software Engineer @ Google",
    image: "PS",
    quote: "Placed completely transformed how I approached campus placements. The mock interviews and resume builder were game-changers. I went from nervous to confident in just two weeks.",
    package: "24 LPA",
  },
  {
    name: "Arjun Mehta",
    role: "Product Manager @ Stripe",
    image: "AM",
    quote: "The smart matching algorithm found opportunities I wouldn't have discovered otherwise. The real-time dashboard kept me on track throughout the entire process.",
    package: "32 LPA",
  },
  {
    name: "Neha Kapoor",
    role: "ML Engineer @ Meta",
    image: "NK",
    quote: "What sets Placed apart is the community. I connected with alumni who guided me through every round. The peer support system is incredible.",
    package: "28 LPA",
  },
  {
    name: "Rahul Verma",
    role: "SDE @ Amazon",
    image: "RV",
    quote: "From sorting my resume to scheduling interviews, Placed handled everything. It's like having a personal placement officer available 24/7.",
    package: "26 LPA",
  },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="stories" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-brand mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
            Real stories from{" "}
            <span className="text-gradient">placed students</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 glass-card p-8 md:p-10 flex flex-col justify-between"
              >
                <div>
                  <svg className="w-10 h-10 text-text-tertiary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>
                  <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
                    "{stories[activeIndex].quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full bg-blue-electric flex items-center justify-center text-sm font-bold text-white"
                    >
                      {stories[activeIndex].image}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{stories[activeIndex].name}</p>
                      <p className="text-sm text-text-tertiary">{stories[activeIndex].role}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-emerald-brand">
                    {stories[activeIndex].package}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-3">
            {stories.map((story, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left glass rounded-xl p-4 md:p-5 transition-all duration-300 ${
                  i === activeIndex
                    ? "border-blue-electric/30 bg-blue-electric/5"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-full bg-blue-electric flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  >
                    {story.image}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-text-primary text-sm">{story.name}</p>
                    <p className="text-xs text-text-tertiary truncate">{story.role}</p>
                  </div>
                  <span className="ml-auto text-xs font-semibold text-emerald-brand flex-shrink-0">
                    {story.package}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
