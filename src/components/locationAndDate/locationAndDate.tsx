import locationPin from "../../media/locationPin.png";
import "./locationAndDate.css";

type Props = {
  city: string;
};

const LocationAndDate = (props: Props): JSX.Element => {
  const date = new Date().toLocaleDateString("default", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="location text-white">
      <div className="d-flex justify-content-center align-items-center">
        <img src={locationPin} alt="Location Pin" height={16} width={12} />
        <h1 className="fst-italic fw-light mb-0 ms-3">{props.city}</h1>
      </div>
      <time>{date}</time>
    </section>
  );
};

export default LocationAndDate;
