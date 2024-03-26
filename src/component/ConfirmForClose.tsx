
function ConfirmForClose() {
  return (
    <div id="popup">
      <div className="popup-area">
        <div className="alert_txt">
          진행중인 내용이 모두 사라집니다!<br></br>
          종료하시겠습니까?
        </div>
        <div className='btn-area'>
          <ul>
            <li>
              <div className="large-btn bg_sub point">
                돌아가기
              </div>
            </li>
            <li>
              <div className="large-btn">
                확인
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConfirmForClose;
