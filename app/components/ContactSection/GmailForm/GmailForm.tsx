'use client'
import { useForm } from "react-hook-form";
import styles from './GmailForm.module.scss';
import emailjs from 'emailjs-com';
import { useTranslations } from "next-intl";

type FormValues = {
    name: string;
    email: string;
    title: string;
    message: string;
};

const GmailForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormValues>({ mode: "onSubmit" });

    const t = useTranslations('Form');

    if (!t) return null;
    const onSubmit = (data: FormValues) => {
        console.log(data);
        
        emailjs.send(
            'service_7n2tsgc',
            'template_zq94fyq',
            data,
            'bpijYHbSNe3_neBhu'
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                reset();
            })
            .catch((error) => {
                console.error('There was an error sending the email:', error.text);
            });
    };

    return ( 
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputs}>
                <div>
                    <input
                        placeholder={`${t('name')}`}
                        {...register("name", { required: `${t('nameError')}` })}
                    />
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>

                <div>
                    <input
                        placeholder={`${t('gmail')}`}
                        {...register("email", { required: `${t('gmailError')}` })}
                    />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>

                <div>
                    <input
                        placeholder={`${t('subject')}`}
                        {...register("title", { required: `${t('subjectError')}` })}
                    />
                    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                </div>

                <div>
                    <textarea
                        placeholder={`${t('message')}`}
                        {...register("message", { required: `${t('messageError')}` })}
                    />
                    {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                </div>
            </div>

            <button type="submit">გაგზავნა</button>
        </form>
    );
};

export default GmailForm;
