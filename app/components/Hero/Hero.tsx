import styles from './Hero.module.scss'
import Image from 'next/image';
import ReusableButton from '../ReusableButton/ReusableButton'
import { useTranslations } from "next-intl";

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section className={styles.background}>
            <Image
                src="/heroUpLines.png"
                alt="lines"
                width={196}
                height={126}
                className={styles.heroUpLines}
            />
            <Image
                src="/heroDownLines.png"
                alt="lines"
                width={274}
                height={148}
                className={styles.heroDownLines}
            />
            <div className={styles.container}>
                <div className={styles.contant}>
                    <h1>
                        {t('title')}
                        <p>{t('secondaryTitle')}</p>
                    </h1>
                    <p>
                        {t('bodyText')}
                    </p>
                    <Image
                        src="/heroMobile.png"
                        alt="hero image"
                        className={styles.heroMobile}
                        width={343}
                        height={229}
                    />
                    <div className={styles.buttons}>
                        <div className={styles.joinUs}>
                            <ReusableButton title={`${t('joinUs')}`} />
                        </div>
                        <div className={styles.more}>
                            <ReusableButton title={`${t('more')}`} buttonColor='grayButton' />
                        </div>
                    </div>

                </div>
                <Image
                    src="/heroDesktop.png"
                    alt="hero image"
                    className={styles.heroImage}
                    width={630}
                    height={488}
                />
                <Image
                    src="/heroLaptop.png"
                    alt="hero image"
                    className={styles.heroLaptop}
                    width={336}
                    height={357}
                />
            </div>
        </section>
    )
}

export default Hero