import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-text-primary leading-tight">
            Ready to{" "}
            <span className="text-gradient">launch your career</span>?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Join thousands of students who've already found their dream placements.
            Start your journey today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg">
              Create Free Account
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg">
              Talk to Advisor
            </Button>
          </div>
          <p className="mt-6 text-xs text-text-tertiary">No credit card required. Free forever for students.</p>
        </motion.div>
      </div>
    </section>
  );
}
