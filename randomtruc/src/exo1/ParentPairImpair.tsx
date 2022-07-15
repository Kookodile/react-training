import React, {useState} from "react";
import {EnfantPairImpair} from "./EnfantPairImpair"


export function ParentPairImpair() {
    const [number, setNumber] = useState(0);

    /**
     * Fonction qui est appelée quand l'utilisateur modifie la valeur de l'input
     * @param event
     */
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.target.value = valeur modifiée par utilisateur
        // event.target.value est toujours un string mais setNumber veut un entier
        // donc on le convertit avec Number.parseInt()
        // Vu qu'on ne peut modifier number directement, on appelle setNumber() pour que React le fasse
        setNumber(Number.parseInt(event.target.value))
    }
    return <div>
        <input onChange={onChange} value={number} type="number"/>
        <EnfantPairImpair value={number}></EnfantPairImpair>
    </div>
}