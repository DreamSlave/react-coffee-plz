// import '../../assets/css/all.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
import {useEffect, useState} from "react";

interface memberInfo {
  userNm : string;
  userId: string;
  teamNm: string;
  isOrderComplete: boolean;
}

function getMemberList(){
  return [
    {userNm: '김진미 프로', userId: 'ID'+ (~~(Math.random() * 10)), teamNm: 'PD팀', isOrderComplete : true},
    {userNm: '김세인 프로', userId: 'ID'+ (~~(Math.random() * 10)), teamNm: 'PD팀', isOrderComplete : true},
    {userNm: '조도은 프로', userId: 'ID'+ (~~(Math.random() * 10)), teamNm: 'PD팀', isOrderComplete : true},
    {userNm: '정민재 프로', userId: 'ID'+ (~~(Math.random() * 10)), teamNm: 'UX디자인팀', isOrderComplete : false},
    {userNm: '이광수 프로', userId: 'ID'+ (~~(Math.random() * 10)), teamNm: 'UX디자인팀', isOrderComplete : true},
    {userNm: '김우빈 프로', userId: 'ID'+ (~~(Math.random() * 10)), teamNm: 'PD팀', isOrderComplete : false},
  ]
}

function OrderMember() {

  // const count = useSelector((state: RootState) => state.counter.count);
  // const dispatch = useDispatch();
  //
  // const onIncrease = () => {
  //   dispatch(increase())
  // };
  //
  // const onDecrease = () => {
  //   dispatch(decrease())
  // };
  //
  // const onIncreaseBy = (diff: number) => {
  //   dispatch(increaseBy(diff))
  // };

  const [orderMemberList, setOrderMemberList] = useState<memberInfo[]>([]);

  useEffect(() => {
    const memberList = getMemberList()
    setOrderMemberList(memberList)
  }, []);

  return (
    <>
      <header className="header"></header>
      <div id='order' className="element orderer">
        {/* <Counter
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onIncreaseBy={onIncreaseBy}
        /> */}
          <h1>
            <span className="point">주문자를</span><br/>선택해주세요.
          </h1>
          <div className="orderer-list">
            {
              orderMemberList.map((item, index)=>{
                // const className = 'item-'+(item.isOrderComplete ? 'done-' : '') +(index+1)
                return (
                  <div key={item.userId+index} className="item">
                    <div className="name">{item.userNm} ({item.teamNm})</div>
                    {
                      item.isOrderComplete ?
                        <div className="done-label">
                          주문완료
                        </div> : ''
                    }
                  </div>
                )
              })
            }
          </div>
      </div>
    </>
  )
}

export default OrderMember