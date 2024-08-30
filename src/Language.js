import { useState, useRef } from "react";

function Language() {

    const rName = useRef();
    const rExcellent = useRef();

    const [name, setName] = useState("");
    const [python, setPython] = useState(false);
    const [java, setJava] = useState(false);
    const [js, setJs] = useState(false);
    const [msg, setMsg] = useState("");

    const hName = (event) => {
        setName(event.target.value);
        // console.log('event.target.value: ', event.target.value);
    }

    const hPython = (event) => { setPython(event.target.checked); }
    const hJava = (event) => { setJava(event.target.checked); }
    const hJs = (event) => { setJs(event.target.checked); }

    const show = (event) => {
        event.preventDefault();
        if (name === "") {
            alert("Please enter name");
            setMsg("");
            rName.current.focus();
            return;
        }
        let lang = "";
        if (python) lang += "python";
        if (java) lang += "java";
        if (js) lang += "js";


        let a = "Name: " + name + "\nLanguage: " + lang;
        setMsg(a);
    }

    return (
        <>
            <center>
                <h1> Languages You know </h1>
                <form onSubmit={show}>
                    <input type="text" placeholder="enter your name" ref={rName} onChange={hName} />
                    <br /> <br />
                    <input type="checkbox" onChange={hPython} />Python
                    <input type="checkbox" onChange={hJava} />Java
                    <input type="checkbox" onChange={hJs} />JS
                    <br /><br />
                    <input type="submit" />
                </form>
                <h2> {msg} </h2>
            </center>
        </>
    );
}

export default Language;
