import styles from "./BankSlider.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";

const BankSlider = () => {
        const t = useTranslations('Slider');
    
    const banks = [
        { src: "/BOG.svg", name: `${t('bog')}`},
        { src: "/TBC.svg", name: `${t('tbc')}` },
        { src: "/liberty.svg", name: `${t('liberty')}` },
        { src: "/BOG.svg", name: `${t('bog')}` },
        { src: "/TBC.svg", name: `${t('tbc')}` },
        { src: "/liberty.svg", name: `${t('liberty')}` },
    ];
    return (
        <section className={styles.wrapper}>
            <div className={styles.bankCardsWrapper}>
                {banks.concat(banks).map((bank, index) => (
                    <div key={index} className={styles.bankCardItem}>
                        <Image
                            src={bank.src}
                            alt={bank.name}
                            width={62}
                            height={62}
                            className={styles.icon}
                        />
                        <p>{bank.name}</p>
                    </div>
                ))}
            </div>
            <div className={styles.bankCardsWrapper}>
                {banks.concat(banks).map((bank, index) => (
                    <div key={index} className={styles.bankCardItem}>
                        <Image
                            src={bank.src}
                            alt={bank.name}
                            width={62}
                            height={62}
                            className={styles.icon}
                        />
                        <p>{bank.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BankSlider;
