import {drizzle} from 'drizzle-orm/vercel-postgres'
import {sql} from '@vercel/postgres'
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'
import { InferModel } from 'drizzle-orm'

export const cartTable = pgTable("ecart",{
    userid:varchar('userid',{ length: 255}).notNull(),
    product: varchar("product", { length:255 }).notNull(),
    quantity: integer("quantity"),
})

export type typeOfCart = InferModel<typeof cartTable>

export const db = drizzle(sql) 