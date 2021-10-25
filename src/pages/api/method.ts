import { Request, Response } from 'express'

export default (req: Request, res: Response): void => {
	if (req.method == 'GET') {
		res.status(200).json({
			name: 'John',
		})
	} else {
		res.status(200).json({
			name: 'Lucas',
		})
	}
}
