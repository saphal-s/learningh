import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div
      className="sweet-loading"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <HashLoader size={50} color="#ffc800" />
    </div>
  );
};

export default Loading;
