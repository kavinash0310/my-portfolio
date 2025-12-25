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
    <section className="py-16 space-y-12">
      <h2
        className={`text-3xl font-bold text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Skills & Technologies
      </h2>

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
    </section>
  );
};

export default Skills;