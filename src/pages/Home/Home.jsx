import React, { useState, Fragment } from 'react'
import UserTable from '../../tables/UserTable'
import AddUserForm from '../../forms/AddUserForm'
import EditUserForm from '../../forms/EditUserForm'
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import './Home.css';

const Wrapper = styled.div`
  padding: 20px 2%;
  width: 94%;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ItemLarge = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  width: 100%;
`

const Title = styled.h3`
  margin: 0 0 25px;
  padding: 0;
`

const Home = () => {
	// Data
	const usersData = [
    {
      id: 1,
      name: 'Saphira',
      type: "epic",
      imageUrl: "https://vignette.wikia.nocookie.net/inheritance/images/7/7d/Saphira.jpg/revision/latest?cb=20100409085620",
      histories: "Saphira (pronounced \"suh-FEAR-uh\"), also known as Saphira II (used by fans to distinguish between the two dragons named \"Saphira\" in the books, the other being the dragon formerly bonded with Brom), Flametongue by the Urgals, as well as Bjartskular (meaning \"Brightscales\" in the Ancient Language) by the elves, was the only female dragon known to exist during the time of Eragon II, aside from Eldunarí. She was bonded to Eragon Shadeslayer as her Dragon Rider after her egg was rescued by the Varden's agents from the clutches of Galbatorix and was transported to the Spine by Arya, where Eragon found her. She was trained by Glaedr while Eragon was being trained by Oromis. Eventually Oromis, Glaedr, Saphira and Eragon started having classes together, then finally Eragon and Saphira had to leave to get ready for battle."
    },
    {
      id: 2,
      name: 'Thorn',
      type: 'rare',
      imageUrl: "https://vignette.wikia.nocookie.net/inheritance/images/6/61/Thorn.jpg/revision/latest?cb=20061122225257",
      histories: "Thorn was a red male dragon, bonded to Murtagh. He was trained to fight by Shruikan and by the time of the Battle of The Burning Plains he could breathe fire. Thorn was skilled at aerial combat, being able to compete with Saphira, even when he was severely injured. However, he never got the time to adjust to his body, since Galbatorix sped his growth with the help of Eldunarí, or the heart of hearts of other slain dragons."
    },
    {
      id: 3,
      name: 'Fírnen',
      type: 'epic',
      imageUrl: "https://vignette.wikia.nocookie.net/inheritance/images/8/85/F%C3%ADrnen.jpg/revision/latest/scale-to-width-down/350?cb=20110323162116",
      histories: "Fírnen (pronounced \"Feer-nin\") is a male Dragon, bonded to the Elf Queen Arya. He is the last egg (formerly) in Galbatorix's possession to hatch."
    },
	]

	const initialFormState = { id: null, name: '', histories: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, histories: user.histories })
  }

	return (
		<>
      <Header/>
      <Wrapper>
        <ItemLarge>
          {editing ? (
            <Fragment>
              <Title>Editar Dragões</Title>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Title>Adicionar Dragão</Title>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </ItemLarge>
        <ItemLarge>
          <Title>Lista de Dragões:</Title>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </ItemLarge>
      </Wrapper>
    </>
	)
}

export default Home;
