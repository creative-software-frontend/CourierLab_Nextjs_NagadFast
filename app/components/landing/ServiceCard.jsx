import Image from 'next/image';
import { useTranslations } from 'next-intl';

const topCards = [
  {
    image: '/img/landing/service/topCard/1.png',
    alt: 'Ecommerce Delivery',
  },
  {
    image: '/img/landing/service/topCard/2.png',
    alt: 'Pick and Drop',
  },
  {
    image: '/img/landing/service/topCard/3.png',
    alt: 'Packaging ',
  },
  {
    image: '/img/landing/service/topCard/4.png',
    alt: 'Warehousing',
  },
];

const services = [
  {
    image: '/img/landing/service/5.png',
    alt: 'Industry-leading tech',
  },
  {
    image: '/img/landing/service/6.png',
    alt: 'Content Marketing',
  },
  {
    image: '/img/landing/service/7.png',
    alt: 'Web Development',
  },
  {
    image: '/img/landing/service/8.png',
    alt: 'Secure handling',
  },
  {
    image: '/img/landing/service/9.png',
    alt: 'Fastest solutions',
  },
  {
    image: '/img/landing/service/10.png',
    alt: 'Multimedia coverage',
  },
];

const TopCard = ({ image, alt }) => (
  <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-xs  border border-gray-200">
    <div className="relative w-28 h-28 mx-auto">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain "
        sizes="112px"
      />
    </div>
    <div className="mt-6 text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
        {alt}
      </h3>
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div>
    </div>
  </div>
);

const ServicesSection = () => {
  const t = useTranslations('homePage.featuresSection');

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Discover our comprehensive suite of services designed to elevate
            your business to new heights with cutting-edge technology and
            innovative solutions.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-8 mb-14 md:mb-16">
          {topCards.map((service, index) => (
            <TopCard key={index} image={service.image} alt={service.alt} />
          ))}
        </div>

        {/* Service Cards - Full Width Images */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-xl px-4 py-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={400}
                height={300}
                className="object-contain transition-all :"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
