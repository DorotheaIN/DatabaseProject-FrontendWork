<template>
    <div>
        <div class="cardBox">
                <div class="image">
                    <img src="../assets/3.png" weight=80px height=80px>
                </div>
                <div class="bodyBox">
                    <p>姓名：</p>
                    <p>所属医院：</p>
                    <p>所属科室：</p>
                    <el-button type="primary" round>查看详情</el-button>
                </div>
        </div>

    </div>
</template>

<script>
export default{
    name:"doc_card",
}
</script>

<style>
.cardBox {
        width: 180px;
        height:300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        float: left;
        margin-right: 10px;
        padding: 5px;
        padding-top: 15px;
        }

.headerBox {
            color: #fff;
            padding: 10px;
            font-size: 15px;
            height: 60px;
        }

.bodyBox {
        padding: 10px;
        }

        .bodyBox p {
            margin-left: 5px;
        }
.image{

}
</style>
