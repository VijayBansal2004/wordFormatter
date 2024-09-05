import React, { useRef, useState } from 'react'
import WordFormatContext from './WordFormatContext'

const WordFormatContextProvider = ({ children }) => {
    const input = useRef('');
    const [output, setOutput] = useState();
    const [copyButtonFlag, setCopyButtonFlag] = useState(false);
    return (
        <WordFormatContext.Provider value={{ input, output, setOutput, copyButtonFlag, setCopyButtonFlag }}>
            {children}
        </WordFormatContext.Provider>
    )
}

export default WordFormatContextProvider
