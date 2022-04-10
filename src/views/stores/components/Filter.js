import { FilterIcon } from "../../../assets/icon";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter_item filter_icon">
        <FilterIcon />
      </div>
      <div className="filter_item">Pantrys</div>
      <div className="filter_item">Fruits and Vegetables</div>
      <div className="filter_item">Eggs and Dairys</div>
      <div className="filter_item">Frozens</div>
      <div className="filter_item">Beverange</div>
      <div className="filter_item">Snacks</div>
      <div className="filter_item">Households</div>
      <div className="filter_item more_select">More</div>
    </div>
  );
};

export default Filter;
