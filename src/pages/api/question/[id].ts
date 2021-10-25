import { Request, Response } from 'express'

const question = (req: Request, res: Response): void => {
	if (req.method === 'GET') {
		const id = req.query.id
		res.status(200).json({
			id,
			enunciation: `What's  the sky color?`,
			alternatives: ['white', 'black', 'blue', 'grey', 'all above'],
		})
	} else {
		res.status(405).send()
	}
}

export default question
