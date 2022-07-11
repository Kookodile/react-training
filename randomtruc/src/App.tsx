import React, {useState} from 'react';

type IncrementProps = { value: number, incrementBy?: number, text: string, setValue: (v:number) => void }

function Increment(props: IncrementProps) {
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

function App() {

    const [number, setNumber] = useState(0);
    return (
        <div className="App">
            <header className="App-header">

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <Increment setValue={setNumber} incrementBy={4} value={number} text={'s'}></Increment>
                <Increment setValue={setNumber} incrementBy={undefined} value={number} text={'s'}></Increment>
                <Increment setValue={setNumber} incrementBy={-1} value={number} text={'z'}></Increment>
            </header>
        </div>
    );
}

export default App;
