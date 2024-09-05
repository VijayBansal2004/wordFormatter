import React from 'react'
import Button from 'react-bootstrap/Button';
import styles from "./Operation.module.css"

const Operation = ({ value, className, handleOperation, color }) => {
    return (
        <>
            <Button as="input" variant={color} type="button" value={value} className={styles.buttonClass} onClick={(e) => handleOperation(e)} />
        </>
    )
}

export default Operation
