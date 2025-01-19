export function $queryList(data) {
    return this.$http
            .post(
                "/ListManage/queryList",
                data,
            );
}

export default {
    methods: {
        $queryList,
    }
}