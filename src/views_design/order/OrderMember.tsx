import '../../assets/css/all.css'
import {useEffect, useState} from "react";
import Counter from "@/component/Counter";
import { RootState } from "@/store";
import { increase, decrease, increaseBy } from "@/store/counter";
import {useDispatch, useSelector} from "react-redux";

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

  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase())
  };

  const onDecrease = () => {
    dispatch(decrease())
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff))
  };

  const [orderMemberList, setOrderMemberList] = useState<memberInfo[]>([]);

  useEffect(() => {
    const memberList = getMemberList()
    setOrderMemberList(memberList)
  }, []);

  return (
    <>
      <div className="element">
        <Counter
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onIncreaseBy={onIncreaseBy}
        />
        <div className="div">
          <header className="header">
            {/*<img className="back-icon" alt="Back icon" src="back-icon.png" />*/}
          </header>
          <div className="title">
            <p className="p">
              <span className="text-wrapper">주문자</span>
              <span className="span">를<br/>선택해주세요.
            </span>
            </p>
          </div>
          <div className="contents">
            <div className="item-list">
              {
                orderMemberList.map((item, index)=>{
                  const className = 'item-'+(item.isOrderComplete ? 'done-' : '') +(index+1)
                  return (
                    <div key={item.userId+index} className={className}>
                      <div className="overlap-group">
                        {/*<img className="line" alt="Line" src="line-3.svg" />*/}
                        <div className="text-wrapper-2">{item.userNm} ({item.teamNm})</div>
                        {
                          item.isOrderComplete ?
                            <div className="done-label">
                              <div className="div-wrapper">
                                <div className="text-wrapper-6">주문완료</div>
                              </div>
                            </div> : ''
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderMember