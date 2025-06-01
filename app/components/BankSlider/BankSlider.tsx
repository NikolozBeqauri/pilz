import styles from "./BankSlider.module.scss";
import Image from "next/image";

const BankSlider = () => {
    
    const banks = [
        { src: "/houzerGroup.jpg"},
        { src: "/novatori.jpg"},
        { src: "/tenaDevelopment.jpg"},
        { src: "/mobiLand.jpg"},
        { src: "/greenLogo.jpg"},
        { src: "/gwg.jpg"},
        { src: "/tresPollos.jpg"},
        { src: "/redCompany.jpg"},
        { src: "/su.jpg"},
        { src: "/gw.jpg"},
        { src: "/sikete.jpg"},
        { src: "/h2o.jpg"},
        { src: "/upln.jpg"},
    ];
    return (
        <section className={styles.wrapper}>
            <div className={styles.bankCardsWrapper}>
                {banks.concat(banks).map((bank, index) => (
                    <div key={index} className={styles.bankCardItem}>
                        <Image
                            src={bank.src}
                            alt={'users logo'}
                            width={62}
                            height={62}
                            className={styles.icon}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.bankCardsWrapper}>
                {banks.concat(banks).map((bank, index) => (
                    <div key={index} className={styles.bankCardItem}>
                        <Image
                            src={bank.src}
                            alt={'users logo'}
                            width={62}
                            height={62}
                            className={styles.icon}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BankSlider;
