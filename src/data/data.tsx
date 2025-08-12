import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GoogleScholarIcon from '../components/Icon/GoogleScholarIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import XIcon from '../components/Icon/XIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume ',
  description: "Atakans's site built with Utku Caybas's react resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Publications: 'publications',
  Resume: 'resume',
  Skills: 'skills',
  Awards: 'awards',
  Affiliations: 'affiliations',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Utku Caybas`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm Utku, broadly interested in{' '}
        <strong className="text-stone-100">how social and contextual factors influence students’ motivation</strong>,
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Specifically, I work to understand{' '}
        <strong className="text-stone-100">
          how different levels of peer relations, such as peer interactions, friendships, and peer groups, play a role
          in students’ motivation.
        </strong>
      </p>
    </>
  ),

  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi, I am broadly interested in how social and contextual factors influence students’ motivation. Specifically, I work to understand how different levels of peer relations, such as peer interactions, friendships, and peer groups, play a role in students’ motivation.`,
  aboutItems: [
    {label: 'Location', text: 'Lansing, MI', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Turkish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Employment', text: 'Michigan University', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export type SkillCourse = {
  term: string; // "Summer 2025" gibi
  title: string; // ders adı
  instructor?: string; // "Instructor: ..." (opsiyonel)
};

export const skillCourses: SkillCourse[] = [
  {term: 'Summer 2025', title: 'Longitudinal Structural Equation Modeling', instructor: 'Amy Nuttall'},
  {term: 'Summer 2024', title: 'Network Analysis: Introduction', instructor: 'Sarah Shugars'},
  {term: 'Spring 2024', title: 'Mixture Modeling and Latent Class Analysis', instructor: 'Dan Bauer & Doug Steinley'},
  {term: 'Fall 2023', title: 'Causal Inference', instructor: 'Doug Steinley'},
  {term: 'Spring 2023', title: 'Hierarchical Linear Modeling', instructor: 'Kimberly Kelly'},
  {term: 'Fall 2022', title: 'Structural Equation Modeling', instructor: 'Amy Nuttall'},
  {term: 'Spring 2020', title: 'Scale Development', instructor: 'Yesim Capa-Aydin'},
];

export const softwareTools: string[] = ['IBM SPSS Statistics', 'RStudio', 'Mplus', 'MAXQDA (Qualitative Analysis)'];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2014-2018',
    location: 'Istanbul University',
    title: 'B.A., Psychological Counseling and Guidance',
    content: <p>(Summa Cum Laude Honors)</p>,
  },
  {
    date: '2015-2018',
    location: 'Istanbul University',
    title: 'B.A., Teaching Gifted Children',
    content: <p>(Double Major)</p>,
  },
  {
    date: '2018-2021',
    location: 'Middle East Technical University',
    title: 'M.S., Curriculum & Instruction',
    content: (
      <p>
        Thesis: Academic Motivation of Middle School Students: Perceived Teacher Affective Support, Number of
        Interaction Partners, Prior Achievement and Homophily.
        <br />
        Advisor: Dr. Nur Aksus-Cakir · Co-Advisor: Dr. Yesim Capa-Aydin
      </p>
    ),
  },
  {
    date: '2015-2018',
    location: 'University of Kentucky',
    title: 'PhD., Educational Psychology',
    content: <p>(Transferred to another program)</p>,
  },
  {
    date: '2015-2018',
    location: 'Michigan State University',
    title: 'PhD., Educational Psychology',
    content: <p>Advisor: Dr. Lisa Linnenbrink-Garcia</p>,
  },
];
export const experience: TimelineItem[] = [
  {
    date: 'Fall 2022 - Present',
    location: 'Michigan State University',
    title: 'Course Instructor',
    content: (
      <p>
        TE 150: Reflections on Learning (undergraduate educational psychology).
        <br />
        Taught in-person, hybrid, and asynchronous online across Fall/Spring terms.
        <br />
        Instructed 180+ undergraduate students to date.
      </p>
    ),
  },
  {
    date: '2020 – 2021',
    location: 'Yonder Private Elementary and Middle School',
    title: 'Instructional Designer',
    content: (
      <p>
        Designed course materials and learning activities aligned with school outcomes.
        <br />
        Delivered professional development seminars for teachers.
      </p>
    ),
  },
  {
    date: 'Feb 2018 – Jun 2018',
    location: 'Besiktas Guidance and Research Center',
    title: 'Psychological Assessment Intern',
    content: <p>Supported administration and scoring of standardized psychological tests.</p>,
  },
  {
    date: 'Oct 2017 – Jan 2018',
    location: 'Findikli Vocational and Technical High School',
    title: 'School Counseling Intern',
    content: (
      <p>
        Organized school orientation for incoming students.
        <br />
        Implemented a bullying prevention program.
      </p>
    ),
  },
  {
    date: 'Jan 2017 – May 2017',
    location: 'Sancaktar Hayrettin Middle School',
    title: 'School Counseling Intern',
    content: <p>Implemented career guidance activities for middle school students.</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Dr. Lisa Linnenbrink-Garcia',
      title: 'Professor, Department of Counseling, Educational Psychology and Special Education',
      location: 'Michigan State University',
      contact: 'llgarcia@msu.edu',
    },
    {
      name: 'Dr. Ellen L. Usher',
      title: 'Education Scientist, Office of Applied Scholarship and Education Science',
      location: 'Mayo Clinic',
      contact: 'usher.ellen@mayo.edu',
    },
    {
      name: 'Dr. Jennifer Schmidt',
      title: 'Professor, Department of Counseling, Educational Psychology and Special Education',
      location: 'Michigan State University',
      contact: 'jaschmid@msu.edu',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'caybasiz@msu.edu',
      href: 'mailto:caybasiz@msu.edu',
    },
    {
      type: ContactType.Location,
      text: 'Lansing MI, United States',
      href: 'https://maps.app.goo.gl/3QeLUCHQKeUKuCyK6',
    },
    {
      type: ContactType.LinkedIn,
      text: 'utku-caybas',
      href: 'https://www.linkedin.com/in/utku-caybas/',
    },
    {
      type: ContactType.Phone,
      text: '+1 713 550 3289',
      href: '+17135503289',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'X', Icon: XIcon, href: 'https://x.com/utku_caybas'},
  {
    label: 'Google Scholar',
    Icon: GoogleScholarIcon,
    href: 'https://scholar.google.com/citations?user=ViJXcW4AAAAJ&hl=en',
  },
];
