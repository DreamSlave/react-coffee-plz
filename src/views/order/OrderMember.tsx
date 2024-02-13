import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'
import {useEffect, useState} from "react";
import { setSelectOrderer } from "@/store/order";
import OrdererItem from "@/views/order/OrdererItem";
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';

interface memberInfo {
  name : string;
  userId: string;
  team: string;
  rank: string;
  isOrderComplete: boolean;
}

function getMemberList(){
  return [
    {name: '김진미', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', isOrderComplete : true},
    {name: '김세인', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', isOrderComplete : true},
    {name: '조도은', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', isOrderComplete : true},
    {name: '정민재', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'UX디자인팀', isOrderComplete : false},
    {name: '이광수', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'UX디자인팀', isOrderComplete : true},
    {name: '김우빈', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', isOrderComplete : false},
  ]
}

function OrderMember() {

  const dispatch = useDispatch();

  const navigate  = useNavigate();
  const onClickOrderer = (userId: string, name: string, rank: string, team: string) => {
    dispatch(setSelectOrderer(userId, name, rank, team))
    navigate('/order/menu')
  };

  const [orderMemberList, setOrderMemberList] = useState<memberInfo[]>([]);

  useEffect(() => {
    const memberList = getMemberList()
    setOrderMemberList(memberList)
  }, []);

  return (
    <>
      <div id='order' className="element orderer">
        <h1>
          <span className="point">주문자를</span><br/>선택해주세요.
        </h1>
        <div className="orderer-list">
          {
            orderMemberList.map((item, index) => {
              return (
                <div key={item.userId + index} className="item">
                  <OrdererItem userInfo={{userId: item.userId, name: item.name, rank: item.rank, team: item.team}}
                               isOrderComplete={item.isOrderComplete}
                               selectOrderer={onClickOrderer}/>
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