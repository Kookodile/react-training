import React, {ReactElement, useState} from 'react';
import {ParentPairImpair} from "./exo1/ParentPairImpair";
import {Increment} from "./exo0/Increment";
import {Echiquier} from "./exo2/Echiquier";


type ExoContainerProps = {

    numero: number,
    children: ReactElement

}

function ExoContainer(props: ExoContainerProps) {


    return <div style={{margin:'3rem'}}>
        <h1>
            Exercice : {props.numero}
        </h1>
       <div style={{margin:'2rem'}}>
           {props.children}
       </div>
    </div>
}

function App() {

    const [number, setNumber] = useState(0);
    return (
        <div className="App">

            <ExoContainer numero={0}>
                <header className="App-header">
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>

                    <Increment setValue={setNumber} incrementBy={4} value={number} text={'s'}/>
                    <Increment setValue={setNumber} incrementBy={undefined} value={number} text={'s'}/>
                    <Increment setValue={setNumber} incrementBy={-1} value={number} text={'z'}/>
                </header>
            </ExoContainer>


            <ExoContainer numero={1}>
                <ParentPairImpair/>
            </ExoContainer>

            <ExoContainer numero={2}>
                <Echiquier taille={3}></Echiquier>
            </ExoContainer>


        </div>
    );
}

export default App;
