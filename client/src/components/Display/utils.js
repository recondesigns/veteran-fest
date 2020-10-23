export function setDisplay(status, userType, login, admin, vendor) {
    if (status === false) {
        return login
    } else if (status === true && userType === true) {
        return admin
    } else if (status === true && userType === false) {
        return vendor
    }
}
