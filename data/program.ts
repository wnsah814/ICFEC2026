export interface ProgramPaper {
  title: string;
  authors: string;
}

export interface ProgramSession {
  code: string;
  title: string;
  chair: string;
  day: 'Wednesday, 20 May 2026' | 'Thursday, 21 May 2026';
  time: string;
  papers: ProgramPaper[];
}

export interface AttendeeLink {
  title: string;
  description: string;
  href: string;
}

export const ATTENDEE_LINKS: AttendeeLink[] = [
  {
    title: 'Venue',
    description:
      'Peter Shergold Building (Level 9), Western Sydney University Parramatta City Campus — a 5-minute walk from Parramatta Station.',
    href: 'https://ccgrid2026.cdms.westernsydney.edu.au/venue.html',
  },
  {
    title: 'Registration',
    description:
      'Author and attendee registration fees, deadlines, and what is included. Registration is handled by CCGrid 2026.',
    href: 'https://ccgrid2026.cdms.westernsydney.edu.au/registration.html',
  },
  {
    title: 'Travel Grants',
    description:
      'Student travel grants of up to AUD 1,500 are available through CCGrid 2026. Applications close 24 April 2026 (AoE).',
    href: 'https://ccgrid2026.cdms.westernsydney.edu.au/travel-grants.html',
  },
];

export const PROGRAM_SESSIONS: ProgramSession[] = [
  {
    code: 'ICFEC 1',
    title: 'Monitoring and Management in the Computing Continuum',
    chair: 'Yu Xiao (Aalto University)',
    day: 'Wednesday, 20 May 2026',
    time: '14:00 – 15:30',
    papers: [
      {
        title: 'K-Sense: A Non-Invasive eBPF Framework for QoS Inference',
        authors: 'Abdullah Muslim, Ali Beiti Aydenlou, Stephan Recker',
      },
      {
        title: 'Cost-Effective Processing of IoT Data in the Computing Continuum',
        authors:
          'Vasileios Karagiannis, Drazen Ignjatovic, Antonios Iosifidis, Stefan Schulte',
      },
      {
        title: 'LLMEdger: Phase-Aware Model Parallelism Scheduler for LLM Inference on Edge',
        authors: 'Xinyang Shen, Lena Mashayekhy',
      },
    ],
  },
  {
    code: 'ICFEC 2',
    title: 'Efficient On-Device Learning and Model Compression',
    chair: 'Stefan Schulte (TU Berlin)',
    day: 'Wednesday, 20 May 2026',
    time: '16:00 – 17:30',
    papers: [
      {
        title: 'Layer-Wise Weight Sharing for Efficient Transformer on SoCs',
        authors: 'Saeed Khalilian Gourtani, Hang Xu, Nirvana Meratnia, Anuj Pathania',
      },
      {
        title: 'CORAL: Covariance-Guided Resource Adaptive Learning for Efficient Edge Inference',
        authors:
          'Ahmad Nabhaan, Zaki Sukma, Rakandhiya Rachmanto, Muhammad Santriaji, Byungjin Cho, Arief Setyanto, In Kee Kim',
      },
      {
        title:
          'Order-Aware Compression for RF-DETR on Edge Devices: Overcoming Graph Fragmentation and Quantization Instability',
        authors:
          'Farhan Mahmood, Michalis Karamousadakis, Antonis Porichis, Vishwanathan Mohan, Panagiotis Chatzakos',
      },
    ],
  },
  {
    code: 'ICFEC 3',
    title: 'Intelligent Infrastructure and Multi-Tier Orchestration',
    chair: 'TBC',
    day: 'Thursday, 21 May 2026',
    time: '11:00 – 12:30',
    papers: [
      {
        title: 'Multi-Provider Caching in Multi-Tier Fog Networks',
        authors: 'Ferdous Sharifi, Young Choon Lee, Shaahin Hessabi',
      },
      {
        title:
          'NL-CPS: Reinforcement Learning-Based Kubernetes Control Plane Placement in Multi-Region Clusters',
        authors: 'Sajid Alam, Amjad Ullah, Ze Wang',
      },
      {
        title:
          'UAV-Enabled Integrated Sensing, Semantic Communication, and Computation: Disaster-Oriented Edge Computing and Sensing',
        authors: 'Yaxi Liu, Wencan Mao, Xulong Li, Yu Xiao, Wei Huangfu, Keping Long',
      },
    ],
  },
  {
    code: 'ICFEC 4',
    title: 'Security and Coordination in Federated Learning',
    chair: 'Young Choon Lee (Macquarie University)',
    day: 'Thursday, 21 May 2026',
    time: '14:00 – 15:30',
    papers: [
      {
        title: 'A Federated LLM-based Framework for DDoS Defense in Mobile Edge Computing',
        authors: 'Shuo Zhang, Kousuke Mori, Toshio Hirotsu',
      },
      {
        title: 'Atlas Synchronization in the Hierarchical Federated Learning Continuum',
        authors: 'Antonios Iosifidis, Vasileios Karagiannis, Stefan Schulte',
      },
    ],
  },
];

export const PROGRAM_DAYS = [
  'Wednesday, 20 May 2026',
  'Thursday, 21 May 2026',
] as const;

export const FULL_PROGRAM_URL = 'https://ccgrid2026.cdms.westernsydney.edu.au/programs.html';
