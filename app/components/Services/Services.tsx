import Link from 'next/link';
import styles from './Services.module.scss'
import Image from 'next/image';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "ბუღალტრული მომსახურება",
            description: "პროფესიონალი და მრავალწლიანი გამოცდილების მქონე გუნდი გაგიწევთ ბუღალტრულ მომსახურებას საერთაშორისო სტანდარტების სრული დაცვით. ",
            image: "/service1.png",
            altText: "ბუღალტერი ცხრილებთან მუშაობს"
        },
        {
            id: 2,
            title: "ბუღალტრული მომსახურება",
            description: "პროფესიონალი და მრავალწლიანი გამოცდილების მქონე გუნდი გაგიწევთ ბუღალტრულ მომსახურებას საერთაშორისო სტანდარტების სრული დაცვით. ",
            image: "/service1.png",
            altText: "ბუღალტერი ცხრილებთან მუშაობს"
        },
        {
            id: 3,
            title: "ბუღალტრული მომსახურება",
            description: "პროფესიონალი და მრავალწლიანი გამოცდილების მქონე გუნდი გაგიწევთ ბუღალტრულ მომსახურებას საერთაშორისო სტანდარტების სრული დაცვით. ",
            image: "/service1.png",
            altText: "ბუღალტერი ცხრილებთან მუშაობს"
        },
        {
            id: 4,
            title: "ბუღალტრული მომსახურება",
            description: "პროფესიონალი და მრავალწლიანი გამოცდილების მქონე გუნდი გაგიწევთ ბუღალტრულ მომსახურებას საერთაშორისო სტანდარტების სრული დაცვით. ",
            image: "/service1.png",
            altText: "ბუღალტერი ცხრილებთან მუშაობს"
        },
    ];
    return (
        <section id='services' className={styles.container}>
            <div className={styles.content}>
                <h2>სერვისები</h2>
                <ul className={styles.cardsContainer}>
                    {services.map((service) => (
                        <li key={service.id}>
                            <Link href={`/services/${service.id}`}>
                                <article>
                                    <Image
                                        src={service.image}
                                        alt={service.altText}
                                        width={456}
                                        height={487}
                                    />
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </article>
                            </Link> 
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Services