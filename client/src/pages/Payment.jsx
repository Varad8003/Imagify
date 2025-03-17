import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location =useLocation();
  const {plan}=location.state || {};
  return (
    <div>
        <h1>Payment Page</h1>
      {plan ? (
        <CheckoutForm amount={plan.price * 100} />
      ) : (
        <p>No plan selected</p>
      )}
    </div>
  )
}

export default Payment