export default defineEventHandler(async (event) => {
    console.log(event.context.params);
    const {slug} = event.context.params
    try {
        const data = await $fetch(`http://localhost:10005/wp-json/wp/v2/posts/?slug=${slug}`)
        return data
    } catch (error) {
        console.error(error);
        return null;     
    }
}) 