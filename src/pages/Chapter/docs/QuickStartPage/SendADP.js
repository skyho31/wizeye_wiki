import React from 'react';
import {Row} from 'reactstrap';
import {Link} from 'react-router-dom';

/* components */
import InnerImg from '../../../../components/InnerImg';

/* images */
import ProcessCategory from '../../../../img/process_category.png';
import ObjectTypeEditorWindow from '../../../../img/objectTypeEditorWindow.png';
import LinkObj from '../../../../img/link_obj.png';
import LinkPreview from '../../../../img/link_preview.png';
import PreviewWindow from '../../../../img/preview_window.png';

const SendADP = () => (
  <Row>
    <div className="inner_contentbox">
      <h4 className="subtitle">Step 3. Send Data to Processor</h4>
      <p>
        지난 Step에선 1) <Link to={'/chapter/quickstart/step1'}>외부에서 데이터를 수집하고</Link>, 2)<Link to={'/chapter/quickstart/step2'}> 적절한 데이터의 모양으로 처리</Link>해주었습니다.
        실제로 이 데이터를 사용하려면 사용할 솔루션으로 데이터를 전송해 주어야합니다.<br />
        <br /> Data Engine은 자체 Processor 서버를 통하여 데이터를 DB에 저장하고, 처리된 데이터를 연결된 서버로 전송해줍니다. Data Engine Editor는 이를 위한 Node를 갖고 있습니다.<br />
      </p>
      <InnerImg src={ProcessCategory} text={'process category'} height={350} />
      <p>
        바로 Process 카테고리의 Node들입니다. <br />
        <br />
        Process Node들은 외부에서 데이터를 수집하는 data receiver, processor로 들어온 데이터를 전달해주는 <b>object type node</b>, 형성된 object들을 군집화 시켜주는 <b>aggregate node</b>,
        연결된 개별 Object들을 확인할 수 있게 해주는 <b>preview node</b>로 구성되어있습니다.<br />
        예제에선 object type node를 통해 processor에서 object type을 형성하게 하고, 데이터를 보내 preview에서 형성된 object를 확인해보겠습니다.
      </p>
      <InnerImg src={LinkObj} height={200} text="link to object type node" border />
      <InnerImg src={ObjectTypeEditorWindow} height={400} text={'object type node editor'} border />
      <p>
        이전 step에서 만들었던 function node를 object type node에 이어주고 object type node를 열어봅시다. Object Type을 형성하기 위해선 Object Type의 이름과 Object ID가 필요합니다. 현재 예제에선
        name에 <code>pushTime</code>을, ObjectID에는 <code>{'{key}'}</code>라는 이름을 넣어주었습니다.
      </p>
      <blockquote>
        ObjectID는 metric 값을 이름으로 지정할 수 있습니다. 일반 String과 혼합도 가능하며, 중괄호({'{metric name}'})을 추가해주면 간단히 ObjectID를 설정할 수 있습니다.<br />
        <br />
        최종적으로 생성되는 개별 Object의 ID는 ObjectTypeName/ObjectID가 됩니다. <br />
        <code>ex) name : pushTime, ObjectID : {'{key}'}, key : 10 => pushTime/10</code>
      </blockquote><hr style={{marginTop:'50px', marginBottom:'30px'}}/>
      <p >
        형성된 Object를 확인하기 위해 Preview Node를 연결합니다. Preview Node는 ObjectType node나 aggregate node가 processor에서 생성된 결과를 보여주는 Node입니다. <br />
        결과를 확인하기 위해선 연결 후, Preview Node의 우측의 버튼을 눌러주면 됩니다.
      </p>
      <InnerImg src={LinkPreview} height={300} text={'link to preview node'} border />
      <InnerImg src={PreviewWindow} height={350} text={'preview node window'} border />
    </div>
  </Row>
);

export default SendADP;
