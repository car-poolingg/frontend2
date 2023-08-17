import { getData } from "./api.storage"
import StorageConstants from "./constants.storage"

export function userIsDriver() {
    const IsDriverRaw = getData(StorageConstants.IsDriver)

    return IsDriverRaw.success && IsDriverRaw.data == true
}

// in case
export function getDate(date) {
    const dateRaw = new Date(date ?? Date.now())
    const d = dateRaw.getDate()
    const m = dateRaw.getMonth() + 1
    const y = dateRaw.getFullYear()

    return `${y}-${m}-${d}`
}

export function getTime(date) {
    const dateRaw = new Date(date ?? Date.now())
    const m = dateRaw.getMinutes()
    const h = dateRaw.getHours()

    return `${h}-${m}`
}
