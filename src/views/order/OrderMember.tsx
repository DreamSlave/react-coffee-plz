import '../../assets/css/ordermember.css'
import {useEffect, useState} from "react";
import { setSelectOrderer } from "@/store/order";
import {useDispatch} from "react-redux";
import OrdererItem from "@/views/order/OrdererItem";

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

  const dispatch = useDispatch();

  const onClickOrderer = (userId: string, name: string, rank: string, team: string) => {
    dispatch(setSelectOrderer({userId, name, rank, team}))
  };

  const [orderMemberList, setOrderMemberList] = useState<memberInfo[]>([]);

  useEffect(() => {
    const memberList = getMemberList()
    setOrderMemberList(memberList)
  }, []);

  return (
    <>
      <div className="element">
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
                      <OrdererItem userInfo={{userId: item.userId, name: item.userNm, rank: item.userNm, team: item.teamNm}}
                                   isOrderComplete={item.isOrderComplete}
                                   selectOrderer={onClickOrderer}/>
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