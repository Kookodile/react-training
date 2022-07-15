import React, {ReactNode} from 'react';
import "./Echiquier.scss"

type EchiquierProps = { taille: number }


export function Echiquier(props: EchiquierProps) {

    let plateau: ReactNode[] = []

    for (let ligne = 0; ligne < props.taille; ligne++) {
        const cases: ReactNode[] = []

        for (let colonne = 0; colonne < props.taille; colonne++) {

            let className = "blanc"
            if ((colonne % 2 === 0 && ligne % 2 !== 0) || (colonne % 2 !== 0 && ligne % 2 === 0)) {
                className = "noir"
            }
            cases.push(<span className={className}></span>)
        }
        plateau[ligne] = <div> {cases} </div>;
    }




    return (
        <div className="Echiquier">
            {plateau}
        </div>
    );
}

