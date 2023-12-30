import db from '../../../models/index.js';

export default defineEventHandler(async (event) => {
    const form = await readBody(event);
    return deletePost(form.id);
})

/**
 * Delete a Post
 * 
 */

async function deletePost(id) {
    console.log("id", id);
    return await db.Posts.destroy({
        where: {
          id: Number(id),
        },
      });
}