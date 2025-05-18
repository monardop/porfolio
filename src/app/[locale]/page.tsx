import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className='bg-amber-500'>
      <h1 className='text-9xl text-center'>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}