const menuList = [
  {
    menuId: "1",
    menuName: "材料管理",
    parentId: "0",
    orderNum: "1",
    path: "materials",
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
    menuId: "2",
    menuName: "产品管理",
    parentId: "0",
    orderNum: "2",
    path: "product",
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
    menuId: "100",
    menuName: "钢材",
    parentId: "1",
    orderNum: "1",
    path: "steel",
    component: "front/materials/steel/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "system:role",
    icon: "el-icon-tickets",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
  {
    menuId: "200",
    menuName: "餐桌",
    parentId: "2",
    orderNum: "1",
    path: "role",
    component: "system/role/index",
    query: null,
    routeName: "",
    isFrame: 0,
    isCache: 0,
    mennuType: "C",
    visible: 0,
    status: 0,
    perms: "system:role",
    icon: "el-icon-tickets",
    createBy: "admin",
    createTime: "",
    updateBy: "",
    updateTime: "",
    remark: "",
  },
];
export default menuList;
