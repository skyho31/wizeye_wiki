import React from 'react';
import {Row} from 'reactstrap';
import {Link} from 'react-router-dom';

/* components */
import InnerImg from '../../../../components/InnerImg';

/* images */
import AggregateImg from '../../../../img/aggregate_node.png';
import LinkAggreImg from '../../../../img/link_aggre.png';
import ParentIdImg from '../../../../img/parent_id_img.png';
import AddButtonImg from '../../../../img/add_button.png';
import AggreMenuImg from '../../../../img/aggre_menu.png';
import AggreEditImg from '../../../../img/aggre_edit.png';
import PreviewAggreImg from '../../../../img/preview_aggre.png';
import FinalFlowImg from '../../../../img/final_flow.png';

const AggregateData = ({match}) => (
  <Row>
    <div className="inner_contentbox">
      <h4 className="subtitle">Step 4. Aggregate Data</h4>
      <p>
        <Link to={'/chapter/quickstart/step3'}>Step 3. Send Data to Processor</Link>에선 function node로 부터 전달받은 데이터를 processor server로 전송하여, object를
        생성했습니다.<br />
        <br />
        이미 완성된 Object에서 특정 정보를 추출해서 새로운 정보를 만들고 싶다면 어떻게 해야할까요?<br /> 예를 들자면, 이전 예제에서 만들었던 pushTime object time metric의 전체 평균을 구해야할 경우가 그런 경우에 해당할 수
        있습니다. <br />
        <br />앞서 배운 function 카테고리의 Node들을 활용해서 작업을 할 수 있으면 좋겠지만, <u style={{color: 'red'}}>완성된 Object는 Function Node로 수정할 수 없습니다.</u>
        <br />
        <br />
        Object Type을 만들거나 Push된 데이터를 Object에 저장하고 출력해주는 과정이 Editor나 Runtime에서 이루어지는 것이 아닌, Processor 서버에서 이루어지기 때문입니다. <br />
        <br />
        <b>이러한 경우를 위해 Editor는 Aggregate Node(계층적 집계 노드)를 제공합니다.</b>
        <br />
      </p>
      <InnerImg src={AggregateImg} height={60} text="aggregate node" border />
      <p>Aggregate Node를 사용하기 위해선 몇 가지 조건이 필요합니다.</p>
      <ol className="italic">
        <li>Object Type Node와 연결되어 있을 것</li>
        <li>연결된 Object Type Node에 Parent ID가 설정되어있을 것</li>
        <li>Aggregate Node에 Metric을 설정할 것</li>
      </ol>
      <hr className="wide" />
      <p className="subtitle">1. Object Type Node와 연결되어 있을 것</p>
      <p>
        대부분의 Node들은 그 앞이나 뒤에 어떤 Node가 와도 상관 없지만, aggregate node는 오로지 ObjectType만 앞뒤로 연결할 수가 있습니다. (결과값을 확인하기 위한 preview node는 예외,{' '}
        <u style={{color: 'red'}}>기타 node는 연결할 수 있지만 정상 동작하지 않습니다.</u>)
      </p>
      <InnerImg src={LinkAggreImg} height={150} text={'link to aggregate node'} border />
      <br />
      <br />
      <p className="subtitle">2. 연결된 Object Type Node에 Parent ID가 설정되어있을 것</p>
      <p>Aggregate Node의 기능을 활용하기 위해서는 Parent ID를 Object Type Node에서 설정해주어야합니다.</p>
      <InnerImg src={ParentIdImg} height={100} text="set parent id" border />

      <blockquote>
        <b>Parent ID란?</b>
        <br />
        Parent ID는 Aggregate를 수행하기 위한 기준 키로서, Object Type Node로 들어온 Metric 중 1개 이상의 Metric를 선택하여 생성할 수 있습니다. Aggregate Node는 Parent ID에 해당하는 값을 기준으로
        개별 Object를 군집화합니다. 위 예제에서 Parent ID로 name을 설정한 경우, name의 value 값이 aggregate된 object의 이름이 됩니다. <br />
        ex) key : 10, name : avgTime => avgTime_10<br />
        <br />
        <i style={{color: 'red'}}>위에서 설정한 Parent ID는 추후 설명할 aggregate에서 생성된 metric과 함께 다음 Object Type의 Metric이 됩니다.</i>
      </blockquote>
      <br />
      <p className="subtitle">3. Aggregate Node에 Metric을 설정할 것</p>
      <p>
        Aggregate node는 단일 metric에 대한 종합 연산, 복수 metric에 대한 종합연산을 통한 새로운 metric을 생성할 수 있는 기능을 제공합니다. 단일 metric에 대한 연산이 필요한 경우, Add Metric을 복수 metric에
        대한 연산을 위해선 Add Group을 사용하세요.
      </p>
      <InnerImg src={AddButtonImg} height={45} text="add metric / group button" />
      <br />
      <br />
      <p>
        Add Metric/Group 버튼을 누르면, 다음과 같은 창을 확인할 수 있습니다.<br /> 필요에 따라 설정해주세요.
      </p>

      <InnerImg src={AggreMenuImg} height={55} text="aggregate node option" />
      <blockquote>
        <p>각 입력창의 의미는 다음과 같습니다.</p>
        <ol>
          <li>Object Type의 이름</li>
          <li>Metric의 이름</li>
          <li>Metric에 대한 연산(Avg, Sum, Min, Max, Count, Concat)</li>
          <li>연산에 대한 결과로 생성할 Metric의 이름</li>
          <li>where 절을 통한 연산 조건 할당</li>
        </ol>
      </blockquote>
      <br />
      <InnerImg src={AggreEditImg} height="auto" width="100%" text="aggregate node edit window" />
      <p>pushTime Object의 time1, time2, time3의 전체 평균을 avgTime이라는 metric으로 만들기 위해선 Add Group을 통해 각각의 metric의 평균을 종합하여 처리해야합니다.</p>
      <ol>
        <li>먼저 Group 창 내부에서 Add Metric 버튼을 통해 편집창을 생성합니다. </li>
        <li>Metrics 메뉴에서 pushTime Object Type을 선택하고 종합하고자 하는 개별 metric을 선택합니다.</li>
        <li>Metric에 대한 평균을 구하기 위해 Function에서 Avg를 선택합니다.</li>
        <li>생성될 metric 이름을 정하기 위해 상단에 있는 Alias에 avgTime을 입력합니다.</li>
      </ol>
      <br />
      <p>결과값을 확인하기 위해선 Aggregate Node에 앞서 했던 것과 같이 Preview Node를 연결해 주시면 됩니다.</p>
      <InnerImg src={PreviewAggreImg} height="auto" width="100%" text="preview window" />
      <blockquote>
        Aggregate node는 일종의 processor function node입니다.<br />
        <br />
        실제로 aggregate된 데이터를 Object화 시켜서 사용하고자 한다면, <br />
        <u style={{color: 'red'}}> aggregate node 다음에 object type node를 꼭 연결해줘야합니다.</u>
      </blockquote>
      <br />
      <InnerImg src={FinalFlowImg} height="auto" width="100%" text="final flow" />
    </div>
  </Row>
);

export default AggregateData;
