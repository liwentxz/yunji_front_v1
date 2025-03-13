const menuList = [
  {
    menuId: "1",
    menuName: "首页",
    parentId: "0",
    orderNum: "1",
    path: "/index",
    component: "",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "M",
    visible: 0,
    status: 0,
    perms: "",
    icon: "el-icon-s-home",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "2",
    menuName: "商品订购",
    parentId: "0",
    orderNum: "2",
    path: "/front/order",
    component: "front/order/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "M",
    visible: 0,
    status: 0,
    perms: "",
    icon: "el-icon-folder-opened",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "3",
    menuName: "旧物置换",
    parentId: "0",
    orderNum: "3",
    path: "/product",
    component: "",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "M",
    visible: 0,
    status: 0,
    perms: "",
    icon: "el-icon-folder-opened",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "4",
    menuName: "生活服务",
    parentId: "0",
    orderNum: "4",
    path: "/system",
    component: "",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "M",
    visible: 0,
    status: 0,
    perms: "",
    icon: "el-icon-folder-opened",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "200",
    menuName: "日常饮食",
    parentId: "2",
    orderNum: "1",
    path: "/front/order/diet",
    component: "",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: "noodles",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "201",
    menuName: "服装",
    parentId: "2",
    orderNum: "2",
    path: "/front/order/clothing",
    component: "",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: "commodity",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "20000",
    menuName: "蔬菜",
    parentId: "200",
    orderNum: "1",
    path: "/front/order/diet/vegetable",
    component: "front/order/diet/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: require("../assets/images/order/vegetable.png"),
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "20001",
    menuName: "水果",
    parentId: "200",
    orderNum: "2",
    path: "/front/order/diet/fruit",
    component: "front/order/diet/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: require("../assets/images/order/fruit.png"),
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "20002",
    menuName: "鲜奶",
    parentId: "200",
    orderNum: "3",
    path: "/front/order/diet/milk",
    component: "front/order/diet/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: require("../assets/images/order/milk.png"),
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "20003",
    menuName: "零食",
    parentId: "200",
    orderNum: "4",
    path: "/front/order/diet/snack",
    component: "front/order/diet/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: require("../assets/images/order/snack.png"),
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "400",
    menuName: "个人中心",
    parentId: "4",
    orderNum: "1",
    path: "/system/user/personal",
    component: "system/user/personal/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: "el-icon-tickets",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "401",
    menuName: "用户管理",
    parentId: "4",
    orderNum: "2",
    path: "/system/user/manage",
    component: "system/user/manage/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "",
    icon: "el-icon-tickets",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
];
export default menuList;
