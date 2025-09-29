'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const HeroBtn = () => {
  const t = useTranslations('homePage.heroSection');

  return (
    <div className="text-center md:text-start">
      <button className="cursor-pointer px-7 py-3.5 button-primary font-semibold text-white text-[18px] rounded hover:button-primary transition-all ">
        <Link href={`/landing/sign-up`}>{t('button')}</Link>
      </button>
    </div>
  );
};

export default HeroBtn;
