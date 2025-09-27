import NextImage from 'next/image';
import { IconType } from 'react-icons';

import { ExtractProps } from '@/types/helper';

export type DetailScholarship = {
  id: number;
  slug: string;
  title: string;
  organizer: string;
  image: ExtractProps<typeof NextImage>;
  description: string;
  benefit: BenefitScholarship[];
  timeline?: TimelineScholarship[];
  requirements?: RequirementScholarship[];
};

type BenefitScholarship = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

type TimelineScholarship = {
  id: number;
  date: string;
  title: string;
};

type RequirementScholarship = {
  id: number;
  title: string;
};
