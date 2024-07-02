import loadingImg from '@/assets/img/loading.gif'

interface LoadingProps {
  isShow: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isShow }) => {
  return (
    <>
      {isShow ? (
        <div id="popup">
          <div style={{ textAlign: 'center' }}>
            <img className="loading" alt="loading" src={loadingImg} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loading;
