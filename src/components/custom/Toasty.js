import React, { useState } from "react";
import Toast from 'react-bootstrap/Toast'
import Button from "react-bootstrap/Button";
import { FaQuestionCircle } from 'react-icons/fa'

const Toasty = ({ children }) => {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    return (
        <>
            {!showA && <Button onClick={toggleShowA}>Show Toast</Button>}
            <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                    <FaQuestionCircle className={"FaQuestionCircle"} />
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>{children}</Toast.Body>
            </Toast>
        </>
    );
};

export default Toasty