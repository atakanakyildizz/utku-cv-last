// src/components/data/awards.ts
export type Award = {
  year: number | string;
  title: string;
  org: string;
  amount?: string; // ör: $3,000
  note?: string; // ör: declined
};

export const fellowshipsGrants: Award[] = [
  {
    year: 2025,
    title: 'Dr. Cassandra L. Book Graduate Fellowship in Education',
    org: 'College of Education, Michigan State University',
    amount: '$3,000',
  },
  {
    year: 2025,
    title: 'Research Funding Fellowship',
    org: 'College of Education, Michigan State University',
    amount: '$450',
  },
  {
    year: 2025,
    title: 'Research Enhancement Grant',
    org: 'Graduate School, Michigan State University',
    amount: '$1,000',
  },
  {
    year: 2024,
    title: 'Jere E. and Arlene Pintozzi Brophy Endowed Fellowship in Education',
    org: 'College of Education, Michigan State University',
    amount: '$3,750',
  },
  {
    year: 2024,
    title: 'Dissertation Hard Cost Funding',
    org: 'College of Education, Michigan State University',
    amount: '$3,535.19',
  },
  {
    year: 2023,
    title: 'Jere E. and Arlene Pintozzi Brophy Endowed Fellowship in Education',
    org: 'College of Education, Michigan State University',
    amount: '$3,500',
  },
  {
    year: 2023,
    title: 'Summer Research Development Fellowship',
    org: 'College of Education, Michigan State University',
    amount: '$7,000',
  },
  {
    year: 2022,
    title: 'Helen Thacker Graduate Fellowship',
    org: 'Department of Educational, School, and Counseling Psychology, University of Kentucky',
    amount: '$4,000',
    note: 'declined',
  },
];

export const honorsAwards: Award[] = [
  {
    year: 2025,
    title: 'Michael D. Fetters Scholarship Award',
    org: 'Mixed Methods Program at the University of Michigan',
  },
  {
    year: 2024,
    title: 'Summer School on Motivation and Emotion — Selected Participant',
    org: 'International Conference on Motivation, EARLI SIG 8',
  },
  {
    year: 2024,
    title: 'Research Conference Funding',
    org: 'The Graduate School, Michigan State University',
    amount: '$600',
  },
  {
    year: 2024,
    title: 'Scholarship for Education Research',
    org: 'ICPSR Summer Program in Quantitative Methods of Social Research',
  },
  {
    year: 2024,
    title: 'AERA Division C Equity and Inclusion “Shark Tank” Competition — Finalist',
    org: 'American Education Research Association',
  },
  {
    year: 2024,
    title: 'Graduate Student Travel Award',
    org: 'Motivation SIG, American Educational Research Association',
    amount: '$250',
  },
  {
    year: 2024,
    title: 'Conference Award',
    org: 'Council of Graduate Students, Michigan State University',
    amount: '$300',
  },
  {
    year: 2024,
    title: 'Research Conference Funding',
    org: 'Department of Counseling, Educational Psychology, & Special Education, MSU',
    amount: '$700',
  },
  {
    year: 2023,
    title: 'Professional Development Award',
    org: 'Council of Graduate Students, Michigan State University',
    amount: '$500',
  },
  {
    year: 2023,
    title: 'Research Conference Funding',
    org: 'Department of Counseling, Educational Psychology, & Special Education, MSU',
    amount: '$600',
  },
  {
    year: 2023,
    title: 'Graduate Student Travel Award',
    org: 'Motivation SIG, American Educational Research Association',
    amount: '$200',
  },
  {
    year: 2022,
    title: 'Professional Development Award',
    org: 'Center for Graduate & Professional Diversity Initiatives, University of Kentucky',
    amount: '$500',
  },
  {
    year: 2022,
    title: 'Student Professional Development Award',
    org: 'Student Government Association, University of Kentucky',
    amount: '$150',
  },
  {
    year: 2022,
    title: 'Graduate Student Travel Award',
    org: 'Motivation SIG, American Educational Research Association',
    amount: '$200',
  },
  {
    year: 2022,
    title: 'Conference Travel Award',
    org: 'Department of Educational, School, and Counseling Psychology, University of Kentucky',
    amount: '$600',
  },
  {year: 2021, title: 'Jacobs Foundation Presenter Award — EARLI 2021', org: 'Jacobs Foundation'},
  {year: '2019–2020', title: 'Course Performance Awards', org: 'Middle East Technical University'},
  {year: '2015–2018', title: 'Academic Merit Scholarship', org: 'Divrigi Culture Association'},
  {year: '2014–2019', title: 'Academic Merit Scholarship', org: 'Nesin Foundation'},
];
