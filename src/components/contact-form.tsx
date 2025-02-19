'use client'

import * as React from 'react'
import {
	Card,
	CardTitle,
	CardHeader,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

import { contactFormAction } from '@/lib/actions'
import {
	ArrowUpRight,
	BookOpen,
	Check,
	Plus,
	User,
} from 'lucide-react'
import Image from 'next/image'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from './ui/select'

export function ContactForm({
	className,
}: React.ComponentProps<typeof Card>) {
	const [state, formAction, pending] = React.useActionState(
		contactFormAction,
		{
			defaultValues: {
				name: '',
				email: '',
				need: 'module only',
				coupon: '',
				message: '',
			},
			success: false,
			errors: null,
		}
	)

	if (state.success) {
		const { data } = state
		window.location.href = `https://api.whatsapp.com/send/?phone=6281910090007&text=Nama: ${
			data?.name
		}, Email: ${data?.email}, Need: ${data?.need} ${
			data?.coupon !== '' ? `, Coupon: ${data?.coupon}` : ''
		}
		${data?.message !== '' ? `, Message: ${data?.message}` : ''}`
	}

	return (
		<Card
			className={cn(
				'w-full max-w-sm border-hidden shadow-none p-3 sm:p-0 rounded-none',
				className
			)}>
			<CardHeader>
				<Image
					src='/logo.svg'
					width={90}
					height={90}
					alt='logo'
				/>
				<CardTitle className='!mt-5'>Registration</CardTitle>
				<CardDescription>{`Let's transform your ideas into site!`}</CardDescription>
			</CardHeader>
			<form action={formAction}>
				<CardContent className='flex flex-col gap-6'>
					{state.success ? (
						<p className='text-muted-foreground flex items-center gap-2 text-sm'>
							<Check className='size-4' />
							Your message has been sent. Thank you.
						</p>
					) : null}
					<div
						className='group/field grid gap-2'
						data-invalid={!!state.errors?.name}>
						<Label
							htmlFor='name'
							className='group-data-[invalid=true]/field:text-destructive'>
							<span className='font-mono text-xs'>[1]</span> Name{' '}
							<span aria-hidden='true'>*</span>
						</Label>
						<Input
							id='name'
							name='name'
							placeholder='John Doe'
							className='group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive'
							disabled={pending}
							aria-invalid={!!state.errors?.name}
							aria-errormessage='error-name'
							defaultValue={state.defaultValues.name}
						/>
						{state.errors?.name && (
							<p
								id='error-name'
								className='text-destructive text-sm'>
								{state.errors.name}
							</p>
						)}
					</div>
					<div
						className='group/field grid gap-2'
						data-invalid={!!state.errors?.email}>
						<Label
							htmlFor='email'
							className='group-data-[invalid=true]/field:text-destructive'>
							<span className='font-mono text-xs'>[2]</span> Email{' '}
							<span aria-hidden='true'>*</span>
						</Label>
						<Input
							id='email'
							name='email'
							placeholder='johndoe@gmail.com'
							className='group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive'
							disabled={pending}
							aria-invalid={!!state.errors?.email}
							aria-errormessage='error-email'
							defaultValue={state.defaultValues.email}
						/>
						{state.errors?.email && (
							<p
								id='error-email'
								className='text-destructive text-sm'>
								{state.errors.email}
							</p>
						)}
					</div>
					<div
						className='group/field grid gap-2'
						data-invalid={!!state.errors?.need}>
						<Label
							htmlFor='need'
							className='group-data-[invalid=true]/field:text-destructive'>
							<span className='font-mono text-xs'>[3]</span> Need{' '}
							<span aria-hidden='true'>*</span>
						</Label>
						<RadioGroup
							defaultValue={state.defaultValues.need}
							id='need'
							name='need'>
							<Alert className='flex space-x-3 rounded-none focus-within:border-black'>
								<RadioGroupItem
									value='module only'
									id='option-one'
								/>
								<Label htmlFor='option-one'>
									<BookOpen className='w-4 h-4 mb-2' />
									<AlertTitle className='font-semibold'>
										Module only{' '}
										<span className='font-mono text-xs font-medium'>
											[50K/lifetime]
										</span>
									</AlertTitle>
									<AlertDescription className='text-xs'>
										Access our complete web development module. With{' '}
										<b>quiz and submission</b> checking feature +{' '}
										<b>Group dicussion</b>. Trial module:{' '}
										<a
											target='_blank'
											href='https://trial.fysite.id'
											className='text-blue-600 underline'>
											trial.fysite.id
										</a>
									</AlertDescription>
								</Label>
							</Alert>
							<Alert className='flex space-x-3 rounded-none focus-within:border-black'>
								<RadioGroupItem
									value='mentor & career'
									id='option-two'
								/>
								<Label htmlFor='option-two'>
									<div className='flex space-x-1 mb-2'>
										<BookOpen className='w-4 h-4' />
										<Plus className='w-4 h-4' />
										<User className='w-4 h-4' />
									</div>
									<AlertTitle className='font-semibold'>
										Mentor & Career{' '}
										<span className='font-mono text-xs font-medium'>
											[400K/5 meet]
										</span>
									</AlertTitle>
									<AlertDescription className='text-xs'>
										Module only benefit + 5 times{' '}
										<b>private mentoring</b> with detailed submission
										explanation and earn certificates, opportunity to
										work intern with us!
									</AlertDescription>
								</Label>
							</Alert>
						</RadioGroup>

						{state.errors?.need && (
							<p
								id='error-need'
								className='text-destructive text-sm'>
								{state.errors.need}
							</p>
						)}
					</div>
					<div
						className='group/field grid gap-2'
						data-invalid={!!state.errors?.coupon}>
						<Label
							htmlFor='coupon'
							className='group-data-[invalid=true]/field:text-destructive'>
							Coupon{' '}
							<span className='font-mono text-xs'>(optional)</span>
						</Label>
						<Input
							id='coupon'
							name='coupon'
							placeholder='***'
							className='group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive'
							disabled={pending}
							aria-invalid={!!state.errors?.coupon}
							aria-errormessage='error-coupon'
							defaultValue={state.defaultValues.coupon}
						/>
						{state.errors?.coupon && (
							<p
								id='error-coupon'
								className='text-destructive text-sm'>
								{state.errors.coupon}
							</p>
						)}
					</div>
					<div
						className='group/field grid gap-2'
						data-invalid={!!state.errors?.message}>
						<Label
							htmlFor='message'
							className='group-data-[invalid=true]/field:text-destructive'>
							Message{' '}
							<span className='font-mono text-xs'>(optional)</span>
						</Label>
						<Textarea
							id='message'
							name='message'
							placeholder='Type your consent here..'
							className='group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive'
							disabled={pending}
							aria-invalid={!!state.errors?.message}
							aria-errormessage='error-message'
							defaultValue={state.defaultValues.message}
						/>
						{state.errors?.message && (
							<p
								id='error-message'
								className='text-destructive text-sm'>
								{state.errors.message}
							</p>
						)}
					</div>
				</CardContent>
				<CardFooter>
					<Button
						type='submit'
						size='sm'
						disabled={pending}>
						{pending ? (
							'Sending...'
						) : (
							<>
								Submit <ArrowUpRight className='-ml-1' />
							</>
						)}
					</Button>
				</CardFooter>
			</form>
		</Card>
	)
}
