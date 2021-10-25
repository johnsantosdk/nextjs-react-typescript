import { useState } from 'react'

type User = {
	name: string
	age: number
}

const form = (): JSX.Element => {
	// const [name, setName] = useState<string>('')
	// const [age, setAge] = useState<number>(0)
	const [user, setUser] = useState<User>({ name: '', age: 0 })
	const [users, setUsers] = useState<Array<User>>()

	const saveUser = async () => {
		await fetch('api/form', {
			method: 'POST',
			body: JSON.stringify(user),
		})

		const res = await fetch('api/form')
		const users = await res.json()
		setUsers(users)
	}

	const handleChangeUser = (e): void => {
		e.preventDefault()
		const { name, value } = e.target
		setUser((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	const renderUsers = (): Array<JSX.Element> | undefined => {
		return users?.map((user, i) => {
			return (
				<li key={i}>
					{user.name} - {user.age}
				</li>
			)
		})
	}

	return (
		<div>
			<h1>API Integration</h1>
			<input type="text" name="name" id="" value={user.name} onChange={handleChangeUser} />
			<input type="number" name="age" id="" value={user.age} onChange={handleChangeUser} />
			<button onClick={saveUser}>SEND</button>

			<ul>{renderUsers()}</ul>
		</div>
	)
}

export default form
