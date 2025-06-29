import { useParams } from "react-router-dom";
import { projects } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="py-16 text-center">Project not found.</div>;

  return (
    <section className="min-h-screen px-4 py-8 sm:px-24 md:py-24">
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 flex flex-col gap-16">
        <div className="flex flex-col gap-16 items-center">
          <h1 className="text-3xl sm:text-5xl font-bold">{project.title}</h1>
          <img src={project.image} alt={project.title} className="rounded-lg w-full max-w-lg" />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground">{project.description}</p>
        </div>
        {/* Case Study Sections */}
        {project.sections?.map((section, idx) => {
        switch (section.type) {
            case "audio":
            return (
                <div key={idx} className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                {section.description && (
                    <p className="text-base whitespace-pre-line">{section.description}</p>
                )}
                {section.audioSrc && (
                    <audio controls className="w-full max-w-xl rounded-lg shadow">
                    <source src={section.audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                    </audio>
                )}
                {section.image && (
                    <img src={section.image} alt={section.title} className="rounded-lg border max-w-xl" />
                )}
                </div>
            );
            case "video":
            return (
                <div key={idx} className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                {section.description && (
                    <p className="text-base whitespace-pre-line">{section.description}</p>
                )}
                {section.videoSrc && (
                    <video
                    controls
                    className="w-full max-w-xl rounded-lg shadow"
                    poster={section.image}
                    >
                    <source src={section.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                )}
                </div>
            );
            case "image":
            return (
                <div key={idx} className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                {section.description && (
                    <p className="text-base whitespace-pre-line">{section.description}</p>
                )}
                {section.images && section.images.map((img, i) => (
                    <img
                    key={i}
                    src={img}
                    alt={`${section.title} image ${i + 1}`}
                    className="rounded-lg border max-w-xl"
                    />
                ))}
                </div>
            );
            default:
            return (
                <div key={idx} className="flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                {section.description && (
                    <p className="text-base whitespace-pre-line">{section.description}</p>
                )}
                {section.image && (
                    <img src={section.image} alt={section.title} className="rounded-lg border max-w-xl" />
                )}
                {section.images && section.images.map((img, i) => (
                    <img
                    key={i}
                    src={img}
                    alt={`${section.title} image ${i + 1}`}
                    className="rounded-lg border max-w-xl"
                    />
                ))}
                </div>
            );
        }
        })}
      </div>
    </section>
  );
}
