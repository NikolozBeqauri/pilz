import styles from './Hero.module.scss'
import Image from 'next/image';
import ReusableButton from '../ReusableButton/ReusableButton'

const Hero = () => {
    return (
        <section className={styles.background}>
            <Image
                src="/heroUpLines.png"
                alt="lines"
                width={196}
                height={126}
                className={styles.heroUpLines}
            />
            <Image
                src="/heroDownLines.png"
                alt="lines"
                width={274}
                height={148}
                className={styles.heroDownLines}
            />
            <div className={styles.container}>
                <div className={styles.contant}>
                    <h1>
                        სანდო ბუღალტერია
                        <p>საქართველოში და მის ფარგლებს გარეთ.</p>
                    </h1>
                    <p>
                        ჩვენი გუნდი გეხმარებათ არა მხოლოდ ფინანსური აღრიცხვისა და საგადას
                        ახადო ვალდებულებების მართვაში, არამედ სამომავლო გეგმების ჩამო
                        ყალიბებასა და ინვესტიციების მიზანმიმართულ მოზიდვაში — საერთაშ
                        ორისო სტანდარტების სრული დაცვით.
                    </p>
                    <div className={styles.buttons}>
                        <div className={styles.joinUs}>
                            <ReusableButton title={'შემოგვიერთდი'} />
                        </div>
                        <div className={styles.more}>
                            <ReusableButton title={'გაიგე მეტი'} buttonColor='grayButton' />
                        </div>
                    </div>
                </div>
                <Image
                    src="/heroDesktop.png"
                    alt="hero image"
                    width={630}
                    height={488}
                />
            </div>
        </section>
    )
}

export default Hero