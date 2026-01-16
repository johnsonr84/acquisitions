import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  id: varchar('id').primaryKey(),
  name: varchar('name', {length: 255}).notNull(),
  email: varchar('email', {length: 255}).notNull().unique(),
  password: varchar('password', {length: 255}).notNull(),
  role: varchar('role', {length: 50}).notNull().default('user'),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp().defaultNow().notNull(),
});

export default user;