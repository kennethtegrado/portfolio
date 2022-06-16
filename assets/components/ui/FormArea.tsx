import type { FunctionComponent, ReactElement } from 'react';

import styles from '@styles/ui/Forms.module.css';

import { FaExclamationCircle } from 'react-icons/fa';

import { useFormContext } from 'react-hook-form';

const FormArea: FunctionComponent<Props> = ({
    name,
    label,
    required = false,
    errorMessage,
    pattern = '.',
    ...props
}) => {
    const { register } = useFormContext();
    return (
        <div className={styles.inputGroup}>
            <textarea
                className={`${styles.inputArea} ${
                    errorMessage ? styles.error : ''
                }`}
                id={name}
                placeholder=" "
                {...props}
                {...register(name, { required, pattern: new RegExp(pattern) })}
            ></textarea>
            <label
                htmlFor={name}
                className={`${styles.inputAreaLabel} ${
                    errorMessage ? styles.error : ''
                }`}
            >
                {label}
            </label>
            {errorMessage && (
                <p className={styles.errorMessage}>
                    <FaExclamationCircle /> {errorMessage}
                </p>
            )}
        </div>
    );
};

export default FormArea;
interface Props {
    name: string;
    label: string;
    icon?: ReactElement;
    props?: any;
    required?: boolean;
    pattern?: string;
    errorMessage: string;
}
