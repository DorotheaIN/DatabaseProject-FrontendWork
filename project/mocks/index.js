import Mock from "mockjs";
import { getDocList } from "./response/doc.js"

Mock.mock("/data/userList.josn",'get',getDocList )
export default Mock;

