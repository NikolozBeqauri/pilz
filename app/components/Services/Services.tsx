import {Link} from '@/i18n/navigation';
import styles from './Services.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('Services');

  const services = [
    {
      id: 1,
      title: t('service1.title'),
      description: t('service1.description'),
      image: '/service1.jpg',
      altText: t('service1.title'),
    },
    {
      id: 2,
      title: t('service2.title'),
      description: t('service2.description'),
      image: '/service2.jpg',
      altText: t('service2.title'),
    },
    {
      id: 3,
      title: t('service3.title'),
      description: t('service3.description'),
      image: '/service3.jpg',
      altText: t('service3.title'),
    },
    {
      id: 4,
      title: t('service4.title'),
      description: t('service4.description'),
      image: '/service4.jpg',
      altText: t('service4.title'),
    },
    {
      id: 5,
      title: t('service5.title'),
      description: t('service5.description'),
      image: '/service5.jpg',
      altText: t('service5.title'),
    },
    {
      id: 6,
      title: t('service6.title'),
      description: t('service6.description'),
      image: '/service6.jpg',
      altText: t('service6.title'),
    },
  ];

  return (
    <section id="services" className={styles.container}>
      <div className={styles.content}>
        <h2>{t('title')}</h2>
        <ul className={styles.cardsContainer}>
          {services.map((service) => (
            <li key={service.id}>
              <Link href={`/service/${service.id}`}>
                <article>
                  <Image
                    src={service.image}
                    alt={service.altText}
                    width={456}
                    height={487}
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
