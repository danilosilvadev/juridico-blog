class ValidatingFields {

    static isEmptyOrNull(name, email, message) {
        if (name == null || name === '' || name === undefined || email == null || email === '' || email === undefined || message == null || message === '' || message === undefined) {
            return true;
        } return false;
    }

    static isEmptyOrNullDrashboard(title, article) {
        if (title == null || title === '' || title === undefined || article == null || article === '' || article === undefined) {
            return true;
        } return false;
    }
}

export default ValidatingFields