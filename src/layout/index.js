import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="app-content">
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
