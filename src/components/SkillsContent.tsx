import type { IconType } from "react-icons";
import { FaBrain, FaCode, FaCss3Alt, FaDocker, FaEye, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLinux, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiFastapi, SiFlask, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiScikitlearn, SiSupabase, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";
import { skillCategories } from "@/data/skills";
import PageHeader from "@/components/PageHeader";

const skillIcons: Record<string, IconType> = {
  Python: FaPython, "C++": SiCplusplus, JavaScript: FaJs, TypeScript: SiTypescript, PHP: FaPhp,
  HTML: FaHtml5, CSS: FaCss3Alt, React: FaReact, "Next.js": SiNextdotjs, "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs, Express: SiExpress, Flask: SiFlask, FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql, MySQL: SiMysql, MongoDB: SiMongodb, Supabase: SiSupabase,
  TensorFlow: SiTensorflow, "Scikit-learn": SiScikitlearn, "Machine Learning": FaBrain,
  "Computer Vision": FaEye, Git: FaGitAlt, GitHub: FaGithub, Docker: FaDocker, Linux: FaLinux,
};

export default function SkillsContent() {
  return (
    <section id="skills" className="px-4 pb-12 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-5xl">
        <PageHeader headingId="skills-heading" title="Skills" description="Technologies and tools I work with across different domains." />

        <div className="mt-2 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article key={category.category} className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-xs)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-md)]">
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">{category.category}</h2>
              <ul className="grid gap-2">
                {category.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <li key={skill}>
                      <div className="group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 transition-colors duration-200 hover:border-[var(--accent)]/35 hover:bg-[var(--bg-elevated)]">
                        <span className="grid size-7 shrink-0 place-items-center rounded-md bg-[var(--bg-surface)] text-[var(--accent)] shadow-[var(--shadow-xs)]">
                          {Icon ? <Icon className="size-4" aria-hidden="true" /> : <FaCode className="size-4" aria-hidden="true" />}
                        </span>
                        <span className="text-sm font-medium text-[var(--fg-muted)] transition-colors group-hover:text-[var(--fg)]">{skill}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
