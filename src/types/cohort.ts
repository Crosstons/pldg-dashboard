export type CohortId = '1' | '2';

export interface CohortMetadata {
  id: CohortId;
  name: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface CohortPeriod {
  week: number;
  startDate: string;
  endDate: string;
}

export interface CohortProgress {
  currentWeek: number;
  totalWeeks: number;
  isActive: boolean;
  completionPercentage: number;
}

export interface EnhancedCohortMetadata extends CohortMetadata {
  periods: CohortPeriod[];
  progress: CohortProgress;
  participantCount: number;
  techPartners: string[];
}

export interface CohortContext {
  currentCohort: CohortId;
  cohortData: EnhancedCohortMetadata;
  previousCohorts: CohortId[];
}

export const COHORT_DATA: Record<CohortId, CohortMetadata> = {
  '1': {
    id: '1',
    name: 'Cohort 1',
    startDate: '2024-10-01',
    endDate: '2024-12-31',
    description: 'First PLDG cohort'
  },
  '2': {
    id: '2',
    name: 'Cohort 2',
    startDate: '2024-01-13',
    endDate: '2024-04-11',
    description: 'Current active cohort'
  }
};

export interface CohortState {
  selectedCohort: CohortId;
  cohorts: EnhancedCohortMetadata[];
  context: CohortContext;
}

export function getCohortDataPath(cohortId: CohortId): string {
  const filenames = {
    '1': 'Weekly Engagement Survey Breakdown (4).csv',
    '2': 'Cohort 2 Weekly Engagement Survey Raw Dataset.csv'
  };
  return `/data/cohort-${cohortId}/${filenames[cohortId]}`;
}