
export default (token) => {
    const colors = {
        'primary': '#fd7401',
        'grey': `rgba(150, 150, 150, 0.8)`,
        'grey-1': `rgba(150, 150, 150, 0.2)`,
        'grey-2': `rgba(200, 200, 200, 0.1)`,
        'box-shadow': `1px 1px 1px rgba(0,0,0,0.1)`,
    }
    return colors[token] || colors['primary']
}