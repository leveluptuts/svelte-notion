const NOTION_API = 'https://notion-api.splitbee.io/v1/page/'

export async function fetchNotion({ id, context, config }) {
    let res
    if (context) {
        res = await context.fetch(NOTION_API + id)
    }
    const post = await res.json()

    const objectArray = Object.entries(post)
    const blocks = objectArray.map(([key, value]) => {
        return value.value
    })
    return blocks
}
