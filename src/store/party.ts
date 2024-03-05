const SET_PARTY_MEMBER = "SET_PARTY_MEMBER" as const;
const SET_PARTY = "SET_PARTY" as const;


type PartyInfo = {
  memberList : Array<Member>
  partyName : string
  cafeId : string
  endDate : string
  endTime : string
};

type Member = {
  userId: string
  name: string
  team: string
  rank: string
}

const initialPartyInfo: PartyInfo = {
  memberList: [],
  partyName : '',
  cafeId : '',
  endDate : '',
  endTime : ''
};

export const setSelectPartyMember = (memberList : Array<Member>) => ({
  type: SET_PARTY_MEMBER,
  payload: {
    memberList: memberList,
  }
})

export const setSaveParty = (partyName : string, cafeId : string, endDate : string, endTime :  string) => ({
  type: SET_PARTY,
  payload: {
    partyName: partyName,
    cafeId: cafeId,
    endDate: endDate,
    endTime: endTime
  }
})


type SelectPartyAction  = ReturnType<typeof setSelectPartyMember> | ReturnType<typeof setSaveParty>

function selectParty(partyInfo: PartyInfo = initialPartyInfo, action: SelectPartyAction ){
  console.log(partyInfo)
  switch (action.type) {
    case SET_PARTY_MEMBER:
      return {
        memberList: action.payload.memberList,
      };
    case SET_PARTY:
      return {
        memberList : partyInfo.memberList,
        partyName: action.payload.partyName,
        cafeId: action.payload.cafeId,
        endDate: action.payload.endDate,
        endTime: action.payload.endTime,
      };  
    default:
      return partyInfo;
  }
}

export default selectParty;


