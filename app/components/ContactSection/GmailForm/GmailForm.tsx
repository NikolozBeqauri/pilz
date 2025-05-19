'use client'
import { useForm } from "react-hook-form";
import styles from './GmailForm.module.scss';

type FormValues = {
    name: string;
    gmail: string;
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

    const onSubmit = (data: FormValues) => {
        console.log("Form Data:", data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.inputs}>
                <div>
                    <input
                        placeholder="სახელი, გვარი"
                        {...register("name", { required: "გთხოვთ შეიყვანოთ სახელი ან გვარი" })}
                    />
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>

                <div>
                    <input
                        placeholder="ელ-ფოსტა"
                        {...register("gmail", { required: "გთხოვთ შეიყვანოთ ელ-ფოსტა" })}
                    />
                    {errors.gmail && <p className={styles.error}>{errors.gmail.message}</p>}
                </div>

                <div>
                    <input
                        placeholder="სათაური"
                        {...register("title", { required: "გთხოვთ შეიყვანოთ სათაური" })}
                    />
                    {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="შეტყობინება"
                        {...register("message", { required: "გთხოვთ შეიყვანოთ შეტყობინება" })}
                    />
                    {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                </div>
            </div>

            <button type="submit">გაგზავნა</button>
        </form>
    );
};

export default GmailForm;
