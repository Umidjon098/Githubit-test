import { Heart, Percent, PlusCircle } from "../../../assets/icon";
import { images } from "../../../constants/images";

const Products = () => {
  return (
    <div className="products">
      <div className="products_header">
        <div className="title">Fresh Fruit</div>
        <div className="see_all">See all</div>
      </div>
      <div className="products_items card">
        <div className="products_item">
          <div className="precent">
            <Percent />
          </div>
          <div className="like">
            <Heart />
          </div>
          <div className="product_img">
            <img src={images.Avacado} alt="" />
          </div>
          <div className="product_name">Calavo Hass Avocados</div>
          <div className="add_to_cart">
            <div className="price">$5.99</div>
            <div className="add_btn"></div>
          </div>
        </div>
        <div className="products_item">
          <div className="precent">
            <Percent />
          </div>
          <div className="like">
            <Heart />
          </div>
          <div className="product_img">
            <img src={images.Limon} alt="" />
          </div>
          <div className="product_name">Lemons (Large) 8</div>
          <div className="add_to_cart">
            <div className="price">$3.89</div>
            <div className="add_btn"></div>
          </div>
        </div>
        <div className="products_item">
          <div className="precent">
            <Percent />
          </div>
          <div className="like">
            <Heart />
          </div>
          <div className="product_img">
            <img src={images.Melon} alt="" />
          </div>
          <div className="product_name">Jumbo Cantaloupe</div>
          <div className="add_to_cart">
            <div className="price">$30.89</div>
            <div className="add_btn"></div>
          </div>
        </div>
        <div className="products_item">
          <div className="precent">
            <Percent />
          </div>
          <div className="like">
            <Heart />
          </div>
          <div className="product_img">
            <img src={images.Kiwi} alt="" />
          </div>
          <div className="product_name">Zespri Kiwifruit 2 lb</div>
          <div className="add_to_cart">
            <div className="price">$4.89</div>
            <div className="add_btn"></div>
          </div>
        </div>
        <div className="products_item">
          <div className="precent">
            <Percent />
          </div>
          <div className="like">
            <Heart />
          </div>
          <div className="product_img">
            <img src={images.Avacado1} alt="" />
          </div>
          <div className="product_name">Hass Large Avocado</div>
          <div className="add_to_cart">
            <div className="price">$4.89</div>
            <div className="add_btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
