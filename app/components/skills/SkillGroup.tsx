import SkillCard from "./SkillCard";

interface Skill {
  name: string;
  icon: string;
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

const SkillGroup = ({
  title,
  skills,
  isDark,
  cardBg,
  borderClass,
}: SkillGroupProps) => {
  return (
    <div className="space-y-4">
      <h3
        className={`text-xl font-semibold ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            isDark={isDark}
            cardBg={cardBg}
            borderClass={borderClass}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;