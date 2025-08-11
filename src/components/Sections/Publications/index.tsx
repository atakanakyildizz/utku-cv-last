// src/components/Sections/Publications/index.tsx
import { FC, memo } from 'react';
import Section from '../../Layout/Section';
import { SectionId } from '../../../data/data';
import {
  journalAndUnderReview,
  conferencesNationalInternational,
  conferencesLocalRegional,
} from '../../../data/publications';
import { Pub } from '../../../data/publications';

const PubItem: FC<{ p: Pub }> = ({ p }) => (
  <li className="leading-relaxed">
    <div className="text-sm text-neutral-400">{p.year}</div>
    <div className="font-semibold text-white">{p.authors}</div>
    <div className="italic text-neutral-200">{p.title}</div>
    {p.outlet && <div className="text-neutral-300">{p.outlet}</div>}
    {p.locationDates && (
      <div className="text-sm text-neutral-400">{p.locationDates}</div>
    )}
    <div className="mt-1 flex flex-wrap items-center gap-2">
      {p.note && (
        <span className="rounded-full border border-neutral-500 px-2 py-0.5 text-xs text-neutral-300">
          {p.note}
        </span>
      )}
      {p.link && (
        <a
          href={p.link}
          className="text-xs font-medium text-blue-400 underline-offset-4 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOI/Link
        </a>
      )}
    </div>
  </li>
);

const PubList: FC<{ title: string; items: Pub[] }> = ({ title, items }) => {
  const sorted = [...items].sort((a, b) => {
    const av = typeof a.year === 'number' ? a.year : 10_000; // "Under Review" gibi string değerleri üste
    const bv = typeof b.year === 'number' ? b.year : 10_000;
    return bv - av;
  });

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="space-y-4">
        {sorted.map((p, i) => (
          <PubItem p={p} key={`${p.title}-${i}`} />
        ))}
      </ul>
    </section>
  );
};

const Publications: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Publications}>
      <article className="max-w-none rounded-lg p-0 font-sans">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Publications</h1>
          <p className="text-neutral-300">
            Peer-reviewed journal articles, works under review, and conference
            presentations.
          </p>
        </header>

        <div className="space-y-10">
          <PubList
            title="Journal Articles & Under Review"
            items={journalAndUnderReview}
          />

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Presentations</h2>
            <p className="text-neutral-300">
              Conference papers, posters, and invited talks. <br />
              <span className="text-xs text-neutral-400">
                * equal authorship; ^ undergraduate mentee
              </span>
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <PubList
                title="National / International"
                items={conferencesNationalInternational}
              />
              <PubList
                title="Local / Regional"
                items={conferencesLocalRegional}
              />
            </div>
          </section>
        </div>
      </article>
    </Section>
  );
});

Publications.displayName = 'Publications';
export default Publications;
