import db from '../../../models/index.js';

export default defineEventHandler((event) => {
  return getAll();
})

/**
 * get All
 */

async function getAll() {
  return db.Posts.findAll();
}