export function $userByToken(data) {

    return this.$http
    .post(
        "zamsmanage/userByToken" ,
        {
        data
        }
    )

}

export default {
    methods: {
        $userByToken
    }
}