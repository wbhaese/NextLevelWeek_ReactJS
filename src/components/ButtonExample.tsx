// type ButtonProps = {
//     // text?: Array<string>;//outras opções: number, string ou string[] => para definir como array
//     children?: string;
// }
//a interrogação informa que a propriedade é opcional

import { useState } from "react";

//importando propriedades pelo props:
//<button>{props.children || 'Default' }</button>

// passando os parâmetros na função:
// export function Button(props: ButtonProps){ ...}

// let counter = 0;
// Para que o estado seja modificado, a variável counter não poder ser um let


export function Button(){
    //nessa cosntante, o count é o valor inicial, e o setCounter modifica o valor
    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter +1);
    }

    return(
        <button className="button" onClick={increment}>{counter}</button>
    )
}

//Outra forma de exportar:
//export default Button;