import db from '../../../models/index.js';

export default defineEventHandler(async (event) => {
  const form = await readBody(event);
  console.log("form", form);
  return getById(form.id);
})

/**
 * get All
 */

async function getById(id) {
  return db.Posts.findOne({ where: { id } });
}