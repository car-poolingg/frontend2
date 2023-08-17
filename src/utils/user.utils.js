import { clearAllStorage, removeItem } from "./api.storage";
import StorageConstants from "./constants.storage";

export function logOut(navigate) {
    clearAllStorage()
    navigate('/')
}
