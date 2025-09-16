import Image from 'next/image';
import HeroBtn from './HeroBtn';
import { useTranslations } from 'next-intl';
import Icon1 from '@/public/img/landing/heroIcon/Delivery-Man.png';
import Icon2 from '@/public/img/landing/heroIcon/Registered Merchant.png';
import Icon3 from '@/public/img/landing/heroIcon/Delivery-Point.png';
import HeroImage from '@/public/img/landing/heroIcon/Web-Parcel-2.png';

const HeroSection = () => {
  const t = useTranslations('homePage.heroSection');
  const tStatsSection = useTranslations('homePage.statsSection');

  return (
    <div className="relative h-[550px] md:h-[650px] mt-44 md:mt-10 mb-16 bg-amber-100">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center mt-10">
        <Image
          src="/img/landing/heroIcon/Map-BD.png"
          alt="background"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Optional overlay for visibility */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Content */}
      <div className="relative container mx-auto pt-10 md:pt-16 px-4 h-full flex items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Left side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
            <h2 className="text-[28px] md:text-[40px] text-primary font-bold leading-tight">
              {t('title')}
            </h2>
            <h2 className="text-[28px] md:text-[40px] text-primary font-bold leading-tight py-3">
              {t('subtitle')}
            </h2>
            <p className="text-secondary text-[16px] md:text-[20px] leading-[24px] py-4 md:py-6">
              {t('description')}
            </p>
            <HeroBtn />
          </div>

          {/* Right side */}
          <div className="mt-10 md:mt-0 flex flex-col items-center">
            <Image
              className="w-64 md:w-[450px]"
              src={HeroImage}
              width={1000}
              height={600}
              alt="hero-img"
            />

            <div className="mb-28 md:mb-0">
              <div className="flex  gap-2 md:gap-12 md:mt-8">
                {/* Registered Merchant */}
                <div className="flex items-center gap-3 md:gap-5 ">
                  <div className="border-gray border-2 rounded-md p-2">
                    <Image
                      className="w-6 md:w-8"
                      src={Icon2}
                      width={1000}
                      height={600}
                      alt="merchant-icon"
                    />
                  </div>
                  <div>
                    <h2 className="leading-[28px] font-semibold text-[24px] md:text-[32px]">
                      {tStatsSection('numbersOne')}
                    </h2>
                    <p className="mt-1 text-secondary text-sm md:text-base">
                      Registered Merchant
                    </p>
                  </div>
                </div>

                {/* Delivery Man */}
                <div className="flex items-center gap-3 md:gap-5 ">
                  <div className="border-gray border-2 rounded-md p-2">
                    <Image
                      className="w-6 md:w-8"
                      src={Icon1}
                      width={1000}
                      height={600}
                      alt="deliveryman-icon"
                    />
                  </div>
                  <div>
                    <h2 className="leading-[28px] font-semibold text-[24px] md:text-[32px]">
                      {tStatsSection('numbersTwo')}
                    </h2>
                    <p className="mt-1 text-secondary text-sm md:text-base">
                      Delivery Man
                    </p>
                  </div>
                </div>

                {/* Delivery Point */}
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="border-gray border-2 rounded-md p-2">
                    <Image
                      className="w-6 md:w-8"
                      src={Icon3}
                      width={1000}
                      height={600}
                      alt="deliverypoint-icon"
                    />
                  </div>
                  <div>
                    <h2 className="leading-[28px] font-semibold text-[24px] md:text-[32px]">
                      {tStatsSection('numbersThree')}
                    </h2>
                    <p className="mt-1 text-secondary text-sm md:text-base">
                      Delivery Point
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
