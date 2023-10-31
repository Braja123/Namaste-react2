const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(30)
        .fill("")
        .map((e) => {
          return <div className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer;
