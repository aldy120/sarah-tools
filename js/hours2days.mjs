export function hours2Days(hours) {
    const result = {
        days: Math.floor(hours/8),
        hours: hours%8
    }
    return result
}
