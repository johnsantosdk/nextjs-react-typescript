import { Request, Response } from 'express'

const users: User[] = []

const form = (req: Request, res: Response): void => {
	if (req.method === 'POST') {
		post(req, res)
	} else if (req.method === 'GET') {
		get(req, res)
	} else {
		res.status(405)
	}
}

const post = (req: Request, res: Response): void => {
	const user = JSON.parse(req.body)
	console.log('Data: ', user)
	users.push(user)
	res.status(200).send()
}

const get = (req: Request, res: Response): void => {
	res.status(200).json(users)
}

export default form
