// author erbelion https://stackoverflow.com/a/74112691/5827880
export function compactNumber(number) {
    return Intl.NumberFormat('en', { notation: 'compact' }).format(number)
}
