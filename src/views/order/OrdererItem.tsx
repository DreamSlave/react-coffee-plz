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
    <div>
      <div className="overlap-group" onClick={() => selectOrderer(userInfo.userId, userInfo.name, userInfo.team, userInfo.rank)}>
        {/*<img className="line" alt="Line" src="line-3.svg" />*/}
        <div className="text-wrapper-2">{userInfo.name} ({userInfo.team})</div>
        {
          isOrderComplete ?
            <div className="done-label">
              <div className="div-wrapper">
                <div className="text-wrapper-6">주문완료</div>
              </div>
            </div> : ''
        }
      </div>
    </div>
    
  );
}

export default Orderer;
