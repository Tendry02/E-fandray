import React, { useState } from 'react'


interface Iprops {
	pseudo: string
	email: string
}

const users = [
	{
		"email": "tendry@gmail.com",
		"pseudo": "tendry",
		"password": "tendry"
	},
	{
		"email": "user1@gmail.com",
		"pseudo": "user1",
		"password": "user1"
	},
	{
		"email": "user2@gmail.com",
		"pseudo": "user2",
		"password": "user2"
	},

]
let tableau: any = [''];


const Message: React.FC<Iprops> = ({ email, pseudo }) => {

	const [textMessage, setTextMessage] = useState('')
	const [allMessage, setAllMessage] = useState([' '])
	const [allContact, setAllContact] = useState([' '])



	const handleClickSend = (e: any) => {
		e.preventDefault()
		console.log(tableau)
		tableau.push(textMessage)
		setAllMessage(tableau)
		setTextMessage("")
	}

	const handleMessageChange = (e: any) => {
		setTextMessage(e.target.value)
	}
	const Login = () => {
		return (
			<div>
				{
					users.map(function (user) {
						return <li> {user.pseudo}  </li>
					})
				}
			</div>
		)
	}





	return (
		<div>

		<form action="" className="formMessage">

			<div >
				<input type="text" placeholder="Entrer le pseudo du destinataire" />
			</div>
			<div id="messageSended">
				{
					allMessage.map(function (message) {
						return <p key={message}>{message}</p>

					})
				}
			</div>
			<hr />
			<div className="sendMessage">
				<input type="text" placeholder="Entrer votre message"id="dest" value={textMessage} onChange={handleMessageChange} />

				<button type="submit" className="btn btn-success" id="sendMessage" onClick={handleClickSend}> Envoyer </button>
			</div>
			</form>

		</div>
	)

}

export default Message
