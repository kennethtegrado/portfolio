import type { FunctionComponent } from 'react';

import { BsPatchCheckFill } from 'react-icons/bs';
import { MdNearbyError } from 'react-icons/md';

const FormResult: FunctionComponent<FormResultProps> = ({
    message,
    success,
}) => {
    return (
        <div className="form__content-container">
            <div className="form__content-icon">
                {success ? <BsPatchCheckFill /> : <MdNearbyError />}
            </div>

            <p className="form__content-text">{message}</p>
        </div>
    );
};

export default FormResult;

interface FormResultProps {
    success: boolean;
    message: string;
}
