import { boolean, pgTable, uuid } from 'drizzle-orm/pg-core';

export const TEST_ROW_ID = '00000000-0000-0000-0000-000000000001';

export const test = pgTable('test', {
  id: uuid('id').defaultRandom().primaryKey(),
  checked: boolean('checked').notNull().default(false),
});

export type TestRow = typeof test.$inferSelect;
