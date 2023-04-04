import {
    StyleButton,
} from './style'

export default (props) => {
    const { children } = props
    const handleClick = () => {
        console.log('CLICKED BUTTON')
    }
    return (
        <StyleButton
            onClick={() => handleClick()}
            {...props}
        >
            {children}
        </StyleButton>
    )
}