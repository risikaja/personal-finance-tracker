const DashboardCard = ({ title, value }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>

          <h2 className="fw-bold">
            {value.toLocaleString()} €
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;