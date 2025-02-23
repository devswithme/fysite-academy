import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	subsets: ['latin'],
	variable: '--font-sans',
})
const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-mono',
})

export const metadata: Metadata = {
	title: 'Fysite Academy',
	description:
		'A product from fysite.id to nurture people about technologies',
	icons: {
		icon: '/fav.svg',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
				{children}
			</body>
		</html>
	)
}
