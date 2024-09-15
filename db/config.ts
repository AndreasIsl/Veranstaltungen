import { defineDb, defineTable, column } from 'astro:db';

const EventTable = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    startDate: column.text(),
    endDate: column.text(),
    thumbnailUrl: column.text()
  }
});




// https://astro.build/db/config
export default defineDb({
  tables: {EventTable},
});
//todo add functionality