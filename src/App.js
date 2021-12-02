import "./styles.css";
import moment from "moment";
import { useEffect, useState } from "react";

export default function App() {
  const [expiry, setExpiry] = useState(false);
  const [days, setDays] = useState(0);
  console.log("expiry", expiry);
  console.log("days", days);

  useEffect(() => {
    const expiryDate = (date) => {
      const expiring = moment(date).format("YYYY-MM-DD");
      const currentDate = moment().format("YYYY-MM-DD");
      setDays(moment(expiring).diff(currentDate, "days"));

      // 30 days count down expire banner

      if (days <= 30 && days >= 0) {
        setExpiry(true);
      } else {
        setExpiry(false);
      }
    };

    expiryDate("2021-12-26");
  }, [days, expiry]);
  return (
    <div className="App">
      <h1>{expiry && days + " remaning"}</h1>
    </div>
  );
}
