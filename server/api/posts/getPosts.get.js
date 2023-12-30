import db from '../../../models/index.js';

export default defineEventHandler((event) => {
  console.log("event", event);
  return getAll();
})

/**
 * get All
 */

async function getAll() {
  return db.Posts.findAll();
}