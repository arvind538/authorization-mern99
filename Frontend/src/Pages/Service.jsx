import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  if (!services || services.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="service ">
      <div className="container m-5 p-5">
        <h2 className="main-heading  m-5 p-5 underline ">Service </h2>
      </div>

      <div className="container service-grid grid-three-cols cursor-pointer">
        {services.map((curElem, _id) => {
          const {

            price,
            description,
            provider,
            service
          } = curElem;

          return (
            <div className="service-card" key={_id}>
              <div className="card-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlFDBtL382Hf9GvAVuT2VoSTl-SZQiZBY2A&s"
                  alt="service"
                />
              </div>

              <div className="card-details">
                <div className="card-top">
                  <p>{provider}</p>
                  <p>₹ {price}</p>
                </div>

                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
