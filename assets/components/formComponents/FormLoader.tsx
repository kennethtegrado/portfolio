import { FunctionComponent } from 'react';

const FormLoader: FunctionComponent = () => {
    return (
        <div className="form__content-container">
            <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h6 className="form__loader-text">Submitting Message</h6>
        </div>
    );
};

export default FormLoader;
