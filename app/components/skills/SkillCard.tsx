interface SkillCardProps {
    name: string;
    icon: string;
    isDark: boolean;
    cardBg: string;
    borderClass: string;
  }
  
  const SkillCard = ({
    name,
    icon,
    isDark,
    cardBg,
    borderClass,
  }: SkillCardProps) => {
    return (
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${borderClass} ${cardBg}
        hover:scale-105 transition-transform shadow-sm`}
      >
        <span className="text-xl">{icon}</span>
        <span
          className={`font-medium text-sm ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {name}
        </span>
      </div>
    );
  };
  
  export default SkillCard;