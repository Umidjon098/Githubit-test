import React from "react";
import {
  BurgerButton,
  Eye,
  HeadPhone,
  Heart,
  LogOut,
  Notification,
  OrderList,
  PlusCircle,
  SavedStore,
  Setting,
  Stores,
  Telegram,
  User,
  Wallet,
} from "../assets/icon";
import { images } from "../constants/images";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header card">
        <BurgerButton />
        <div className="logo">GMarket</div>
      </div>
      <div className="sidebar_content card">
        <div className="user">
          <div className="avatar">
            <Setting />
            <img src={images.Avatar} alt="avatar" />
            <Notification />
          </div>
          <div className="user_data">
            <div className="name">Roberto Cavanali</div>
            <div className="phone">(+99893) 100-00-00</div>
          </div>
        </div>
        <div className="balance">
          <div className="balance_count">
            <div className="title">Wallet balance</div>
            <div className="count">$425,97</div>
          </div>
          <div className="balance_add">
            <PlusCircle />
          </div>
        </div>
        <div className="share-btn">
          <Telegram />
          Share wallet
        </div>
        <div className="menu">
          <div className="menu_item">
            <div className="icon">
              <Stores />
            </div>
            <div className="name">Stores</div>
          </div>
          <div className="menu_item">
            <div className="icon">
              <OrderList />
            </div>
            <div className="name">Order history</div>
          </div>
          <div className="menu_item">
            <div className="icon">
              <SavedStore />
            </div>
            <div className="name">Saved stores</div>
          </div>
          <div className="menu_item">
            <div className="icon">
              <Heart />
            </div>
            <div className="name">Liked products</div>
          </div>
          <div className="menu_item">
            <div className="icon">
              <Eye />
            </div>
            <div className="name">Viwed Products</div>
          </div>
          <div className="menu_item">
            <div className="icon">
              <Wallet />
            </div>
            <div className="name">Wallet history</div>
          </div>
          <div className="menu_item">
            <div className="icon">
              <User />
            </div>
            <div className="name">Profil setting</div>
          </div>
          <div className="menu_bottom">
            <div className="bottom_item">
              <div className="icon">
                <HeadPhone />
              </div>
              <div className="name">Help center</div>
            </div>
            <div className="bottom_item">
              <div className="icon">
                <LogOut />
              </div>
              <div className="name">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
