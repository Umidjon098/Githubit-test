import { Car, Info, Recipes, SavedStore, Shop, Start } from "../../../assets/icon";
import { images } from "../../../constants/images";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_left">
        <div className="banner_image">
          <img src={images.Banner} alt="Banner" className="bg_img" />
          <div className="banner_icon">
            <img src={images.Tegerine2} alt="Logo" />
          </div>
        </div>
        <div className="left_footer">
          <div className="footer_logo">Wallmart store</div>
          <div className="circle-dot"></div>
          <div className="footer-item">
            <div className="icon">
              <Info />
            </div>
            <div className="item_name">Store info</div>
          </div>
          <div className="circle-dot"></div>

          <div className="footer-item">
            <div className="icon">
              <Car />
            </div>
            <div className="item_name">Store delivery time</div>
          </div>
          <div className="circle-dot"></div>

          <div className="footer-item">
            <div className="icon">
              <SavedStore />
            </div>
            <div className="item_name">Seved</div>
          </div>
          <div className="raiting">
            <div className="icon">
              <Start />
            </div>
            <div className="grade">4.5</div>
          </div>
        </div>
      </div>
      <div className="card banner_right">
        <div className="menu_shop">
          <div className="shop_icon">
            <Shop />
          </div>
          <div className="shop_title">Shop</div>
        </div>
        <div className="menu_recipes">
          <div className="recipes_icon"><Recipes/></div>
          <div className="recipes_title">Recipes</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
