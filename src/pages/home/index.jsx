import React, { useEffect, useState } from "react";
import Header from '~/components/header'
import { StyleHomeContainer } from './style'

export default () => {
    const [texto, setTexto] = useState(['conexao','download', 'upload']);
    let auxPosition = 0
    setInterval(() => {
        auxPosition != 2 ? auxPosition++ : auxPosition = 0
    }, 2000);
    return (
        <StyleHomeContainer>
            <Header />
                <h1>
                    {texto[auxPosition]}
                </h1>
        </StyleHomeContainer>
    )
}