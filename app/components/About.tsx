import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Image Section (left) */}
          <div className="relative flex items-center">
            <div className="relative aspect-square w-full max-w-xs mx-auto">
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

          {/* Content Section (right) - aligned to match image height */}
          <div className="flex flex-col justify-between py-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
              About <span className="text-primary">Me</span>
            </h2>

            <p className="text-lg text-foreground/70 leading-relaxed">
              Passionate media design student specializing mainly in front-end web
              development and UI/UX design. Experienced in developing brandings,
              creating high-fidelity prototypes, conducting project research, and
              designing logos. Additionally basic skilled in photography. An
              excellent collaborator, responsible and reliable, positive attitude and willingness to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
