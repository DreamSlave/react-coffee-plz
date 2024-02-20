const SET_PARTY_MEMBER = "SET_PARTY_MEMBER" as const;


type PartyInfo = {
  memberList : Array<Member>
};

type Member = {
  userId: string
  name: string
  team: string
  rank: string
}

const initialPartyInfo: PartyInfo = {
  memberList: [],
};

export const setSelectPartyMember = (memberList : Array<Member>) => ({
  type: SET_PARTY_MEMBER,
  payload: {
    memberList: memberList,
  }
})

type SelectPartyAction  = ReturnType<typeof setSelectPartyMember>

function selectParty(partyInfo: PartyInfo = initialPartyInfo, action: SelectPartyAction ){
  console.log(partyInfo)
  switch (action.type) {
    case SET_PARTY_MEMBER:
      return {
        memberList: action.payload.memberList,
      };
    default:
      return partyInfo;
  }
}

export default selectParty;


