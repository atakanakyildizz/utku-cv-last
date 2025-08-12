import {FC, memo, useMemo} from 'react';

import {type Award, fellowshipsGrants, honorsAwards} from '../../../data/awards';
import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';

const groupByYearDesc = (items: Award[]) => {
  // Yıl string ise (ör. 2019–2020) en alta gelsin
  const key = (y: Award['year']) => (typeof y === 'number' ? y : -Infinity);
  return [...items]
    .sort((a, b) => (key(b.year) as number) - (key(a.year) as number))
    .reduce<Record<string, Award[]>>((acc, it) => {
      const k = String(it.year);
      (acc[k] ||= []).push(it);
      return acc;
    }, {});
};

const Row: FC<{a: Award}> = memo(({a}) => (
  <li className="leading-relaxed">
    <div className="text-sm text-neutral-600">{a.year}</div>
    <div className="font-semibold text-neutral-900">
      {a.title}
      {a.amount ? ` (${a.amount})` : ''}
    </div>
    <div className="text-neutral-700">
      {a.org}
      {a.note ? ` — ${a.note}` : ''}
    </div>
  </li>
));
Row.displayName = 'AwardRow';

const Block: FC<{id: string; title: string; subtitle: string; items: Award[]}> = memo(
  ({id, title, subtitle, items}) => {
    const grouped = useMemo(() => groupByYearDesc(items), [items]);
    const total = items.length;

    return (
      <section className="space-y-4" id={id}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
            <p className="text-neutral-700">{subtitle}</p>
            <p className="text-xs text-neutral-500">Total: {total}</p>
          </div>
          <div className="flex gap-2" />
        </div>

        <div className="space-y-6">
          {Object.entries(grouped).map(([year, list]) => (
            <div className="space-y-2" key={year}>
              <h4 className="text-sm font-semibold text-neutral-800">{year}</h4>
              <ul className="space-y-3">
                {list.map((a, i) => (
                  <Row a={a} key={`${year}-${i}`} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  },
);
Block.displayName = 'AwardsBlock';

const Awards: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Awards}>
      <article className="max-w-none rounded-lg p-0 font-sans space-y-10">
        <header className="mb-2">
          <h2 className="text-3xl font-bold text-neutral-900">Awards</h2>
        </header>

        <Block
          id="fellowships"
          items={fellowshipsGrants}
          subtitle="Competitive funding and graduate fellowships."
          title="Fellowships & Grants"
        />

        <Block
          id="honors"
          items={honorsAwards}
          subtitle="Recognitions, scholarships, and conference distinctions."
          title="Honors & Awards"
        />
      </article>
    </Section>
  );
});

Awards.displayName = 'Awards';
export default Awards;
