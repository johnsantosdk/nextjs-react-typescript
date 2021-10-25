import Link from 'next/link'

const routes = (): JSX.Element => (
	<div>
		<h1>Routes On index</h1>
		<ul>
			<Link href="/routes/params?id=300&name=Dark">
				<li>Params</li>
			</Link>
		</ul>
	</div>
)

export default routes

