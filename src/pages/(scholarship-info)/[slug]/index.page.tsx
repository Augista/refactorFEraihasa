export const runtime = 'experimental-edge';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import SEO from '@/components/SEO';
import { DETAIL_SCHOLARSHIP } from '@/contents/detail-scholarship';
import { SCHOLARSHIP_DATA } from '@/contents/scholarship';
import Layout from '@/layouts/Layout';
import DescriptionSection from '@/pages/(scholarship-info)/[slug]/container/DescriptionSection';
import HeroSection from '@/pages/(scholarship-info)/[slug]/container/HeroSection';
import RequirementSection from '@/pages/(scholarship-info)/[slug]/container/RequirementSection';
import BenefitSection from '@/pages/(scholarship-info)/[slug]/container/ScholarshipSection';
import TimelineSection from '@/pages/(scholarship-info)/[slug]/container/TimelineSection';
import Custom404 from '@/pages/404.page';

export default function ScholarshipDetail({
  ScholarshipSlug,
}: {
  ScholarshipSlug: string;
}) {
  const scholarship = DETAIL_SCHOLARSHIP.find(
    ({ slug }) => slug === ScholarshipSlug
  );

  if (!scholarship) {
    return <Custom404 />;
  }

  return (
    <Layout withFooter={true} withNavbar={true}>
      <SEO title={scholarship.title} />
      <main className='w-screen flex justify-center items-center my-16'>
        <section className='inline-flex flex-col rounded-[16px] shadow-2xl w-11/12 md:w-10/12 h-auto'>
          <HeroSection scholarship={scholarship} />
          <div className='flex flex-col gap-10 w-10/12 mx-auto py-12 md:py-16'>
            <DescriptionSection scholarship={scholarship} />
            <BenefitSection scholarship={scholarship} />
            {scholarship.timeline && (
              <TimelineSection scholarship={scholarship} />
            )}
            {scholarship.requirements && (
              <RequirementSection scholarship={scholarship} />
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const slug = context.params?.slug as string;

  const scholarship = SCHOLARSHIP_DATA.find(
    ({ slug: ScholarshipSlug }) => ScholarshipSlug === slug
  );

  if (!scholarship)
    return {
      notFound: true,
    };

  return {
    props: {
      ScholarshipSlug: scholarship.slug,
    },
  };
};
