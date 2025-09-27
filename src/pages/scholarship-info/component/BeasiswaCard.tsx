import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import { AllBeasiswa } from '@/types/entities/detailbeasiswa';

export default function Beasiswacard({
  detailbeasiswa,
  ...props
}: {
  detailbeasiswa: AllBeasiswa;
}) {
    const formatDate = (date?: Date | string | null) => {
  if (!date) return '-';
  const d = typeof date === 'string' ? new Date(date) : date;
  return isNaN(d.getTime())
    ? '-'
    : d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
};


 const formattedStartDate = formatDate(detailbeasiswa?.open_registration);
const formattedEndDate = formatDate(detailbeasiswa?.close_registration);


  // 🔑 fallback untuk logo
  const logoSrc =
  detailbeasiswa?.logo && detailbeasiswa.logo !== 'unknown' && detailbeasiswa.logo.trim() !== ''
    ? `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/file/${detailbeasiswa.logo}`
    : '/images/scholarship-info/image.png';


  // fallback untuk nama & penyelenggara
  const name =
    detailbeasiswa?.nama && detailbeasiswa.nama !== 'unknown'
      ? detailbeasiswa.nama
      : 'Beasiswa';

  const penyelenggara =
    detailbeasiswa?.penyelenggara && detailbeasiswa.penyelenggara !== 'unknown'
      ? detailbeasiswa.penyelenggara
      : '-';

  const jenisBeasiswa =
    detailbeasiswa?.jenis && detailbeasiswa.jenis !== 'unknown'
      ? detailbeasiswa.jenis
      : '-';

  return (
    <div className='card py-6 px-4 flex flex-col shadow-card' {...props}>
      <div className='relative'>
        <NextImage
          alt={detailbeasiswa?.nama || 'Beasiswa'}
          src={logoSrc}
          width={392}
          height={209}
          quality={100}
          className='shadow-card-orange px-4'
        />
        <div className='absolute bottom-4 right-8 rounded-[4px] bg-white shadow-white px-4 py-2 flex items-center justify-center gap-2 cursor-pointer'>
          <NextImage
            src={logoSrc}
            width={16}
            height={11}
            quality={100}
            alt='logo kecil'
            className=' '
          />
          <p className='text-xs'>{detailbeasiswa?.penyelenggara}</p>
        </div>
        <div className='absolute top-3 left-6'>
          <div className='flex text-white text-xs items-center gap-2'>
            <p className='px-[10px] py-[6px] bg-[#E62A3A] rounded cursor-pointer'>
              {detailbeasiswa?.jenis}
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 mt-4'>
        <h5 className='text-[32px] font-bold'>{detailbeasiswa?.nama}</h5>
        <div className='flex gap-12'>
          <div>
            <p className='text-base text-[#8C8C8C]'>Open Registration</p>
            <p className='text-sm'>{formattedStartDate}</p>
          </div>
          <div>
            <p className='text-base text-[#8C8C8C]'>Deadline</p>
            <p className='text-sm'>{formattedEndDate}</p>
          </div>
        </div>
        <ButtonLink
          variant='warning'
          size='lg'
          href={`/scholarship-info/${detailbeasiswa.id}`}
          className='mt-6'
        >
          Lihat Selengkapnya
        </ButtonLink>
      </div>
    </div>
  );
}
