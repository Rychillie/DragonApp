import React, { useState } from 'react'
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

const BtnAdd = styled.button`
  float: right;
  background: #5dbb5d;
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

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', histories: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.histories) return

				props.addUser(user)
				setUser(initialFormState)
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
      <BtnAdd>Adicionar Dragão</BtnAdd>
    </Form>
  )
}

export default AddUserForm
