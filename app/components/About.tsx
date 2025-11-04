import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 snap-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Use top alignment so title aligns with top of the image */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Section (left) */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative glass-card-static rounded-3xl overflow-hidden h-full w-full">
                {/* Profile image from public folder */}
                <Image
                  src="/about-pic.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section (right) - title aligned to top of image */}
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About <span className="text-primary">Me</span>
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Passionate media design student specializing mainly in front-end web
              development and UI/UX design. Experienced in developing brandings,
              creating high-fidelity prototypes, conducting project research, and
              designing logos. Additionally basic skilled in photography. An
              excellent collaborator, positive attitude and willingness to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
