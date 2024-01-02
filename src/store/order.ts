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

export const setSelectOrderer = (payload : OrdererInfo) => ({
  payload
})


type selectOrderAction = ReturnType<typeof setSelectOrderer>

function selectOrderer(ordererInfo: OrdererInfo = initialOrdererInfo, action: selectOrderAction){
  ordererInfo.userId = action.payload.userId
  ordererInfo.name = action.payload.name
  ordererInfo.team = action.payload.team
  ordererInfo.rank = action.payload.rank
}

export default selectOrderer;


