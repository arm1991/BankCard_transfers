import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, images } from "./config/config";
import { checkLocalData } from "./helpers/helpers";
import { setUsersData } from "./redux/slices/usersData.slice";
import AddCard from "./components/add-card/AddCard";
import SecondForm from "./components/second-form/SecondForm";

function App() {
  const dispatch = useDispatch();
  const sender = useSelector((state) => state.currentUser.currentUser);

  function getData() {
    const dataFromLocal = JSON.parse(localStorage.getItem("usersData"));
    if (checkLocalData(dataFromLocal)) {
      localStorage.setItem("usersData", JSON.stringify(data));
      dispatch(setUsersData(data));
    } else {
      dispatch(setUsersData(dataFromLocal));
    }
  }
  useEffect(() => {
    getData();
  });
  return (
    <div
      className="page"
      style={{ backgroundImage: `url(${images.root_background})` }}
    >
      {!sender ? <AddCard /> : <SecondForm sender={sender} />}
    </div>
  );
}

export default App;
