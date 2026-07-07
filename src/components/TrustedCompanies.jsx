import { motion } from "framer-motion";

const companies = [
  "Google", "Microsoft", "Stripe", "Meta", "Amazon",
  "Apple", "Netflix", "Tesla", "Adobe", "Spotify",
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 md:py-20 border-y border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-text-tertiary mb-8 uppercase tracking-widest"
        >
          Trusted by top recruiters
        </motion.p>

        <div className="relative overflow-hidden mask-fade-edges">
          <motion.div
            className="flex gap-12 md:gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-text-tertiary/50 hover:text-text-secondary transition-colors duration-300"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight opacity-60 hover:opacity-100 transition-opacity">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .mask-fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}
