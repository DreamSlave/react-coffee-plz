type OrdererProps = {
  userInfo: UserInfo
  isOrderComplete: boolean
  selectOrderer: (userId: string, name: string, team: string, rank: string) => void;
};

type UserInfo = {
  userId: string
  name: string
  team: string
  rank: string
}

function Orderer({
  userInfo,
  isOrderComplete,
  selectOrderer
}: OrdererProps) {
  return (
    <>
      <span
        onClick={
        () => !isOrderComplete ?
          selectOrderer(userInfo.userId, userInfo.name, userInfo.team, userInfo.rank)
          : ''
        }
      >
      <div className={'name ' + (isOrderComplete ? 'gray' : '')}>
        {userInfo.name} ({userInfo.team})
      </div>
      { isOrderComplete ? <div className="done-label">주문완료</div> : ''}
      </span>
    </>
  );
}

export default Orderer;
