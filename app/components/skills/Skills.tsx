import SkillGroup from "./SkillGroup";
import {
  backendSkills,
  frontendSkills,
  databaseSkills,
  toolsSkills,
  testingSkills,
} from "@/app/data/skills";

interface SkillsProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

const Skills = ({ isDark, cardBg, borderClass }: SkillsProps) => {
  return (
    <section id="skills" className={`py-16 ${isDark ? 'bg-slate-900/50' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-5xl font-bold text-center mb-12 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="space-y-12">
          <SkillGroup
            title="Backend"
            skills={backendSkills}
            isDark={isDark}
            cardBg={cardBg}
            borderClass={borderClass}
          />

          <SkillGroup
            title="Frontend"
            skills={frontendSkills}
            isDark={isDark}
            cardBg={cardBg}
            borderClass={borderClass}
          />

          <SkillGroup
            title="Databases"
            skills={databaseSkills}
            isDark={isDark}
            cardBg={cardBg}
            borderClass={borderClass}
          />

          <SkillGroup
            title="Testing"
            skills={testingSkills}
            isDark={isDark}
            cardBg={cardBg}
            borderClass={borderClass}
          />

          <SkillGroup
            title="Tools & DevOps"
            skills={toolsSkills}
            isDark={isDark}
            cardBg={cardBg}
            borderClass={borderClass}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;