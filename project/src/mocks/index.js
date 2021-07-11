import Mock from "mockjs";
import { getDocList,getDocOption } from "./response/doc.js"

//Mock.mock("/data/userList.josn",'get',getDocList )
Mock.mock("/api/Patient/GetDoctorList",'get',{
    code:'200',
    result:getDocList} )
Mock.mock("/api/Patient/GetDep",'get',{
    code:'200',
    result:getDocOption} )

export default Mock;
