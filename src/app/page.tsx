import { ContactForm } from '@/components/contact-form'

export default function Page() {
	return (
		<div className='flex min-h-svh items-center justify-center'>
			<div className='absolute inset-0 h-full w-full bg-neutral-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] -z-20 hidden sm:block' />
			<ContactForm />
		</div>
	)
}
