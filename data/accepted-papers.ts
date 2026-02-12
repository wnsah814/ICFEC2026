export interface Paper {
  title: string;
  authors: string;
}

export interface Session {
  time: string;
  title: string;
  chair: string;
  papers: Paper[];
}

export const CONFERENCE_DAY = 'Thursday, May 21, 2026';

export const SESSIONS: Session[] = [
  {
    time: '11:00-12:30',
    title: 'Session 1: Secure and Intelligent Edge Strategies',
    chair: 'Chair Name, University',
    papers: [
      {
        title: 'Optimising Intrusion Detection Systems in Cloud-Edge Continuum with Knowledge Distillation for Privacy-Preserving and Efficient Communication',
        authors: 'Author Name and Author Name',
      },
      {
        title: 'ADApp: Edge Device Anomaly Detection and Microservice Replica Prediction',
        authors: 'Author Name, Author Name, Author Name, Author Name, Author Name, Author Name and Author Name',
      },
      {
        title: 'Umbilical Chair: Automated Live Testing for Edge-To-Cloud FaaS Applications',
        authors: 'Author Name, Author Name and Author Name',
      },
    ],
  },
  {
    time: '14:00-15:30',
    title: 'Session 2: Resilient and Optimized Edge-Fog-Cloud Solutions',
    chair: 'Chair Name, University',
    papers: [
      {
        title: 'FTFormer: Fault-Tolerant Layer Offloading in Edge-Fog-Cloud Federated Split Learning',
        authors: 'Author Name, Author Name and Author Name',
      },
      {
        title: 'Neural Network-Enhanced Self-Organization for Efficient Resource Allocation in Distributed Edge Computing Environments',
        authors: 'Author Name, Author Name and Author Name',
      },
      {
        title: 'Ant Colony Optimization for Data Search and Movement in the Edge-Fog-Cloud Continuum',
        authors: 'Author Name, Author Name and Author Name',
      },
    ],
  },
  {
    time: '16:00-18:00',
    title: 'Session 3: Innovations in Edge Orchestration and Learning',
    chair: 'Chair Name, University',
    papers: [
      {
        title: 'Towards a Decentralised Application-Centric Orchestration Framework in the Cloud-Edge Continuum',
        authors: 'Author Name, Author Name, Author Name, Author Name, Author Name, Author Name, Author Name and Author Name',
      },
      {
        title: 'Vehicle Density-Aware Adaptive Offloading for UAV-Based Road Traffic Monitoring',
        authors: 'Author Name, Author Name and Author Name',
      },
      {
        title: 'FedCCL: Federated Clustered Continual Learning Framework for Privacy-focused Energy Forecasting',
        authors: 'Author Name and Author Name',
      },
      {
        title: 'Real-time Object Tracking on the Edge',
        authors: 'Author Name, Author Name, Author Name, Author Name and Author Name',
      },
    ],
  },
];
