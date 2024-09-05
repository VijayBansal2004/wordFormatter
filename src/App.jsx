import { useEffect, useState } from 'react'
import './App.css'
import Heading from './components/heading/Heading'
import Operation from './components/operations/Operation'
import TextInput from './components/textInputSection/TextInput'
import Output from './components/outputDisplay/Output'

function App() {
  const [input, setinput] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const [output, setOutput] = useState();
  const [copyButtonFlag, setCopyButtonFlag] = useState(false);

  const buttons = ["Uppercase", "Lowercase", "Capitalize", "Trim", "Replace"]

  useEffect(() => {
    let str = input.split(" ");
    setWordCount(str.length - 1);
  }, [input]);

  const copyText = (output) => {
    navigator.clipboard.writeText(output);
    setCopyButtonFlag(!copyButtonFlag);
    setTimeout(() => {
      setCopyButtonFlag(false);
    }, 2000);
  }

  const uppercase = (input) => {
    return input.toUpperCase();
  }

  const lowercase = (input) => {
    return input.toLowerCase();
  }

  const capitalize = (input) => {
    const str = input.split(' ');
    let arr = "";
    str.forEach(e => {
      const restString = e.slice(1, e.length);
      const firstLetter = e.slice(0, 1).toUpperCase()

      let capitalizedWord = firstLetter + restString;
      arr += capitalizedWord + " ";
    });
    return arr;
  }

  const trimText = (input) => {
    const str = input.split(" ");
    const newStr = str.filter((item) => (item.length !== 0));
    const trimedText = newStr.join(" ");

    return trimedText;
  }

  const replaceText = (input, firstText, secondText) => {
    return input.replaceAll(firstText, secondText);
  }

  const handleOperation = (e) => {
    if (e.target.value === "Uppercase") {
      setOutput(uppercase(input));
    }
    else if (e.target.value === "Lowercase") {
      setOutput(lowercase(input));
    }
    else if (e.target.value === "Capitalize") {
      setOutput(capitalize(input));
    }
    else if (e.target.value === "Trim") {
      setOutput(trimText(input));
    }
    else if (e.target.value === "Replace") {
      const firstValue = prompt('Enter the text that you want to replace :');
      const secondValue = prompt('Enter the text that you want to replace with :');
      setOutput(replaceText(input, firstValue, secondValue));
    }
    else if (e.target.value === "Copy") {
      copyText(output === undefined ? input : output);
    }
  }

  return (
    <>
      <div className="container min-vh-100 align-content-center">
        <Heading className="text-center display-5 fw-bolder mb-4 text-decoration-underline" />
        <TextInput input={input} setinput={setinput} />
        <div className="countDisplay d-flex gap-3">
          <p className='mt-2'><b>Length: </b>{input.length}</p>
          <p className='mt-2'><b>Word Count: </b>{wordCount}</p>
        </div>
        <div className="operation-container mt-4 d-flex flex-wrap gap-3 justify-content-center">
          {buttons.map((button) => (
            <Operation key={button} value={button} handleOperation={handleOperation} />
          ))}

          <Operation color="success" value={copyButtonFlag ? "Copied" : "Copy"} className="me-3 text-white" handleOperation={handleOperation} />
        </div>

        {output && <Output className="mt-4" output={output} copyText={copyText} copyButtonFlag={copyButtonFlag} />}
      </div>
    </>
  )
}

export default App
