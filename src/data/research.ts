import type { ResearchProfile } from '../types/portfolio';

export const research: ResearchProfile = {
  title: 'Understanding LSTM Behaviour Using XAI',
  status: 'Research in progress / thesis details pending',
  researchQuestion:
    'How do LSTM networks use temporal information across input windows, hidden and cell states, and gate activations?',
  motivation:
    'LSTM models can solve time-series problems while remaining difficult to inspect. This research focuses on making model behaviour easier to reason about before drawing final conclusions.',
  methodology: [
    'Analyse hidden and cell states across time steps',
    'Compare input, forget, and output gate behaviour',
    'Use attribution methods to inspect time-step importance',
    'Represent temporal behaviour in normalised visual forms',
  ],
  modelArchitecture: [
    'LSTM-based sequence models',
    'Input windows and recurrent state tracking',
    'Architecture details to be added from thesis',
  ],
  xaiTechniques: [
    'Integrated Gradients',
    'Gate activation analysis',
    'Hidden-state visualisation',
    'Time-step importance mapping',
  ],
  visualResults: [
    'Gate activation graphs to be added',
    'Hidden-state visualisations to be added',
    'Time-step importance graphs to be added',
    'Final result to be added from thesis',
  ],
  thesisLink: 'Thesis or paper link to be added',
  teamMembers: ['Team members to be confirmed'],
  supervisor: 'Supervisor to be confirmed',
};
