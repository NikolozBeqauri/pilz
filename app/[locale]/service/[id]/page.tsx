import { servicesData } from '@/app/data/servicesData';
import { notFound } from 'next/navigation';
import styles from "./page.module.scss";
import Image from "next/image";
import FooterComponent from '@/app/components/FooterComponent/FooterComponent';
import NavigationRender from '@/app/components/NavigationRender/NavigationRender';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const service = servicesData[id];
    if (!service) notFound();

    return (
        <>
            <NavigationRender />
            <section className={styles.container}>
                <div className={styles.header}>
                    <h1>სერვისები</h1>
                </div>
                <div className={styles.content}>
                    <div className={styles.body}>
                        <h2>{service.title}</h2>
                        <div className={styles.contentParagraphs}>
                            {service.text.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {service.list && (
                        <div className={styles.listContainer}>
                            <h3>ჩვენს მომსახურებაში შედის:</h3>
                            <ul className={styles.listItemUl}>
                                {service.list.map((item, index) => (
                                    <div key={index} className={styles.listItem}>
                                        <Image src="/serviceIcon.svg" alt="icon" width={24} height={24} />
                                        <li>{item}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className={styles.calculatorImage}>
                    <Image
                        src="/serviceCalculator.png"
                        alt="calculator"
                        width={1440}
                        height={624}
                    />
                </div>
            </section>
            <FooterComponent />
        </>
    );
}
