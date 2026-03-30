export interface Notice {
  title: string;
  date: string;
  content: string;
  link?: { text: string; href: string };
}

export const NOTICES: Notice[] = [
  {
    title: 'Student Travel Grants',
    date: '2026-03-30',
    content: 'A limited number of student travel grants are available (see {link} for more details).',
    link: { text: 'here', href: 'https://ccgrid2026.cdms.westernsydney.edu.au/travel-grants.html' },
  },
  {
    title: 'Deadline Extension',
    date: '2025-12-19',
    content: 'The paper submission deadline has been extended to 18th January 2026.',
  },
  {
    title: 'Call for Papers Open',
    date: '2025-05-29',
    content: 'Paper submission is now open. Check the Call for Papers section for details.',
  },
  {
    title: 'Welcome to IEEE ICFEC 2026!',
    date: '2025-05-28',
    content: 'The conference website is now live. Stay tuned for updates!',
  },
];
