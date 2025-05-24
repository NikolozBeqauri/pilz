import styles from './ContactSection.module.scss'
import Image from "next/image";
import GmailForm from './GmailForm/GmailForm';
import { useTranslations } from "next-intl";

const ContactSection = () => {
    const t = useTranslations('Contact');

    return (
        <section id='contact' className={styles.background}>
            <img
                src={'/contactLeftLines.png'}
                alt={'img'}
                className={styles.contactLeftLines}
            />
            <img
                src={'/contactRightLines.png'}
                alt={'img'}
                className={styles.contactRightLines}
            />
            <div className={styles.container}>
                <h2>{t('title')}</h2>
                <div className={styles.content}>
                    <div className={styles.textsContainer}>
                        <div className={styles.contacts}>
                            <div className={styles.contact}>
                                <h3>{t('contactUs')}</h3>
                                <p>{t('contactUsText')}</p>
                            </div>
                            <div className={styles.links}>
                                <h3>{t('socialTitle')}</h3>
                                <div className={styles.icons}>
                                    <Image
                                        src={'/BOG.svg'}
                                        alt={'image'}
                                        width={40}
                                        height={40}
                                        className={styles.icon}
                                    />
                                    <Image
                                        src={'/BOG.svg'}
                                        alt={'image'}
                                        width={40}
                                        height={40}
                                        className={styles.icon}
                                    />
                                    <Image
                                        src={'/BOG.svg'}
                                        alt={'image'}
                                        width={40}
                                        height={40}
                                        className={styles.icon}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.generalInfo}>
                            <p>{t('gmail')}</p>
                            <p>{t('location')}</p>
                            <p>{t('exactLocation')}</p>
                            <p>{t('number')}</p>
                        </div>
                    </div>
                    <GmailForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection