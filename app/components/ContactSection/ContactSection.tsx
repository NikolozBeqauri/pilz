import styles from './ContactSection.module.scss'
import Image from "next/image";
import GmailForm from './GmailForm/GmailForm';

const ContactSection = () => {
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
                <h2>კონტაქტი</h2>
                <div className={styles.content}>
                    <div className={styles.textsContainer}>
                        <div className={styles.contact}>
                            <h3>დაგვიკავშირდით</h3>
                            <p>თქვენი უკუკავშირი ჩვენთვის ძალიან მნიშვნელოვანია</p>
                        </div>
                        <div className={styles.links}>
                            <h3>გამოგვიწერე სოციალურ ქსელებში</h3>
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
                        <div className={styles.generalInfo}>
                            <p>info@pilz.com</p>
                            <p>თბილისი, საქართველო</p>
                            <p>შალვა ნუცუბიძის ქუჩა 26ა</p>
                            <p>+995 577 77 77 77</p>
                        </div>
                    </div>
                    <GmailForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection