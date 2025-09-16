import Image from 'next/image';

const logoData = [
  { logo: '/img/landing/color-logo-1.jpg', alt: 'RANGS', name: 'RANGS' },
  { logo: '/img/landing/color-logo-2.jpg', alt: 'claraz' },
  { logo: '/img/landing/color-logo-3.jpg', alt: 'ojler@sap' },
  { logo: '/img/landing/color-logo-4.jpg', alt: 'othoba' },
  { logo: '/img/landing/color-logo-5.jpg', alt: 'SME 2' },
  { logo: '/img/landing/color-logo-6.jpg', alt: 'SME 3' },
  { logo: '/img/landing/color-logo-7.jpg', alt: 'SME 3' },
  { logo: '/img/landing/color-logo-8.jpg', alt: 'SME 3' },
];

const FeaturesLogo = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 items-center">
          {logoData.map((item, i) => (
            <div key={i} className="flex justify-center group relative">
              <div className="relative h-20 w-20 md:h-24 md:w-24 transition-all duration-500 transform group-hover:scale-110">
                <Image
                  src={item.logo}
                  alt={item.alt}
                  fill
                  className="object-contain rounded-full"
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 120px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesLogo;
