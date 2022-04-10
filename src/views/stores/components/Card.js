import { images } from "../../../constants/images";

const Card = () => {
  return (
    <div className="card-section">
      <div className="card card_limon">
        <div className="card_title">Sale orange</div>
        <div className="card_subtitle">Promocode down</div>
        <div className="card_btn">Orange20</div>
        <div className="image-bg">
          <img src={images.Tegerine} alt="bg" />
        </div>
      </div>
      <div className="card card_tomato">
        <div className="card_title">Tomato</div>
        <div className="card_subtitle text-br">Buy at affordable prices</div>
        <div className="image-bg">
          <img src={images.Tomato} alt="bg" />
        </div>
      </div>
      <div className="card card_spageti">
        <div className="card_title">Sale orange</div>
        <div className="card_subtitle">Promocode down</div>
        <div className="card_btn">Orange20</div>
        <div className="image-bg">
          <img src={images.Spageti} alt="bg" />
        </div>
      </div>
      <div className="card card_sale">
        <div className="card_title">Sale orange</div>
        <div className="card_subtitle">Promocode down</div>
        <div className="card_btn">Orange20</div>
        <div className="image-bg">
          <img src={images.Rectangle57} alt="bg" />
        </div>
      </div>
      <div className="card card_test">
        <div className="card_title">Sale 40%</div>
        <div className="card_subtitle">Very tasty pasta</div>
        <div className="card_btn">Test40</div>
      </div>
    </div>
  );
};
export default Card;
