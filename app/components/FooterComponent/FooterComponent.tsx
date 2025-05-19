import styles from './FooterComponent.module.scss';
import Image from 'next/image';
import SocialLinks from './SocialLinks/SocialLinks';
import Link from 'next/link';

const FooterComponent = () => {
    return (
        <footer className={styles.background}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerFirstSection}>
                    <div className={styles.socialMedias}>
                        <Image
                            src="/logo.svg"
                            alt="logo"
                            width={118}
                            height={38}
                            className={styles.image}
                        />
                        <p>ფინანსური აპლიკაცია, რომელიც დაგეხმარება დეკლარაციის უსწრაფესად შევსებაში</p>
                        <SocialLinks />
                    </div>
                    <nav className={styles.innerNavigation}>
                        <h4 className={styles.footerTitle}>ნავიგაცია</h4>
                        <ul>
                            <li><Link href="#services" className={styles.footerSecondaryText}>სერვისები</Link></li>
                            <li><Link href="#aboutUs" className={styles.footerSecondaryText}>ჩვენ შესახებ</Link></li>
                            <li><Link href="#contact" className={styles.footerSecondaryText}>კონტაქტი</Link></li>
                        </ul>
                    </nav>

                    <nav className={styles.innerNavigation}>
                        <h4 className={styles.footerTitle}>მხარდაჭერა</h4>
                        <ul>
                            <li>
                                <Link className={styles.footerSecondaryText} href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link className={styles.footerSecondaryText} href="#">Help center</Link>
                            </li>
                            <li>
                                <Link className={styles.footerSecondaryText} href="#">Report a bug</Link>
                            </li>
                            <li>
                                <Link className={styles.footerSecondaryText} href="#">Chat support</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.contactsWrapper}>
                        <h4 className={styles.footerTitle}>დაგვიკავშირდი</h4>
                        <div className={styles.contacts}>
                            <div className={styles.contactsItem}>
                                <Image
                                    src="/email.svg"
                                    alt="email logo"
                                    width={20}
                                    height={20}
                                    className={styles.image}
                                />
                                <p className={styles.footerSecondaryText}>info@gmail.com</p>
                            </div>

                            <div className={styles.contactsItem}>
                                <Image
                                    src="/phone.svg"
                                    alt="phone logo"
                                    width={20}
                                    height={20}
                                    className={styles.image}
                                />
                                <p className={styles.footerSecondaryText}>(+995 577 55 55 55)</p>
                            </div>

                            <div className={styles.contactsItem}>
                                <Image
                                    src="/location.svg"
                                    alt="location logo"
                                    width={20}
                                    height={20}
                                    className={styles.image}
                                />
                                <p className={styles.footerSecondaryText}>Tbilisi, Georgia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>Copyright © 2025 პილცი</p>
                    <p>All Rights Reserved | <a href="#" className={styles.linkStyle}>Terms and Conditions</a> | <a className={styles.linkStyle} href="#">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent