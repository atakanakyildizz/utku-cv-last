// components/SkillsSection.tsx
import {FC, memo} from 'react';

import {skillCourses, softwareTools} from '../../data/data';

const SkillsSection: FC = memo(() => {
  return (
    <div className="flex flex-col">
      {/* Kurslar */}
      {skillCourses.map((course, idx) => (
        <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left" key={idx}>
          <div className="flex flex-col pb-4">
            <h2 className="text-xl font-bold">{course.title}</h2>
            {course.instructor && <span className="text-sm font-medium italic">Instructor: {course.instructor}</span>}
            {course.term && <span className="text-xs">{course.term}</span>}
          </div>
        </div>
      ))}

      {/* Yazılımlar */}
      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">Data Analysis Software</h2>
        </div>
        <ul className="list-disc list-inside">
          {softwareTools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

SkillsSection.displayName = 'SkillsSection';
export default SkillsSection;
