export default 
`/** 
* 각 Node에서 전달하는 객체는 payload라는 property에 담겨서 갑니다.
* 결과값을 리턴할 때 payload property에 담아서 보내는 걸 기억하세요.
*/
var inputArr = msg.payload.split('\\n');
var filterText = 'DataEngine ReceiveMessage Sequence : 1, OpCode : PushData';
var result = [];

// for loop
var tempObj = {};
var innerIdx = 0;
var outerIdx = 0;
var sum = 0;
var val;

inputArr.map((data, index) => {
    if(data === filterText){
        if (innerIdx > 0){
            // object 구분을 위한 key값 추가
            tempObj.key = outerIdx++;

            // aggregate를 위한 common name 부여
            tempObj.name = 'pushTime';
            result.push(tempObj);
            
            // for reset
            sum = 0;
            innerIdx = 0;
            tempObj = {};
        }
    } else {
        // 숫자만 남길 수 있도록 처리
        val = Number(data.replace(/[^0-9]/g, ""));
        tempObj[\`time\${++innerIdx}\`] = val; 
        sum += val;
    }
});



// 이전 node에서 전달된 msg 객체엔 payload 값 뿐만아니라 
// msgId 등 다른 프로퍼티도 같이 사용됨으로 payload 값만 대치해서 전달합니다.
msg.payload = result;
return msg;`;
