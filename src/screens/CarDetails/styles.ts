import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 24px;
    margin-left: 24px;
`