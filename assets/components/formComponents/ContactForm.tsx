import { FunctionComponent, useState } from 'react';

import styles from '@styles/Contact.module.css';
import { MdEmail, MdPhone } from 'react-icons/md';
import FormInput from '@components/ui/FormInput';
import FormArea from '@components/ui/FormArea';

import { FormProvider, useForm } from 'react-hook-form';
import FormLoader from './FormLoader';
import FormResult from './FormResult';

const ContactForm: FunctionComponent = () => {
    const [showForm, setShowForm] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [success, setSuccess] = useState(true);
    const [message, setMessage] = useState('');

    const methods = useForm();

    const onSubmit = async (data: any) => {
        setShowForm(false);
        setShowLoading(true);
        try {
            console.log(data);
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                body: JSON.stringify(data),
            });

            const result = await response.json();

            const { success, message } = result;

            if (!success) throw new Error(message);

            setSuccess(true);
            setMessage(message);
        } catch (err: any) {
            setSuccess(false);
            setMessage(err.message);
        }

        setShowLoading(false);

        setTimeout(() => {
            methods.reset();
            setMessage('');
            setShowForm(true);
        }, 3200);
    };
    return (
        <>
            {showForm && (
                <FormProvider {...methods}>
                    <form
                        className={styles.contactForm}
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >
                        <div className={styles.inputRow}>
                            <FormInput
                                name="firstName"
                                type="text"
                                label="First Name"
                                errorMessage={
                                    methods.formState.errors?.firstName
                                        ? 'Please put your first name.'
                                        : ''
                                }
                                required
                            />
                            <FormInput
                                name="lastName"
                                type="text"
                                label="Last Name"
                                errorMessage={
                                    methods.formState.errors?.lastName
                                        ? 'Please put your last name.'
                                        : ''
                                }
                                required
                            />
                        </div>
                        <div className={styles.inputRow}>
                            <FormInput
                                name="email"
                                type="email"
                                label="Email"
                                required
                                pattern={
                                    '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
                                }
                                errorMessage={
                                    methods.formState.errors?.email
                                        ? 'Please put valid email.'
                                        : ''
                                }
                                icon={<MdEmail />}
                            />
                            <FormInput
                                name="phoneNumber"
                                type="tel"
                                label="Phone Number"
                                icon={<MdPhone />}
                                errorMessage={
                                    methods.formState.errors?.phoneNumber
                                        ? 'Please put valid phone number.'
                                        : ''
                                }
                                required
                                pattern={'(/+[0-9]{2}|[0-9]{2}|0)?9[0-9]{9}'}
                            />
                        </div>
                        <div>
                            <FormArea
                                name="message"
                                label="Message"
                                errorMessage={
                                    methods.formState.errors?.message
                                        ? 'Please put a message.'
                                        : ''
                                }
                                required
                            />
                        </div>
                        <div className={styles.inputRow}>
                            <button
                                className="button button__primary"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className="button button__secondary"
                                type="reset"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </FormProvider>
            )}
            {showLoading && <FormLoader />}
            {message && !showLoading && (
                <FormResult message={message} success={success} />
            )}
        </>
    );
};

export default ContactForm;
