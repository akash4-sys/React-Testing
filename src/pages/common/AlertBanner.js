import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertBanner({ message, variant }) {
    const alertMessage = message || 'An unexpected error occur please try again later.';
    const alertVariant = variant || 'danger';

    return (
        <Alert key={alertVariant} variant={alertVariant}>
            {alertMessage}
        </Alert>
    )
}

export default AlertBanner;