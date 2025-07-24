import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { asyncloadproducts } from "./store/actions/productActions";
import Footer from "./components/Footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadproducts());
    dispatch(asynccurrentuser());
  }, []);
  return (
    <div className="overflow-auto px-[10%] text-white font-thin w-screen h-screen bg-gray-800">
      <Nav />
      <Mainroutes />
      <Footer />
    </div>
  );
};

export default App;
