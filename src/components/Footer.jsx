const footerLinks = {
  Platform: ["Smart Matching", "Resume Builder", "Drive Schedule", "Analytics", "Pricing"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Support: ["Help Center", "Documentation", "API Status", "Community", "Guidelines"],
  Legal: ["Privacy", "Terms", "Security", "Cookies", "GDPR"],
};

export default function Footer() {
  return (
    <footer className="border-t border-glass-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-electric flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6 L16 26 M10 12 L22 12 M10 16 L22 16 M10 20 L18 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M22 20 L26 24 M26 20 L22 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-lg font-bold text-text-primary">Placed</span>
            </a>
            <p className="text-sm text-text-tertiary leading-relaxed max-w-xs">
              The modern campus recruitment platform. Connecting talent with
              opportunity.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-tertiary hover:text-text-secondary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-glass-border">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Placed. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-text-tertiary hover:text-text-primary transition-colors duration-200 text-xs font-medium"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
