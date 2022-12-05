// author Dan Dascalescu https://stackoverflow.com/a/39914235/5827880
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
