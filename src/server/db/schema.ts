// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from 'drizzle-orm'
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar
} from 'drizzle-orm/mysql-core'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `ezy_lends_${name}`)

export const users = createTable(
  'users',
  {
    id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
    name: varchar('name', { length: 256 }),
    createdAt: timestamp('created_at')
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp('updatedAt').onUpdateNow(),
    email: varchar('email', { length: 256 }).unique().notNull()
  },
  (example) => ({
    nameIndex: index('name_idx').on(example.name)
  })
)
