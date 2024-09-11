'use client'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import {
	ArrowUpRight,
	Check,
	Clock,
	Code,
	File,
	Globe,
	Video,
} from 'lucide-react'
import { Label } from './ui/label'
import Image from 'next/image'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import { useState } from 'react'

export function LandingPage() {
	const [form, setForm] = useState({
		name: '',
		contact: '',
	})
	return (
		<div className='flex flex-col min-h-[100dvh]'>
			<header className='px-4 lg:px-6 h-24 flex items-center justify-between container mx-auto'>
				<Link
					href='#'
					className='flex gap-x-2 items-center justify-center'
					prefetch={false}>
					<Image
						width='10'
						height='10'
						alt='logo'
						src='/logo.svg'
						className='aspect-square w-28'
					/>
					<span className='sr-only font-semibold text-lg tracking-tighter'>
						Academy
					</span>
				</Link>
				<nav>
					<Link
						href='https://www.fysite.id'
						target='_blank'
						className={buttonVariants({
							size: 'sm',
							variant: 'outline',
						})}>
						<Globe className='w-4 h-4 mr-2' /> Our service
					</Link>
				</nav>
			</header>
			<section className='w-full pt-10 sm:py-20'>
				<div className='container px-4 md:px-6 mx-auto'>
					<div className='grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-1 lg:space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
									Want to become a Websiters?
								</h1>
								<p className='max-w-[600px] text-muted-foreground md:text-xl'>
									Discover the power of our digital academy and unlock
									your potential skills.
								</p>
							</div>
							<div className='flex gap-2'>
								<Link
									href='#timeline'
									className={buttonVariants()}
									prefetch={false}>
									View timeline
									<Clock className='w-4 h-4 ml-2' />
								</Link>
								<Link
									href='#enroll'
									className={buttonVariants({
										variant: 'outline',
										className: 'bg-white',
									})}
									prefetch={false}>
									Enroll now <ArrowUpRight className='w-4 h-4 ml-2' />
								</Link>
							</div>
						</div>
						<Image
							src='/01.png'
							width='500'
							height='500'
							alt='Hero'
							className='mx-auto aspect-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last shadow-2xl shadow-indigo-700/70'
						/>
					</div>
				</div>
			</section>
			<section
				className='w-full md:py-20 bg-gradient-to-t from-muted to-transparent border-b'
				id='timeline'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='mx-auto grid items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
						<Image
							width='500'
							height='500'
							src='/02.png'
							alt='Courses'
							className='mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center sm:w-full order-last lg:order-first'
						/>
						<div className='flex flex-col justify-start space-y-6'>
							<div className='space-y-1 lg:space-y-2'>
								<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
									Timeline{' '}
								</h1>
								<p className='max-w-[600px] text-muted-foreground md:text-xl'>
									This course will be held in a month.
								</p>
							</div>

							<ul className='grid gap-6'>
								<li className='border p-4 bg-white shadow-sm flex gap-x-4 rounded-xl'>
									<h1 className='text-lg'>01</h1>
									<div className='grid gap-1'>
										<h3 className='text-lg md:text-xl font-bold flex gap-x-2 items-center'>
											<Video className='w-4 h-4' /> Intro & Meeting
										</h3>
										<p className='text-muted-foreground text-sm md:text-base'>
											Group and material division, Arrange the meeting
											course schedule
										</p>
									</div>
								</li>
								<li className='border-4 border-neutral-600 p-4 bg-neutral-800 shadow-sm flex gap-x-4 rounded-xl'>
									<h1 className='text-lg text-muted'>02</h1>
									<div className='grid gap-1'>
										<h3 className='text-lg md:text-xl font-bold flex gap-x-2 items-center text-primary-foreground'>
											<Code className='w-4 h-4' /> Project
										</h3>
										<p className='text-muted text-sm md:text-base'>
											Build a real-world project as this project will
											be your final grade
										</p>
									</div>
								</li>
								<li className='border p-1.5 bg-gradient-to-tr from-yellow-600 to-orange-500 shadow-sm rounded-xl'>
									<div className='flex gap-x-4 rounded-lg bg-white p-4'>
										<h1 className='text-lg'>03</h1>
										<div className='grid gap-1'>
											<h3 className='text-lg md:text-xl font-bold flex gap-x-2 items-center'>
												<File className='w-4 h-4' />
												Earn a certificate
											</h3>
											<p className='text-muted-foreground text-sm md:text-base'>
												Congratulation, you have finished this course!
												your certificate will be sent via email
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section
				className='w-full py-12 md:py-20'
				id='enroll'>
				<div className='container mx-auto px-4 md:px-6'>
					<div className='grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2'>
						<div className='space-y-4 order-last md:order-first'>
							<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm border'>
								Pricing
							</div>
							<div className='bg-gradient-to-tr from-orange-600 to-pink-600 p-1.5 rounded-xl shadow-sm border'>
								<Card className='w-full bg-neutral-800 text-primary-foreground rounded-lg border-none'>
									<CardHeader className='pt-4 relative'>
										<ArrowUpRight className='absolute w-8 h-8 top-5 right-5' />
										<CardTitle className='font-bold text-lg md:text-xl'>
											Websiters
										</CardTitle>
										<CardDescription className='font-semibold text-muted'>
											500K
										</CardDescription>
									</CardHeader>
									<CardContent className='text-sm md:text-base'>
										<ul className='space-y-0.5'>
											<li className='flex items-center gap-x-3'>
												<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
												Project based learning
											</li>
											<li className='flex items-center gap-x-3'>
												<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
												6 times online mentoring & flexible schedule
											</li>
											<li className='flex items-center gap-x-3'>
												<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
												Earn a certificate
											</li>
										</ul>
									</CardContent>
									<CardFooter className='text-sm italic text-muted'>
										*You will need min. 3 person in order to start the
										course.
									</CardFooter>
								</Card>
							</div>
						</div>
						<div className='flex flex-col items-start space-y-4'>
							<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm border'>
								Registration Form
							</div>
							<div className='grid gap-6 w-full'>
								<div className='space-y-2'>
									<Label>Name</Label>
									<Input
										placeholder='John Doe'
										onChange={(e) =>
											setForm((props) => ({
												...props,
												name: e.target.value,
											}))
										}
									/>
								</div>
								<div className='space-y-2'>
									<Label>Phone & Email</Label>
									<Input
										placeholder='+62 / you@example.com'
										onChange={(e) =>
											setForm((props) => ({
												...props,
												contact: e.target.value,
											}))
										}
									/>
								</div>

								<Button
									className='w-full md:w-fit'
									onClick={() => {
										if (form.name && form.contact) {
											window.location.href = `https://wa.me/6281910090007?text=[academy]:${form.name}-${form.contact}`
											setForm({
												name: '',
												contact: '',
											})
										}
									}}>
									Enroll now <ArrowUpRight className='w-4 h-4 ml-2' />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-muted-foreground'>
					&copy; {new Date().getFullYear()} Fysite Academy.
				</p>
			</footer>
		</div>
	)
}
