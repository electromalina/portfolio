import { createServer } from "@/lib/supabase/server";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default async function Projects() {
  const supabase = await createServer();

  // Fetch only projects that are NOT hidden
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_hidden", false)
    .order("created_at", { ascending: false });

  if (error) console.error(error);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 snap-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 projects-title">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            My <span className="text-primary">Projects</span>
          </h2>
        </div>

        {!projects || projects.length === 0 ? (
          <div className="glass-card rounded-2xl md:rounded-3xl p-8 md:p-12 text-center">
            <svg
              className="w-16 h-16 mx-auto text-foreground/30 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <p className="text-foreground/60 text-lg">
              No projects to display yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-20 md:space-y-28 projects-container">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              const imageOrderClasses = isEven
                ? "order-2 md:order-1"
                : "order-2 md:order-2";
              const textOrderClasses = isEven
                ? "order-1 md:order-2"
                : "order-1 md:order-1";
              const textOffsetClass = isEven ? "md:-ml-16" : "md:-mr-16";
              const titleAlignClass = isEven ? "text-right" : "text-left";
              const infoAlignClass = isEven ? "items-end" : "items-start";
              const tagsJustifyClass = isEven ? "justify-end" : "justify-start";

              return (
                <div
                  key={project.id}
                  className="relative min-h-[400px] md:min-h-[500px] project-item"
                >
                <div className="relative grid md:grid-cols-2 gap-8 items-center project-hover-container">
                  {/* Image Section - Left */}
                    <div className={`relative ${imageOrderClasses} z-0 project-image`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 shadow-2xl transition-all duration-700 ease-out">
                      {project.cover_url ? (
                        <Image
                          src={project.cover_url}
                          alt={project.title}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition-all duration-700 ease-out"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary/5">
                          <svg
                            className="w-24 h-24 text-foreground/20"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Container Section - Right */}
                  <div
                    className={`relative ${textOrderClasses} ${textOffsetClass} z-1 flex flex-col justify-between h-full`}
                  >
                    {/* Title - now inside the flow (top-right aligned) */}
                    <h3
                      className={`text-2xl md:text-3xl lg:text-4xl text-foreground/40 pointer-events-none ${titleAlignClass} text-primary`}
                    >
                      {project.title}
                    </h3>

                    <div
                      className="  project-text rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                        WebkitBackdropFilter: "blur(20px)",
                        borderColor: "rgba(255,255,255,0.2)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)"
                      }}
                    >
                      {project.summary && (
                        <p className="text-white leading-relaxed text-sm md:text-lg font-medium">
                          {project.summary}
                        </p>
                      )}
                      {project.content && (
                        <p className="text-foreground/70 leading-relaxed text-sm md:text-base py-4">
                          {project.content}
                        </p>
                      )}
                    </div>

                    {/* Tags, Buttons - now inside flow and aligned to the right */}
                    <div className={`flex flex-col ${infoAlignClass} gap-4 mt-4`}>
                      {/* Tech Stack Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className={`flex flex-wrap gap-2 ${tagsJustifyClass}`}>
                          {project.tags.slice(0, 3).map((tag: string) => (
                            <span
                              key={tag}
                              className=" font-mono inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-foreground/5 text-foreground/70 border border-foreground/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center gap-4">
                        {(project.show_demo_button ?? Boolean(project.demo_url)) &&
                          project.demo_url && (
                            <a
                              href={project.demo_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none"
                            >
                              <span>@ demo</span>
                            </a>
                          )}
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-colors duration-300 focus:outline-none focus:ring-0 focus-visible:outline-none"
                          >
                            <FaGithub className="w-5 h-5 text-foreground/70" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
