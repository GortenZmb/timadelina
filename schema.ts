import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const guests = pgTable("guests", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  attending: boolean("attending").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})
