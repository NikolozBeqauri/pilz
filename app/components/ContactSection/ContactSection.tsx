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
                                    <a
                                        href={"https://www.instagram.com/accounting_taxservices_pilts?igsh=MXFwNjU5NGJheHlnZw=="}
                                        aria-label={"Insagram"}
                                        target="_blank"
                                        title={`Visit our Insagram page`}
                                    >
                                        <Image
                                        src={'/instagram-1.svg'}
                                        alt={'instagram icon'}
                                        width={24}
                                        height={24}
                                        className={styles.icon}
                                    />
                                    </a>
                                    <a
                                        href={"https://www.facebook.com/share/19GqRdEQ4T/?mibextid=qi2Omg"}
                                        aria-label={"FaceBook"}
                                        target="_blank"
                                        title={`Visit our FaceBook page`}
                                    >
                                        <Image
                                            src={'/facebook.svg'}
                                            alt={'facebook icon'}
                                            width={14}
                                            height={14}
                                            className={styles.icon}
                                        />
                                    </a>
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