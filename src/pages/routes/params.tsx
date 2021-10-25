import { useRouter } from 'next/router'
import Link from 'next/link'

const params = (): JSX.Element => {
	const router = useRouter()

	const id = router.query.id
	const name = router.query.name

	return (
		<div>
			<h1>
				Routes Params: {id} and {name}
			</h1>
			<Link href="/routes">
				<button>Back</button>
			</Link>
		</div>
	)
}

export default params
