import React, {useState} from "react";

type IncrementProps = { value: number, incrementBy?: number, text: string, setValue: (v: number) => void }

export function Increment(props: IncrementProps) {
    //
    const [text, setText] = useState(props.text);

    function addText() {
        setText(text + props.text)
    }

    function add() {
        props.setValue(props.value + (props.incrementBy ?? 1))
    }

    function onClick() {
        addText();
        add();
    }

    return <button onClick={onClick}>Vous avez appuyé {props.value} foi{text}</button>
}