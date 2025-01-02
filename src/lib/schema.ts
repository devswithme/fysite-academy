import { z } from 'zod'

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Name must be at least 2 characters' })
		.max(32, { message: 'Name must be at most 32 characters' }),
	email: z.string().email({ message: 'Invalid email address' }),
	need: z.string(),
	coupon: z.string().optional(),
	message: z.string().optional(),
})
