import { useTranslations } from "next-intl";
import styles from "./Navigation.module.scss"
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
interface Props {
    notIndexPage?: boolean;
}
const Navigation = (props: Props) => {

    const t = useTranslations('Navigation');

    return (
        <section className={styles.container}>
            <div className={styles.content}>
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