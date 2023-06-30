import { useState } from 'react'
import {
    StyleContainer,
    StyleIntroductionSide,
    StyleLoginSide,
    StyleImg,
    StyleDivLoginFormIcon,
    StyleDivLoginFormInputs,
    StyleDivLoginFormButtons,
    StyleForgotPasswordLink,
    StyleSeparatorContainer,
    StyleSeparator,
    StyleLoginTitle,
} from './style';
import Input from '~/components/input';
import Button from '~/components/button';
import LoginImage from '~/assets/logo-marca.png'
import Logo from '~/assets/fake-logo.png'


export default () => {
  const [loading, setLoading] = useState();
  return (
    <StyleContainer>
        <StyleLoginSide>
            <StyleDivLoginFormIcon>
                <StyleImg
                    src={Logo}
                    width={100}
                />
                <StyleLoginTitle>
                    Faca login na sua conta
                </StyleLoginTitle>
            </StyleDivLoginFormIcon>
            <StyleDivLoginFormInputs>
                <Input
                    placeholder="E-mail"
                    type='e-mail'
                />
                <Input
                    placeholder="Senha"
                    type='password'
                />
                <StyleForgotPasswordLink>
                    Esqueci minha senha
                </StyleForgotPasswordLink>
            </StyleDivLoginFormInputs>
            <StyleDivLoginFormButtons>
                <Button
                    size='large'
                >
                    Entrar
                </Button>
                <StyleSeparatorContainer>
                    <StyleSeparator />
                        <span> OU </span>
                    <StyleSeparator />
                </StyleSeparatorContainer>
                <Button
                    size='large'
                    className='outline'
                >
                    Cadastrar
                </Button>
            </StyleDivLoginFormButtons>
        </StyleLoginSide>
        <StyleIntroductionSide>
            <StyleImg src={LoginImage} />
        </StyleIntroductionSide>
    </StyleContainer>
  )
}
