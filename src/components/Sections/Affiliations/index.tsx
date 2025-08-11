// src/components/Sections/Affiliations/index.tsx
import { FC, memo } from 'react';
import Section from '../../Layout/Section';
import { SectionId } from '../../../data/data';

interface Affiliation {
  years: string;
  organization: string;
  details?: string[];
}

const affiliations: Affiliation[] = [
  {
    years: '2022–present',
    organization: 'American Educational Research Association (AERA)',
    details: [
      'Division C: Learning and Instruction',
      'Special Interest Group: Motivation in Education',
    ],
  },
  {
    years: '2021–present',
    organization: 'European Association for Research on Learning and Instruction (EARLI)',
    details: [
      'Special Interest Group 08: Motivation and Emotion',
      'Special Interest Group 10: Social Interaction in Learning and Instruction',
    ],
  },
  {
    years: '2024–present',
    organization: 'Society for Research on Adolescence (SRA)',
  },
];

const Affiliations: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Affiliations}>
      <div className="space-y-6">
        <header>
          <h2 className="text-2xl font-bold text-white">Affiliations</h2>
        </header>

        <ul className="space-y-4">
          {affiliations.map((aff, idx) => (
            <li key={idx} className="border-b border-neutral-600 pb-3">
              <div className="text-sm text-neutral-400">{aff.years}</div>
              <div className="font-semibold text-white">{aff.organization}</div>
              {aff.details && (
                <ul className="ml-4 mt-1 list-disc text-neutral-300">
                  {aff.details.map((d, i) => (
                    <li key={i} className="text-sm">{d}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

Affiliations.displayName = 'Affiliations';
export default Affiliations;
