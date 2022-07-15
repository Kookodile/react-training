import React from "react";
type EnfantProps = {value:number}
export function EnfantPairImpair(props: EnfantProps) {
    let string = "";
    if (props.value === 0) {
        string = "Nul"
    } else {
        const estPaire = props.value % 2 === 0
        string = estPaire ? "pair" : "impair"
    }
    return <div>
        <p>Le nombre {props.value} est {string}</p>
    </div>
}

