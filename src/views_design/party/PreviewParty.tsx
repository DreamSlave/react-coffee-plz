// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/all.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'

function PreviewParty() {

  return (
    <div id='party' className="element">
        <h1>
          생성된 파티를<br/><span className="point">확인</span>하세요.
        </h1>

        <div className="order-list-area">
            <div className="clipimg">
              <img src="/src/assets/img/clip_img.png" />
            </div>
            <div className="order-title">
              <div className="text">
                <div className="title">파티명</div>
                <div className="cafenm point">카페이름</div>
              </div>
              <div className="image">
                <img src="/src/assets/img/icon_open.png" />
              </div>
            </div>
            <div className="order-time">
              <span className="mgr5"><b>마감시간</b></span> 2023/09/06 12:22
            </div>
            
            <div className="order-list-sum">
              <div className="title"><b>주문 취합 리스트</b></div>
              
            </div>
        </div>
        
        <footer id="footer" className="">
          <div className="large-btn">
              주문하기
          </div>
          
          {/*///주문불가 시 버튼 스타일///*/}
          {/* <div className="large-btn bg_gray">
              주문불가
          </div> */}
        </footer>
      
      </div>
  )
}

export default PreviewParty
