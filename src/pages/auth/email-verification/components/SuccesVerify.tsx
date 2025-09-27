import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function SuccessVerify() {
  return (
    <section className='min-h-screen bg-white gap-4 md:gap-2.5 flex justify-center items-center flex-col'>
      <NextImage
        src='/images/auth/email-verification/successmascot.png'
        alt='success mascot'
        width={665}
        height={369}
        className='md:w-[665px] md:h-[369px] w-[314px] h-[174px]'
      />
      <div className='flex flex-col items-center justify-center gap-4 md:gap-8'>
        <Typography
          as='h1'
          variant='h3'
          weight='bold'
          className='text-white px-5 py-2 md:px-12 md:py-4 bg-primary-orange w-fit text-3xl'
        >
          VERIFIED
        </Typography>
        <Typography
          as='h2'
          variant='h6'
          weight='medium'
          className='text-primary-blue text-center px-5 md:w-[816px]'
        >
          Yay, E-Mail kamu telah{' '}
          <span className='text-primary-orange'>terverifikasi!</span> Sekarang
          kamu sudah dapat{' '}
          <span className='text-primary-orange underline hover:no-underline hover:cursor-pointer'>
            <UnstyledLink href='/auth/login'>Log In</UnstyledLink>
          </span>
          . Selamat bereksplorasi dan{' '}
          <span className='text-primary-orange'>Meraih Asa!!!</span>
        </Typography>
      </div>
    </section>
  );
}
