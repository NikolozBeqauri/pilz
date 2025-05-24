
import styles from './AboutSection.module.scss';
import Image from 'next/image';
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations('AboutUs');

  return (
    <section id='aboutUs' className={styles.container}>
      <h2>{t('title')}</h2>
      <div className={styles.content}>
        <div className={styles.textsContainer}>
          <p><span>{t("pilz")}</span>{t('overview')}</p>
          <p>{t('importance')}</p>
          <p>{t('businessSupport')}</p>
        </div>
        <Image
          src="/about1.png"
          alt="about image"
          className={styles.aboutImage}
          width={650}
          height={475}
        />
      </div>
      <div className={`${styles.content} ${styles.reverse}`}>
        <div className={styles.textsContainer}>
          <p>{t('structure')}</p>
          <p>{t('professionalSupport')}</p>
          <p>{t('insurance')}</p>
        </div>
        <Image
          className={styles.aboutImage}
          src="/about2.png"
          alt="about image"
          width={650}
          height={475}
        />
      </div>
    </section>
  )
}

export default AboutSection