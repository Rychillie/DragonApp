import React from 'react';
import styled from 'styled-components';

function logout() {
    localStorage.clear("token");
    window.location.href = '/';
}

const AdminHeader = styled.div`
    background: white;
    box-shadow: 0px 1px 1px #0000000D;
`

const WrapperHeader = styled.div`
    padding: 20px 2%;
    width: 94%;
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Title = styled.h1`
    font-size: 28px;
    line-height: 32px;
    padding: 0;
    margin: 0;
`

const Btn = styled.button`
    height: 32px;
    line-height: 22px;
    padding: 5px 10px;
    font-size: 16px;
    background: white;
    border: 2px solid #6868ff;
    border-radius: 5px;
    color: #6868ff;
    text-align: center;
    box-sizing: border-box;
    transition: all 300ms ease-in-out;

    &:hover {
        cursor: pointer;
        background: #6868ff;
        color: white;
    }
`

const Header = () => (
    <AdminHeader>
        <WrapperHeader>
            <Title>Dragon App</Title>

            <Btn type="button" onClick={logout}>Sair</Btn>
        </WrapperHeader>
    </AdminHeader>
);

export default Header;
