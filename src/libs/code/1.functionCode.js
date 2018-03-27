export default 
`/** 
* 각 Node에서 전달하는 객체는 payload라는 property에 담겨서 갑니다.
* 결과값을 리턴할 때 payload property에 담아서 보내는 걸 기억하세요.
*/
var sequenceArr = msg.payload.split("\\n");
var returnArr = [];
var sequenceObj = {};

sequenceArr.forEach((data, index, arr) => {

    var idx = index % 4;
    var sum = 0;
    if(idx !== 0) {

        // es6의 js templete을 활용한 mapping
        Object.assign(sequenceObj, {
            [\`time$\{idx}\`] : Number(data.replace(/[^0-9]/g, ""))
        });
        sum += sequenceObj[\`time$\{idx}\`];
        
        if(idx ===3){
            sequenceObj.avgTime = Math.floor(sum/3);

            // 데이터 구분을 위한 키값 추가
            sequenceObj.key = idx;
            returnArr.push(sequenceObj);
            sum = 0;
            sequenceObj = {};
        }
    }
})


// 이전 node에서 전달된 msg 객체엔 payload 값 뿐만아니라 
// msgId 등 다른 프로퍼티도 같이 사용됨으로 payload 값만 대치해서 전달합니다.
msg.payload = returnArr;
return msg;`;
