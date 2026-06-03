const DashboardCard = ({
  title,
  value,
  isCurrency = true,
}) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <h3>{title}</h3>

        <h1>
          {value.toLocaleString()}

          {isCurrency && " €"}
        </h1>
      </div>
    </div>
  );
};

export default DashboardCard;