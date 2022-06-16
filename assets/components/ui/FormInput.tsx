import type { FunctionComponent, ReactElement } from 'react';

import styles from '@styles/ui/Forms.module.css';
import { FaExclamationCircle } from 'react-icons/fa';

import { useFormContext } from 'react-hook-form';

const FormInput: FunctionComponent<Props> = ({
    type,
    name,
    label,
    icon,
    required,
    pattern = '.',
    errorMessage,
    ...props
}) => {
    const { register } = useFormContext();
    return (
        <div className={styles.inputGroup}>
            <input
                placeholder=" "
                type={type}
                id={name}
                autoComplete="off"
                {...props}
                className={`${styles.input} ${
                    errorMessage ? styles.error : ''
                }`}
                {...register(name, { required, pattern: new RegExp(pattern) })}
            />
            <label
                htmlFor={name}
                className={`${styles.inputLabel} ${
                    errorMessage ? styles.error : ''
                }`}
            >
                {label}
            </label>
            <span
                className={`${styles.inputIcon} ${
                    errorMessage ? styles.error : ''
                }`}
            >
                {icon || label[0]}
            </span>
            {errorMessage && (
                <p className={styles.errorMessage}>
                    <FaExclamationCircle /> {errorMessage}
                </p>
            )}
        </div>
    );
};

export default FormInput;

interface Props {
    name: string;
    type: string;
    label: string;
    icon?: ReactElement;
    props?: any;
    required?: boolean;
    pattern?: string;
    errorMessage: string;
}
