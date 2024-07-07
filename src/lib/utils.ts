import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import z from 'zod'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const validateUserId = z.object({
  userid:z.string()
}
)

export const validatePOST = z.object({
  userid:z.string(),
  product:z.string(),
  quantity:z.number()
})

export const validateDelete = z.object({
  userid:z.string(),
  product:z.string()
})

