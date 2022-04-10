import React, { useContext, useState } from "react";
import Modal from "../../components/Modal";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Calendar from "react-calendar";
import { MainContext } from "../../context/MainContext";
const Stores = () => {
  const [value, onChange] = useState(new Date());
  const { visible, setVisible } = useContext(MainContext);

  return (
    <div className="stores">
      <div>
        <Modal title="Delivery time" setVisible={setVisible} visible={visible}>
          <Calendar onChange={onChange} value={value} />
          <div className="schedule">
            <div className="date">10 October</div>
            <div className="time">9:00 AM — 10:00 AM</div>
          </div>
          <div className="schedule">
            <div className="date">10 October</div>
            <div className="time">9:00 AM — 10:00 AM</div>
          </div>
          <div className="schedule">
            <div className="date">10 October</div>
            <div className="time">9:00 AM — 10:00 AM</div>
          </div>
          <div className="schedule">
            <div className="date">10 October</div>
            <div className="time">9:00 AM — 10:00 AM</div>
          </div>
          <div className="schedule">
            <div className="date">10 October</div>
            <div className="time">9:00 AM — 10:00 AM</div>
          </div>
          <div className="schedule">
            <div className="date">10 October</div>
            <div className="time">9:00 AM — 10:00 AM</div>
          </div>
          <div className="schedule">
            <div className="date">10 October</div>
            <div className="time">9:00 AM — 10:00 AM</div>
          </div>
        </Modal>
        <Banner />
        <Card />
        <Filter />
        <Products />
      </div>
    </div>
  );
};

export default Stores;
