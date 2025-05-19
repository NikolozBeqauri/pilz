import { useTranslations } from "next-intl";
import styles from "./Navigation.module.scss"
import LanguagePicker from "../LanguagePicker/LanguagePicker";

const Navigation = () => {

    const t = useTranslations('Navigation');

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2>LOGO</h2>
                <nav>
                    <ul>
                        <li>
                            <a href="#services">{t('services')}</a>
                        </li>
                        <li>
                            <a href="#aboutUs">{t('aboutUs')}</a>
                        </li>
                        <li>
                            <a href="#contact">{t('contact')}</a>
                        </li>
                    </ul>
                    <LanguagePicker />
                </nav>
            </div>
        </section>
    )
}

export default Navigation