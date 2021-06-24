// importa todos os atributos recebíveis no botão.

import {ButtonHTMLAttributes} from 'react';

import '../styles/button.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
    return(
        //Spreed operator espalha todas a propriedades vindas
        //como parâmetro
        <button className="button" {...props} />
    )
}

