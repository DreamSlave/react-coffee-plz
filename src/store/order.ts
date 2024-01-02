type OrdererInfo = {
  userId: string
  name: string
  team: string
  rank: string
};

const initialOrdererInfo: OrdererInfo = {
  userId: '',
  name: '',
  team: '',
  rank: '',
};

export const setSelectOrderer = (ordererInfo : OrdererInfo) => ({
  type: 'SELECT_ORDERER',
  payload: {
    userId: ordererInfo.userId,
    name: ordererInfo.name,
    team: ordererInfo.team,
    rank: ordererInfo.rank
  }
})

type SelectOrderAction  = ReturnType<typeof setSelectOrderer>

function selectOrderer(ordererInfo: OrdererInfo = initialOrdererInfo, action: SelectOrderAction ){
  console.log(ordererInfo)
  if (action.payload) {
    ordererInfo = {
      ...ordererInfo,
      userId: action.payload.userId,
      name: action.payload.name,
      team: action.payload.team,
      rank: action.payload.rank,
    };
  }
  return ordererInfo;
}

export default selectOrderer;


