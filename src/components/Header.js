import { useContext } from "react";
import {
  ArrowLeft,
  FilterIcon,
  Location,
  Lupa,
  Market,
  Timer,
} from "../assets/icon";
import { MainContext } from "../context/MainContext";

const Header = () => {
  const { setVisible } = useContext(MainContext);

  return (
    <form>
      <div className="header">
        <div className="card header_item back_btn">
          <ArrowLeft />
        </div>
        <div className="card location">
          <Location />
          <select>
            <option>2972 Westheimer Rd. Santa Ana</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="card search">
          <Lupa />
          <input placeholder="Search products in Wallmart" />
          <FilterIcon />
        </div>
        <div className="card timer" onClick={() => setVisible(true)}>
          <div className="date_range">
            <Timer />
            <div>By 09:00 — 23:00</div>
          </div>
        </div>
        <div className="card market">
          <div className="market_icon">
            <Market />
          </div>
          <div className="count">$230.80</div>
        </div>
      </div>
    </form>
  );
};
export default Header;
