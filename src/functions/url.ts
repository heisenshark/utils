// author Pavlo https://stackoverflow.com/a/43467144/5827880
export function isUrl(string) {
    let url
    try {
        url = new URL(string)
    } catch (_) {
        return false
    }
    return url.protocol === "http:" || url.protocol === "https:"
}

// author Quentin https://stackoverflow.com/a/979995/5827880
export function urlParams(string = window.location.href) {
    if(!isUrl(string))
        return {}

    const result = new Map()

    for (const p of new URL(string).searchParams) {
        result.set(p[0], p[1])
    }
    
    return Object.fromEntries(result)
}
