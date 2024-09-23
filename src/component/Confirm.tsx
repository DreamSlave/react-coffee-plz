import parse from 'html-react-parser'

function Confirm({ message, onConfirm, onCancel }) {

  return (
    <div id="popup">
      <div className="popup-area">
        <div className="alert_txt">
          {parse(message)}
        </div>
        <div className='btn-area'>
          <ul>
            <li>
              <div className="large-btn bg_sub point" onClick={onCancel}>
                취소
              </div>
            </li>
            <li>
              <div className="large-btn" onClick={onConfirm}>
                확인
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
