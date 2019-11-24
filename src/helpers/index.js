export const getPostsByUser = (posts=[], users=[], userName) => {
    const user = users.find(user => user.username === userName) || [];
    return posts.filter(post => post.userId === user.id);
}

export const getPostByPostId = (posts, id) => posts.find(post => post.id === id);

export const getUserByUserId = (users, id) => users.find(user => user.id === id);

export const getCommentsByPostId = (comments, id) => comments.filter(
    comment => comment.postId === id);

export const isSameNumberOfComments = (currentComments, newComments, id) => {
    return getCommentsByPostId(currentComments, id).length ===
    getCommentsByPostId(newComments, id).length;
}