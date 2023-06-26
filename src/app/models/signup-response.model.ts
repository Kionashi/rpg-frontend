export interface SignUpResponse {
    user: {
        id: number,
        email: string,
        username: string
    },
    token: string
}