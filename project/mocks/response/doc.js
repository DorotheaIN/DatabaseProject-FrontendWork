import Mock from "mockjs"

export const getDocList = () => {

    const Random = Mock.Random;
    let docList = [];

    for (let i = 1; i <= 48; i++) {

        let newData = {
            "docId":i,
            "docInfo":{
                "docName": Random.cname(),
                "docAge":Random.natural(25,65),
                "docLevel|1":["主任医师","副主任医师","主治医师","住院医师"],
                "docProfession|1":["皮肤科","内科","消化科"]
            },
        }
        docList.push(newData)
    }
    return Mock.mock(docList);
}
