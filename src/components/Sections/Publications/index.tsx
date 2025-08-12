// src/components/Sections/Publications/index.tsx
import {FC, memo} from 'react';

import {SectionId} from '../../../data/data';
import {
  conferencesLocalRegional,
  conferencesNationalInternational,
  journalAndUnderReview,
  type Pub,
} from '../../../data/publications';
import Section from '../../Layout/Section';

const PubItem: FC<{p: Pub}> = memo(({p}) => (
  <li className="leading-relaxed">
    <div className="text-sm text-neutral-400">{p.year}</div>
    <div className="font-semibold text-white">{p.authors}</div>
    <div className="italic text-neutral-200">{p.title}</div>
    {p.outlet && <div className="text-neutral-300">{p.outlet}</div>}
    {p.locationDates && <div className="text-sm text-neutral-400">{p.locationDates}</div>}
    <div className="mt-1 flex flex-wrap items-center gap-2">
      {p.note && (
        <span className="rounded-full border border-neutral-500 px-2 py-0.5 text-xs text-neutral-300">
          {p.note}
        </span>
      )}
      {p.link && (
        <a
          className="text-xs font-medium text-blue-400 underline-offset-4 hover:underline"
          href={p.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          DOI/Link
        </a>
      )}
    </div>
  </li>
));
PubItem.displayName = 'PubItem';

const PubList: FC<{items: Pub[]; title: string}> = memo(({items, title}) => {
  const sorted = [...items].sort((a, b) => {
    const av = typeof a.year === 'number' ? a.year : 10_000; // "Under Review" gibi string değerler üste
    const bv = typeof b.year === 'number' ? b.year : 10_000;
    return bv - av;
  });

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="space-y-4">
        {sorted.map((p, i) => (
          <PubItem key={`${p.title}-${i}`} p={p} />
        ))}
      </ul>
    </section>
  );
});
PubList.displayName = 'PubList';

const Publications: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Publications}>
      <article className="max-w-none rounded-lg p-0 font-sans">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Publications</h1>
          <p className="text-neutral-300">
            Peer-reviewed journal articles, works under review, and conference presentations.
          </p>
        </header>

        <div className="space-y-10">
          <PubList items={journalAndUnderReview} title="Journal Articles & Under Review" />

          <section className="space-y-2">
            <h2 className="text-2xl font-bold text-white">Presentations</h2>
            <p className="text-neutral-300">
              Conference papers, posters, and invited talks. <br />
              <span className="text-xs text-neutral-400">* equal authorship; ^ undergraduate mentee</span>
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <PubList items={conferencesNationalInternational} title="National / International" />
              <PubList items={conferencesLocalRegional} title="Local / Regional" />
            </div>
          </section>
        </div>
      </article>
    </Section>
  );
});

Publications.displayName = 'Publications';
export default Publications;
