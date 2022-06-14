import { css } from 'styled-components'

export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 769px) and (max-width: 1024px) {
            ${props}
        }
    `
}

export const mobile = (props) => {
    return css`
        @media only screen and (min-width: 375px) and (max-width: 768px) {
            ${props}
        }
    `
}
