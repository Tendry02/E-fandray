import React, {useState} from 'react'
import Message from '../message/MessageComponent'


const users = [
	{
		"email": "tendry1@gmail.com",
		"pseudo": "tendry1",
		"password": "tendry1"
	},
	{
		"email": "tendry2@gmail.com",
		"pseudo": "tendry2",
		"password": "tendry2"
	},
	{
		"email": "tendry3@gmail.com",
		"pseudo": "tendry3",
		"password": "tendry3"
	}
]

const Login = () => {

const [email, setEmail] =useState('') 
const [password, setPassword] = useState('')
const [pseudo, setPseudo] = useState('')
const [connected, setConnected] = useState(false)

const handleEmailChange = (e:any) => {
	//console.log("mande")
	setEmail(e.target.value)
}

const handlePasswordChange = (e:any) => {
	setPassword(e.target.value)
}

const login = (e:any) => {
	e.preventDefault()
	users.map(function(user) {
		if(user.email === email && user.password === password) {
			setConnected(true)
			setPseudo(user.pseudo)
			console.log("connecter lesy a")
			return
		}
		else return console.log("Mauvais utlisateur ou mot de passe");
		
	})
}


	if(connected) {
		return(
			<Message email={email} pseudo={pseudo}/>
		)
	} else {
		return(
		<div className="box-form">
			<form className="form-signin">
  				
  				<h1 className="h3 mb-3 font-weight-normal">Connéctez-vous ici</h1>
  				<label  className="sr-only">Email</label>
  				<input type="email" id="inputEmail"  value={email}  onChange={handleEmailChange} className="form-control" placeholder="Email ... " />
				  <br />

  				<label  className="sr-only">Mot de passe</label>
  				<input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Mot de passe ..." required/>
  				<div className="checkbox mb-3">
    				<label>
      					<input type="checkbox" value="remember-me"/> Se souvenir de moi
    				</label>
  				</div>
  				<button className="btn btn-lg btn-success btn-block" type="submit" onClick={login}  >Se connecter</button>
  					
			</form>
		</div>
	)
	}
}

export default Login