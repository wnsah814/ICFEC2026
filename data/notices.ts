export interface Notice {
  title: string;
  date: string;
  content: string;
}

export const NOTICES: Notice[] = [
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
