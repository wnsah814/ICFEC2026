export interface ImportantDate {
  label: string;
  date: string;
  oldDate?: string;
}

export const IMPORTANT_DATES: ImportantDate[] = [
  { label: 'Paper Submission Deadline', date: '18th January 2026', oldDate: '9th January 2026' },
  { label: 'Notification of Acceptance', date: '23rd February 2026', oldDate: '16th February 2026' },
  { label: 'Camera-Ready Due', date: '15th March 2026' },
  { label: 'Conference Dates', date: '18-21 May 2026' },
];
