 export default function start (userName: string) {
    try {
        if (userName)
            return `Hello ${userName}`
        else
            return 'Hello'
    } catch (error) {
        return error
    }
}
