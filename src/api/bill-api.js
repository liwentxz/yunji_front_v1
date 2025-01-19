export function $doAction(data) {
    return this.$http
    .post(
        "action/do",
        data,
    )
}


export function $loadData(billId,dataId,data) {
    return this.$http
    .get(
        "bills/billdata/" + billId + "/" + dataId,
        {
        params:data,
        }
    )
}

export default {
    methods: {
        $doAction,
        $loadData
    }
}