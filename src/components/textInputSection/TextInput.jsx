import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from "./TextInput.module.css";
const TextInput = ({ input, setinput }) => {
    return (
        <>
            <FloatingLabel controlId="floatingTextarea2" label="Input Text here" className={styles.bgDark}>
                <Form.Control
                    as="textarea"
                    placeholder="Input Text here"
                    style={{ height: '100px' }}
                    className={styles.bgDark}
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                />
            </FloatingLabel>
        </>
    )
}

export default TextInput
