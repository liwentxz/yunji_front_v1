<template>
    <div class="yunji_portal">
        <div class="portal_top"
            style="width: 100%; height: 50px; display: flex; flex-direction: row; align-items: center; color: #fff; background-color: rgb(12, 173, 243);">
            <div style="width: 10rem;">云际科技</div>
            <div class="toolBox"
                style="width: 15rem; height: 100%; display: flex; flex-direction: row; align-items: center; margin-left: auto; background-color: bisque;">
                <div style="width: 20%; height: 100%;"></div>
                <div style="width: 80%; height: 100%;"></div>
            </div>
        </div>
        <div style="width: 100%;">
            <splitpanes>
                <pane :size=menuPaneSize min-size="4">
                    <div style="width: 100%; display: flex; flex-direction: column;">
                        <el-menu :collapse="isCollapse" :default-active="curActiveIndex">
                            <menuItem :menuNameShow="isCollapse" :menuListData="menuList">
                            </menuItem>
                        </el-menu>
                    </div>
                </pane>

                <pane :size="100 - menuPaneSize" min-size="60">
                    <div class="headerTagBox">
                        <div class="collapse-btn" @click="collapseNav()">
                            <i v-if="isCollapse" class="el-icon-s-unfold"></i>
                            <i v-else class="el-icon-s-fold"></i>
                        </div>
                        <el-tag class="tagBox" :key="tag.id" v-for="tag in mainTabs" closable
                            :disable-transitions="false" @close="handleClose(tag)" @click="selectedTabHandle(tag)">
                            {{ tag.name }}
                        </el-tag>
                    </div>
                    <div class="mainContainer"></div>
                </pane>
            </splitpanes>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import menuItem from '@/components/yunji_menu_tree/index.vue'
export default {
    name: "",
    components: { menuItem },
    data() {
        return {
            menuPaneSize: 15,
            menuList: [
                {
                    id: "1",
                    menuName: "设备展览",
                    isTitle: true,
                    code: "001",
                    url: "",
                    children: [
                        {
                            id: "11",
                            menuName: "设备类型",
                            isTitle: true,
                            code: "001001",
                            url: "",
                            children: [
                                {
                                    id: "111",
                                    menuName: "大型设备",
                                    isTitle: false,
                                    code: "001001001",
                                    url: "",
                                    children: [],
                                }
                            ],
                        }
                    ]
                },
                {
                    id: "2",
                    menuName: "原材料管理",
                    isTitle: true,
                    code: "002",
                    children: [
                        {
                            id: "21",
                            menuName: "设备类型",
                            isTitle: true,
                            code: "002001",
                            children: [
                                {
                                    id: "211",
                                    menuName: "大型",
                                    isTitle: false,
                                    code: "002001001",
                                    children: [],
                                }
                            ],
                        }
                    ]
                }
            ],
            isCollapse: false,
            curActiveIndex: ''
        }
    },
    computed: {
        mainTabs: {
            get() {
                return this.$store.state.tab.mainTabs;
            },
            set(val) {
                this.$store.commit("updateMainTabs", val);
            }
        },
        mainTabsActiveName: {
            get() {
                return this.$store.state.tab.mainTabsActiveName;
            },
            set(val) {
                this.$store.commit("updateMainTabsActiveName", val);
            }
        },
    },
    created() {

    },
    mounted() {

    },
    methods: {
        initMenuList() {

        },
        collapseNav() {
            if (this.isCollapse == true) {
                this.isCollapse = false
                this.menuPaneSize = 15
            } else {
                this.isCollapse = true
                this.menuPaneSize = 4
            }
        },

        findObjIndex(val) {
            let curIndex = 0
            this.mainTabs.map((item, index) => {
                if (item.name == val) {
                    curIndex = index
                }
            })
            return curIndex
        },

        handleClose(tag) {
            if (this.mainTabs.length > 1) {
                // 当前选中tag被删除
                const curIndex = this.findObjIndex(tag.name)
                if (tag.name == this.mainTabsActiveName) {
                    const newCurTab = this.mainTabs[curIndex + 1] || this.mainTabs[curIndex - 1];
                    this.mainTabsActiveName = newCurTab.name;
                    this.curActiveIndex = newCurTab.id
                }
            } else {
                this.curActiveIndex = ''
            }
            this.mainTabs = this.mainTabs.filter(item => item.name !== tag.name)
        },
        selectedTabHandle(tag) {
            this.mainTabsActiveName = tag.name
            this.curActiveIndex = ''
            const curTab = this.mainTabs.filter(item => item.name == tag.name)[0];
            this.curActiveIndex = curTab.id
        }
    }
}
</script>

<style>
.yunji_portal {
    width: 100vw;
    background-color: rgb(245, 245, 245);

    .portal_top {
        width: 100vw;
    }
}

.el-menu {
    .el-sub-menu {
        .el-sub-menu__title {
            font-size: 16px;
        }
    }

    .el-menu-item {
        font-size: 16px;
    }

    .el-icon {
        font-size: 16px;
    }
}

.headerTagBox {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;

    .collapse-btn {
        height: 100%;
        line-height: 100%;
        font-size: 26px;
        color: #5a5a5a;
        padding: 6px;
    }

    .tagBox {
        cursor: pointer;
    }
}
</style>
