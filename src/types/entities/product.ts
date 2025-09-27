import NextImage from 'next/image';
import { IconType } from 'react-icons';

import { ExtractProps } from '@/types/helper';

export type DetailProduct = {
  id: number;
  slug: string;
  title: string;
  image: ExtractProps<typeof NextImage>;
  price: number;
  description: string;
  benefit: BenefitProduct[];
  timeline?: TimelineProduct[];
  requirements?: RequirementProduct[];
};

type BenefitProduct = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

type TimelineProduct = {
  id: number;
  date: string;
  title: string;
};

type RequirementProduct = {
  id: number;
  title: string;
};
