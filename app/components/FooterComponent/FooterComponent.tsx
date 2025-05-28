import styles from './FooterComponent.module.scss';
import Image from 'next/image';
import SocialLinks from './SocialLinks/SocialLinks';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
interface Props {
    notIndexPage?: boolean;
}const FooterComponent = (props: Props) => {
    const t = useTranslations('Footer');

    return (
        <footer className={styles.background}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerFirstSection}>
                    <div className={styles.socialMedias}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <Image
                                    src={`/${t('logo')}.svg`}
                                    alt="logo"
                                    width={120}
                                    height={42}
                                />
                            </Link>
                        </div>
                        <p>{t("paragraph")}</p>
                        <SocialLinks />
                    </div>

                    <div className={styles.secondDiv}>
                        <nav className={styles.innerNavigation}>
                            <h4 className={styles.footerTitle}>{t("navigationTitle")}</h4>
                            <ul>
                                <li>
                                    <a className={styles.footerSecondaryText} href={props.notIndexPage ? "/#services" : "#services"}>{t('services')}</a>
                                </li>
                                <li>
                                    <a className={styles.footerSecondaryText} href={props.notIndexPage ? "/#aboutUs" : "#aboutUs"}>{t('aboutUs')}</a>
                                </li>
                                <li>
                                    <a className={styles.footerSecondaryText} href={props.notIndexPage ? "/#contact" : "#contact"}>{t('contact')}</a>
                                </li>
                            </ul>
                        </nav>


                        <div className={styles.contactsWrapper}>
                            <h4 className={styles.footerTitle}>{t("contactUsTitle")}</h4>
                            <div className={styles.contacts}>
                                <div className={styles.contactsItem}>
                                    <Image
                                        src="/email.svg"
                                        alt="email logo"
                                        width={20}
                                        height={20}
                                        className={styles.image}
                                    />
                                    <p className={styles.footerSecondaryText}>{t("gmail")}</p>
                                </div>

                                <div className={styles.contactsItem}>
                                    <Image
                                        src="/phone.svg"
                                        alt="phone logo"
                                        width={20}
                                        height={20}
                                        className={styles.image}
                                    />
                                    <p className={styles.footerSecondaryText}>{t("number")}</p>
                                </div>

                                <div className={styles.contactsItem}>
                                    <Image
                                        src="/location.svg"
                                        alt="location logo"
                                        width={20}
                                        height={20}
                                        className={styles.image}
                                    />
                                    <p className={styles.footerSecondaryText}>{t("location")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>{t("copyRight")}</p>
                    <p>All Rights Reserved | <a href="#" className={styles.linkStyle}>Terms and Conditions</a> | <a className={styles.linkStyle} href="#">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent