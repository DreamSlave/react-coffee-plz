import '../../assets/css/all.css'
import '../../assets/css/style.scss'
import {useEffect, useState} from "react";
import { setSelectOrderer } from "@/store/order";
import OrdererItem from "@/views/order/OrdererItem";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import ApiUtil from "@/api/api.util";
import ApiConfig from "@/api/api.config";
import {RootState} from "@/store";

interface memberInfo {
  name : string;
  userId: number;
  team: string;
  rank: string;
  orderComplete: boolean;
}

const getMemberList = async (partyNo: string): Promise<memberInfo[]> => {

  const response = await ApiUtil.get(`${ApiConfig.defaultDomain}/order/users/${partyNo}`);
  return (await response.json()).data[0].userList
  // return [
  //   {name: '김진미', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', orderComplete : true},
  //   {name: '김세인', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', orderComplete : true},
  //   {name: '조도은', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', orderComplete : true},
  //   {name: '정민재', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'UX디자인팀', orderComplete : false},
  //   {name: '이광수', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'UX디자인팀', orderComplete : true},
  //   {name: '김우빈', rank: '프로', userId: 'ID'+ (~~(Math.random() * 1000)), team: 'PD팀', orderComplete : false},
  // ]
}

function OrderMember() {

  const dispatch = useDispatch();
  const orderer = {
    partyNo: useSelector((state: RootState) => state.order.partyNo),
    userId: useSelector((state: RootState) => state.order.userId),
    name: useSelector((state: RootState) => state.order.name),
    team: useSelector((state: RootState) => state.order.team),
    rank: useSelector((state: RootState) => state.order.rank),
  }

  const navigate  = useNavigate();
  const onClickOrderer = (userId: number, name: string, rank: string, team: string) => {
    dispatch(setSelectOrderer(userId, name, rank, team))
    navigate('/order/menu')
  };

  const [orderMemberList, setOrderMemberList] = useState<memberInfo[]>([]);

  useEffect(() => {
    async function fetchGetMemberList(){
      const memberList = await getMemberList(orderer.partyNo)
      setOrderMemberList(memberList)
    }
    fetchGetMemberList()
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
                <div key={item.userId + '' +index} className="item">
                  <OrdererItem userInfo={{userId: item.userId, name: item.name, rank: item.rank, team: item.team}}
                               isOrderComplete={item.orderComplete}
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