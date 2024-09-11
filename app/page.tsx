import { LandingPage } from '@/components/landing-page'
import Mask from '@/components/mask'

export const metadata = {
	title: 'Fysite Academy',
	description:
		'Online learning web development course led by fysite.',
	icons: {
		icon: 'fav.svg',
	},
}

export default function Home() {
	return (
		<>
			<Mask />
			<LandingPage />
		</>
	)
}
