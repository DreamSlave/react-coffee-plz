// import './App.css'
// import "./scss/style.scss"
// import '../../assets/css/all.css'
import '../../assets_design/css/all.css'
import '../../assets_design/css/style.scss'

function PreviewParty() {

  return (
    <div id='party' className="element pbd50">
        <h1>
          생성된 파티를<br/><span className="point">확인</span>하세요.
        </h1>

        <div className="order-list-area mgt30">
            <div className="clipimg">
              <img src="/src/assets/img/clip_img.png" />
            </div>
            <div className="order-title">
              <div className="text">
                <div className="title">파티명</div>
                <div className="cafenm point">카페이름</div>
              </div>
              <div className="image">
                <img src="/src/assets/img/icon_hurry.png" />
              </div>
            </div>
            <div className="order-time">
              <span className="mgr5"><b>마감시간</b></span> 2023/09/06 12:22
            </div>
            
            <div className="order-list-detail">
              <div className="title"><b>파티원 <span className="point">4</span>명</b></div>
              <div className="list">
                <ul>
                  <li>1. 정민재 프로(UX디자인팀)</li>
                  <li>2. 정민재 프로(UX디자인팀)</li>
                  <li>3. 정민재 프로(UX디자인팀)</li>
                  <li>4. 정민재 프로(UX디자인팀)</li>
                </ul>
              </div>
            </div>
        </div>
        
        <footer id="footer" className="bg_white">
          <div className="large-btn">
              파티생성
          </div>
        </footer>
      
      </div>
  )
}

export default PreviewParty
