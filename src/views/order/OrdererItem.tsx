type OrdererProps = {
  userInfo: UserInfo
  isOrderComplete: boolean
  selectOrderer: (userId: number, name: string, team: string, rank: string) => void;
};

type UserInfo = {
  userId: number
  name: string
  team: string
  rank: string
  telNo: string
}

function Orderer({
  userInfo,
  isOrderComplete,
  selectOrderer
}: OrdererProps) {
  return (
    <>
      <span>
      <div className={'name ' + (isOrderComplete ? 'gray' : '')}
           onClick={
               () => !isOrderComplete ?
                   selectOrderer(userInfo.userId, userInfo.name, userInfo.team, userInfo.rank)
                   : ''
           }
      >
        {userInfo.name} ({userInfo.team})
      </div>
          {isOrderComplete ?
              <div className="done-label">주문완료</div>
              : <div style={{ background: '#ff5cc3', color: 'white', cursor: 'pointer' }}
                     className="done-label"
                     onClick={() => document.location.href = `tel:${userInfo.telNo}`}
              >전화걸기</div>}
      </span>
    </>
  );
}

export default Orderer;
