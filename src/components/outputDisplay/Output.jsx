import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { MdContentCopy, MdDone } from "react-icons/md";
import styles from "./Output.module.css"

const Output = ({ output, className, copyText, copyButtonFlag }) => {

    return (
        <>
            <div className="outputContainer position-relative">
                <p className={className} ><b>Output: </b></p>
                <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                    value={output}
                    readOnly
                    className={`${styles.bgDark} mt-2`}
                />
                {copyButtonFlag ? <MdDone className={`position-absolute ${styles.copyIcon}`} /> : <MdContentCopy className={`position-absolute ${styles.copyIcon}`} onClick={() => {
                    copyText(output);
                }} />}
            </div>
        </>
    )
}

export default Output;
