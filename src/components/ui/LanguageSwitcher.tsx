'use client';

import { usePathname, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const [, , ...rest] = pathname.split('/');
    router.replace(`/${nextLocale}/${rest.join('/')}`);
  };

  return (
    <select value={currentLocale} onChange={handleChange}>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
};
