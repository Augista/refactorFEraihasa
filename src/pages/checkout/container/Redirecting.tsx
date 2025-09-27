import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function Redirecting() {
  return (
    <main className='relative h-screen w-full'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='w-3/4 flex flex-col justify-center items-center gap-4'>
          <Typography
            variant='h4'
            weight='bold'
            className='text-center text-[#37384C]'
          >
            Mengalihkan ke Penjadwalan....
          </Typography>
          <NextImage
            src={'/images/checkout/loading.gif'}
            alt='gif'
            width={250}
            height={224}
          />
          <Typography variant='p' className='text-center text-[#37384C]'>
            <span className='font-bold'>
              Mohon <span className='text-primary-orange'>tunggu</span> dan
              untuk <span className='text-primary-orange'>tidak menutup</span>{' '}
              laman ini,
            </span>{' '}
            <br />
            sebentar lagi anda akan dialihkan untuk ke laman penjadwalan. <br />
            Jika tidak berhasil, dapat klik{' '}
            <UnstyledLink href='/' className='text-primary-blue font-bold'>
              link ini
            </UnstyledLink>
          </Typography>
        </div>
      </div>
      <div>
        <NextImage
          src={'/images/checkout/ornaments.png'}
          alt='ornament'
          width={1440}
          height={516}
          className='absolute bottom-0 w-full -z-10 max-md:hidden'
        />
        <NextImage
          src={'/images/checkout/ornaments-mobile.png'}
          alt='ornament'
          width={390}
          height={251}
          className='absolute bottom-0 w-full -z-10 block md:hidden'
        />
      </div>
    </main>
  );
}
