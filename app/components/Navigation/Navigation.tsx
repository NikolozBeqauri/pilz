import { useTranslations } from "next-intl";
import styles from "./Navigation.module.scss"
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import { Link } from "@/i18n/navigation";
interface Props {
    notIndexPage?: boolean;
}
const Navigation = (props: Props) => {

    const t = useTranslations('Navigation');

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <img
                        src={`/${t('logo')}.svg`}
                        alt="logo"
                        className={styles[t("logo")]}
                    />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <a href={props.notIndexPage ? "/#services" : "#services"}>{t('services')}</a>
                        </li>
                        <li>
                            <a href={props.notIndexPage ? "/#aboutUs" : "#aboutUs"}>{t('aboutUs')}</a>
                        </li>
                        <li>
                            <a href={props.notIndexPage ? "/#contact" : "#contact"}>{t('contact')}</a>
                        </li>
                    </ul>
                    <LanguagePicker />
                </nav>
            </div>
        </section>
    )
}

export default Navigation