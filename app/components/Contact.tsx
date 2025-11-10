export default function Contact() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "kalinovskiydan@gmail.com",
      href: "mailto:kalinovskiydan@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/electromalina",
      href: "https://github.com/electromalina",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/electromalina",
      href: "https://linkedin.com/in/electromalina",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-section py-24"
    >
      <div className="text-center mb-12 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Project text + CTA placed under the title */}
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-foreground/70 mb-4 text-lg">
            Have a project in mind? Let&apos;s turn your idea into a reality.
          </p>
          <a
            href="mailto:kalinovskiydan@gmail.com"
            className="inline-flex items-center px-10 py-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full font-medium text-foreground hover:bg-primary/30 hover:glow-primary transition-all duration-300 hover:scale-105"
          >
            Send Me a Message
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 text-center hover:border-primary/50 hover:glow-primary hover:scale-[1.02] transition-transform duration-300 focus:outline-none min-h-[160px] sm:min-h-[140px]"
            >
              <div className="text-primary mb-4 flex justify-center">
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {method.label}
              </h3>
              <p className="text-sm text-foreground/60 font-mono break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
