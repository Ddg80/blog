// http://localhost:10005/wp-json/wp/v2/users/1
export default defineEventHandler(async (event) => {
    const authorId = event.context.params?.id
    try {
        const data = await $fetch(`http://localhost:10005/wp-json/wp/v2/users/${authorId}`)
        return data
    } catch (error) {
        console.error(error);
        return null;     
    }
}) 