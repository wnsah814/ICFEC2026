export interface CommitteeMember {
  name: string;
  affiliation: string;
  url?: string;
}

export interface CommitteeGroup {
  title: string;
  members: CommitteeMember[];
}

export const COMMITTEE_GROUPS: CommitteeGroup[] = [
  {
    title: 'General Chairs',
    members: [
      { name: 'Young Choon Lee', affiliation: 'Macquarie University, Australia' },
      { name: 'Flavia Delicato', affiliation: 'Fluminense Federal University, Brazil' },
      { name: 'Stefan Schulte', affiliation: 'Hamburg University of Technology, Germany' },
    ],
  },
  {
    title: 'Program Chairs',
    members: [
      { name: 'Laurent Lefevre', affiliation: 'Inria, France' },
      { name: 'Yu Xiao', affiliation: 'Aalto University, Finland' },
    ],
  },
  {
    title: 'Publicity Chairs',
    members: [
      { name: 'Yipeng Zhou', affiliation: 'Macquarie University, Australia' },
      { name: 'Evandro Macedo', affiliation: 'UERJ, Brazil' },
      { name: 'Lidia Fotia', affiliation: 'University of Salerno, Italy' },
      { name: 'Hana Khamfroush', affiliation: 'University of Kentucky, USA' },
    ],
  },
  {
    title: 'Local Arrangement Chairs',
    members: [
      { name: 'Endrowednes Kuantama', affiliation: 'Macquarie University, Australia' },
      { name: 'Ferdous Sharifi', affiliation: 'Macquarie University, Australia' },
    ],
  },
  {
    title: 'Webmaster and Online Chairs',
    members: [
      { name: 'Sooyong Kang', affiliation: 'Hanyang University, South Korea' },
      { name: 'Junmo Seong', affiliation: 'Hanyang University, South Korea', url: 'https://github.com/wnsah814' },
      { name: 'Jayden King', affiliation: 'Macquarie University, Australia' },
    ],
  },
];

export const PROGRAM_COMMITTEE: CommitteeMember[] = [
  { name: 'Sungyong Ahn', affiliation: 'Pusan National University, South Korea' },
  { name: 'Atakan Aral', affiliation: 'University of Vienna, Austria' },
  { name: 'Christian Becker', affiliation: 'University of Stuttgart, Germany' },
  { name: 'David Bermbach', affiliation: 'TU Berlin, Germany' },
  { name: 'Luiz F. Bittencourt', affiliation: 'University of Campinas, Brazil' },
  { name: 'Eddy Caron', affiliation: 'ENS-Lyon / INRIA / LIP, France' },
  { name: 'Byungjin Cho', affiliation: 'Korea University, South Korea' },
  { name: 'Alexandre da Silva Veith', affiliation: 'Nokia Bell Labs, Belgium' },
  { name: 'Schahram Dustdar', affiliation: 'Vienna University of Technology, Austria' },
  { name: 'Janick Edinger', affiliation: 'Universität Hamburg, Germany' },
  { name: 'Lidia Fotia', affiliation: 'University of Salerno, Italy' },
  { name: 'Antonino Galletta', affiliation: 'University of Messina, Italy' },
  { name: 'Sukhpal Singh Gill', affiliation: 'Queen Mary University of London, United Kingdom' },
  { name: 'Daniel Grosu', affiliation: 'Wayne State University, United States' },
  { name: 'Qiang He', affiliation: 'Huazhong University of Science and Technology, China' },
  { name: 'Zhiyi Huang', affiliation: 'University of Otago, New Zealand' },
  { name: 'Bahman Javadi', affiliation: 'Western Sydney University, Australia' },
  { name: 'Odej Kao', affiliation: 'TU Berlin, Germany' },
  { name: 'Vasileios Karagiannis', affiliation: 'Austrian Institute of Technology, Austria' },
  { name: 'Dragi Kimovski', affiliation: 'University of Klagenfurt, Austria' },
  { name: 'Anna Kobusinska', affiliation: 'Poznan University of Technology, Poland' },
  { name: 'Chandra Krintz', affiliation: 'UC Santa Barbara, United States' },
  { name: 'Joonho Kwon', affiliation: 'Pusan National University, South Korea' },
  { name: 'Seng Loke', affiliation: 'Deakin University, Australia' },
  { name: 'Adrien Lèbre', affiliation: 'Inria / Ecole des Mines, France' },
  { name: 'Narges Mehran', affiliation: 'Salzburg Research Ltd. / University of Salzburg, Austria' },
  { name: 'Zahra Najafabadi Samani', affiliation: 'University of Klagenfurt, Austria' },
  { name: 'Guillaume Pierre', affiliation: 'Univ Rennes, Inria, CNRS, IRISA, France' },
  { name: 'Radu Prodan', affiliation: 'University of Innsbruck, Austria' },
  { name: 'Lin Wang', affiliation: 'Paderborn University, Germany' },
];
