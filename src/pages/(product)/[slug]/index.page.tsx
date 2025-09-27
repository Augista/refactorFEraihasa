export const runtime = 'experimental-edge';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

import SEO from '@/components/SEO';
import { DETAIL_PRODUCT } from '@/contents/detail-product';
import Layout from '@/layouts/Layout';
import BenefitSection from '@/pages/(product)/[slug]/container/BenefitSection';
import DescriptionSection from '@/pages/(product)/[slug]/container/DescriptionSection';
import HeroSection from '@/pages/(product)/[slug]/container/HeroSection';
import RequirementSection from '@/pages/(product)/[slug]/container/RequirementSection';
import TimelineSection from '@/pages/(product)/[slug]/container/TimelineSection';
import Custom404 from '@/pages/404.page';

export default function ProductDetail({
  ProductSlug,
}: {
  ProductSlug: string;
}) {
  const product = DETAIL_PRODUCT.find(({ slug }) => slug === ProductSlug);

  if (!product) {
    return <Custom404 />;
  }

  return (
    <Layout withFooter={true} withNavbar={true}>
      <SEO title={product.title} />
      <main className='w-screen flex justify-center items-center my-16'>
        <section className='inline-flex flex-col rounded-[16px] shadow-2xl w-11/12 md:w-10/12 h-auto'>
          <HeroSection product={product} />
          <div className='flex flex-col gap-10 w-10/12 mx-auto py-12 md:py-16'>
            <DescriptionSection product={product} />
            <BenefitSection product={product} />
            {product.timeline && <TimelineSection product={product} />}
            {product.requirements && <RequirementSection product={product} />}
            <div className='flex w-full justify-center items-center gap-4'>
              <Link
                className=' cursor-pointer flex w-[300px] h-[60px] px-[70px] py-[15px] justify-center items-center rounded-[20px] bg-primary-orange text-[18px] font-[600] text-primary-light'
                href={`/product/${product.slug}/checkout`}
              >
                Daftar Sekarang
              </Link>
            </div>
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

  const product = DETAIL_PRODUCT.find(
    ({ slug: ProductSlug }) => ProductSlug === slug
  );

  if (!product)
    return {
      notFound: true,
    };

  return {
    props: {
      ProductSlug: product.slug,
    },
  };
};
