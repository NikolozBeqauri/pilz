'use client'
import Image from 'next/image';
import styles from './BurgerNav.module.scss';
import { useState } from 'react';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import { useTranslations } from "next-intl";

const BurgerNav = () => {
    const [active, setActive] = useState(false)
    const t = useTranslations('Navigation');

    return (
        <div className={`${styles.background} ${active ? styles.backgroundActive : ''}`} onClick={() => setActive(!active)}>
            <nav className={styles.wrapper} onClick={(e) => e.stopPropagation()} >
                <div className={styles.header}>
                    <span>LOGO</span>
                    <Image
                        src="/burger.svg"
                        alt="burger nemu"
                        width={40}
                        height={40}
                        className={styles.burgerIcon}
                        onClick={() => { setActive(!active); }}
                    />
                </div>
                <div className={`${styles.navWrapper} ${active ? styles.active : ''}`}>
                    <div>
                        <ul>
                            <li>
                                <a onClick={() => setActive(!active)} className={styles.aTag} href="#services">{t('services')} </a>
                            </li>
                            <li>
                                <a onClick={() => setActive(!active)} className={styles.aTag} href="#aboutUs">{t('aboutUs')}</a>
                            </li>
                            <li>
                                <a onClick={() => setActive(!active)} className={styles.aTag} href="#contact">{t('contact')}</a>
                            </li>
                        </ul>
                        <div className={styles.languagePicker}>
                            <LanguagePicker />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default BurgerNav;
