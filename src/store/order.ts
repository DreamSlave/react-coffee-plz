import { Orderer } from "@/views/order/OrdererInterface";

const SET_PARTY_NO = "SET_PARTY_NO" as const;
const SET_ORDERER = "SET_ORDERER" as const;

const initialOrdererInfo: Orderer = {
  partyNo: '',
  userId: 0,
  name: '',
  team: '',
  rank: '',
};

export const setSelectOrderer = (userId : number, name : string, team : string, rank : string) => ({
  type: SET_ORDERER,
  payload: {
    userId: userId,
    name: name,
    team: team,
    rank: rank
  }
})

export const setOrderPartyNo = (partyNo : string) => ({
  type: SET_PARTY_NO,
  payload: {
    partyNo: partyNo,
  }
})

type SelectOrderAction  = ReturnType<typeof setSelectOrderer> | ReturnType<typeof setOrderPartyNo>

function selectOrderer(ordererInfo: Orderer = initialOrdererInfo, action: SelectOrderAction ){
  console.log(ordererInfo)
  switch (action.type) {
    case SET_ORDERER:
      return {
        partyNo: ordererInfo.partyNo,
        userId: action.payload.userId,
        name: action.payload.name,
        team: action.payload.team,
        rank: action.payload.rank,
      };
    case SET_PARTY_NO:
      return {
        partyNo: action.payload.partyNo,
        userId: ordererInfo.userId,
        name: ordererInfo.name,
        team: ordererInfo.team,
        rank: ordererInfo.rank,
      };
    default:
      return ordererInfo;
  }
}

export default selectOrderer;


