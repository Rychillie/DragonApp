import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Form = styled.form``

const Line = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 920px) {
    flex-direction: row;
  }
`

const LineItem = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const Space = styled.div`
  flex: 1;
`

const BtnUpd = styled.button`
  float: right;
  background: #5dbb5d;
  color: white;
  border-radius: 8px;
  padding: 10px 25px;
  margin-top: 10px;
  font-weight: 700;
  box-sizing: border-box;
  margin-left: 10px;
  opacity: 1;
  border: 0;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`

const BtnEdit = styled.button`
  float: right;
  background: #5d66bb;
  color: white;
  border-radius: 8px;
  padding: 10px 25px;
  margin-top: 10px;
  font-weight: 700;
  box-sizing: border-box;
  opacity: 1;
  border: 0;

  &:hover {
    cursor: pointer;
    opacity: .6;
  }
`

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <Form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <Line>
        <LineItem>
          <label>Nome:</label>
          <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        </LineItem>
        <Space/>
        <LineItem>
          <label>Type:</label>
          <input type="text" name="type"/>
        </LineItem>
      </Line>
      <Line>
        <LineItem>
          <label>Imagem:</label>
          <input type="text" name="text"/>
        </LineItem>
      </Line>
      <Line>
        <LineItem>
          <label>Hitories:</label>
          <textarea type="text" name="histories" value={user.histories} onChange={handleInputChange} />
        </LineItem>
      </Line>
      <BtnUpd>Atualizar Dragão</BtnUpd>
      <BtnEdit onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </BtnEdit>
    </Form>
  )
}

export default EditUserForm
