import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="sweet-loading">
      <div className="loading-container">
        <HashLoader size={50} color="#ffc800" />
      </div>
    </div>
  );
};

export default Loading;
