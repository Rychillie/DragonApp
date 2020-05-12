import React from 'react'
import styled from 'styled-components';
import Edit from '../img/edit.svg';
import Delete from '../img/delete.svg';

const Lista = styled.div``

const ItemLista = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: white;
  margin-bottom: 15px;
  padding: 10px 25px;
  border-radius: 8px;
  box-shadow: 0px 1px 1px #0000000D;
  box-sizing: border-box;
`

const Name = styled.p`
  font-weight: 700;
  flex: 1;
`

const Detail = styled.p`
  flex: 4;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding: 2px 20px;
`

const BtnList = styled.div`
  flex: 1;
  justify-content: space-around;
`

const BtnItem = styled.button`
  background: transparent;
  border: 0;
  flex: 1;
`

const NoUsers = styled.div`
  width: 100%;
`

const NoUser = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
`

const UserTable = props => (
  <Lista>
    {props.users.length > 0 ? (
      props.users.map(user => (
        <ItemLista key={user.id}>
          <Name>{user.name}</Name>
          <Detail>{user.histories}</Detail>
          <BtnList>
            <BtnItem
              onClick={() => {
                props.editRow(user)
              }}
            >
              <img src={Edit} />
            </BtnItem>
            <BtnItem
              onClick={() => props.deleteUser(user.id)}
            >
              <img src={Delete} />
            </BtnItem>
          </BtnList>
        </ItemLista>
      ))
    ) : (
      <NoUsers>
        <NoUser>Sem registros</NoUser>
      </NoUsers>
    )}
  </Lista>
)

export default UserTable
