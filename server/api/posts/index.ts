export default defineEventHandler(async () => {
    try {
        const data = await $fetch(`http://localhost:10005/wp-json/wp/v2/posts`)
        return data
    } catch (error) {
        console.error(error);
        return null;     
    }
}) 