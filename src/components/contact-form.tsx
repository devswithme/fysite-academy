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
import { ArrowUpRight, Check } from 'lucide-react'
import Image from 'next/image'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select'

export function ContactForm({
	className,
}: React.ComponentProps<typeof Card>) {
	const [state, formAction, pending] = React.useActionState(
		contactFormAction,
		{
			defaultValues: {
				name: '',
				email: '',
				need: 'academy',
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
				<CardTitle className='!mt-5'>Fysite Academy</CardTitle>
				<CardDescription>
					Register here and unlock your potential!
				</CardDescription>
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
						<Select
							name='need'
							disabled={pending}
							aria-invalid={!!state.errors?.need}
							aria-errormessage='error-need'
							defaultValue={state.defaultValues.need}>
							<SelectTrigger
								id='need'
								className='group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive'>
								<SelectValue placeholder='Select your need' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='academy'>Academy</SelectItem>
								<SelectItem value='live class'>Live class</SelectItem>
								<SelectItem value='webinar'>Webinar</SelectItem>
							</SelectContent>
						</Select>

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
								Register <ArrowUpRight className='-ml-1' />
							</>
						)}
					</Button>
				</CardFooter>
			</form>
		</Card>
	)
}
