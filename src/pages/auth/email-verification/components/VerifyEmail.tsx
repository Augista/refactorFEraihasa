import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function VerifyEmail() {
  return (
    <section className='min-h-screen flex-col gap-6 md:gap-16 bg-white flex items-center justify-center py-20'>
      <div className='relative flex items-center justify-center -translate-x-5'>
        <div className='flex items-center relative justify-center z-20'>
          <NextImage
            src='/images/auth/email-verification/mascot.png'
            alt='mascot'
            width={335}
            height={335}
            className='md:w-[335px] md:h-[335px] w-[225px] h-[225px]'
          />
          <Typography
            as='h1'
            variant='h5'
            weight='bold'
            className='text-primary-orange text-left relative text-sm -translate-x-10 md:-translate-x-14'
          >
            Cek Email Kamu
            <br /> Sekarang!
          </Typography>
        </div>
        <div className='absolute w-[253px] h-[110px] md:w-[528px] md:h-[203px] bg-[#FFF3E2] rounded-2xl z-10 ml-14' />
        <div className='absolute h-[110px] md:w-[528px] md:h-[203px] w-[253px] bg-[#FFE2B7] rounded-2xl z-0 ml-14 -rotate-6' />
      </div>
      <Typography
        as='h2'
        variant='h6'
        weight='medium'
        className='text-primary-blue text-center text-xs'
      >
        Link verifikasi sudah dikirimkan ke emailmu.
        <br /> Yuk cek dan lakukan verifikasi akun!
      </Typography>
      <div className='px-5 md:w-[608px]'>
        <Typography
          as='h3'
          variant='t'
          weight='medium'
          className='text-primary-blue text-center text-xs'
        >
          Jika Anda tidak melihat email tersebut, periksa tempat lain, seperti
          folder sampah, spam, sosial, atau lainnya.
          <br />
          <br /> Belum menerima email?{' '}
          <span className='text-primary-orange hover:cursor-pointer'>
            Kirim ulang email verifikasi
          </span>
        </Typography>
      </div>
    </section>
  );
}
