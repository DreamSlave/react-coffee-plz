const SET_PARTY_MEMBER = "SET_PARTY_MEMBER" as const;
const SET_PARTY = "SET_PARTY" as const;
const INIT_PARTY = "INIT_PARTY" as const;


type PartyInfo = {
  memberList : Array<Member>
  partyName : string
  cafeId : string
  cafeName : string
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
  cafeName : '',
  endDate : '',
  endTime : ''
};

export const setSelectPartyMember = (memberList : Array<Member>) => ({
  type: SET_PARTY_MEMBER,
  payload: {
    memberList: memberList,
  }
})

export const setSaveParty = (partyName : string, cafeId : string, cafeName : string, endDate : string, endTime :  string) => ({
  type: SET_PARTY,
  payload: {
    partyName: partyName,
    cafeId: cafeId,
    cafeName: cafeName,
    endDate: endDate,
    endTime: endTime
  }
})

export const initParty = () => ({
  type: INIT_PARTY,
})



type SelectPartyAction  = ReturnType<typeof setSelectPartyMember> | ReturnType<typeof setSaveParty> | ReturnType<typeof initParty>

function selectParty(partyInfo: PartyInfo = initialPartyInfo, action: SelectPartyAction ){
  switch (action.type) {
    case SET_PARTY_MEMBER:
      return {
        memberList: action.payload.memberList,
        partyName: partyInfo.partyName,
        cafeId: partyInfo.cafeId,
        cafeName: partyInfo.cafeName,
        endDate: partyInfo.endDate,
        endTime: partyInfo.endTime,

      };
    case SET_PARTY:
      return {
        memberList : partyInfo.memberList,
        partyName: action.payload.partyName,
        cafeId: action.payload.cafeId,
        cafeName: action.payload.cafeName,
        endDate: action.payload.endDate,
        endTime: action.payload.endTime,
      };  
    case INIT_PARTY:
      return {
        memberList: [],
        partyName : '',
        cafeId : '',
        cafeName : '',
        endDate : '',
        endTime : ''
      };
  
    default:
      return partyInfo;
  }
}

export default selectParty;


