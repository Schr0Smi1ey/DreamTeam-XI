import { ToastContainer, toast } from "react-toastify";
import { Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toastify() {
  const coinAddedToast = () => {
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
  };

  return (
    <div>
      <button onClick={coinAddedToast}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Toastify;
