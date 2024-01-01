import db from '../../../models/index.js';

export default defineEventHandler(async (event) => {
  const form = await readBody(event);
  const { title, content } = extractTitleAndBody(form.content);
    return updatePost(form.id, title, content);
})


/**
 * Extract title and body from content.
 * 
 * @param {String} content - The content of the post.
 * @returns {Object} - The title and body of the post.
 */
function extractTitleAndBody(bodyData) {
  const dataArr = bodyData.split('||');
  const title = dataArr[0].trim();
  const content = (dataArr[1] || '').trim();
  return { title, content };
}

/**
 * Update a post.
 */
async function updatePost(id, title, content) {
  const post = await db.Posts.update({
    title,
    content,
  }, {
    where: { id },
  });
  return post;
}