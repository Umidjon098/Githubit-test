const Modal = ({ children, title = "", visible, setVisible }) => {
  const handleVisible = () => {
    setVisible(false);
  };
  return (
    <>
      <div
        className={visible ? "dark-overlay active" : "dark-overlay"}
        onClick={handleVisible}
      ></div>
      <div className={visible ? "modal active" : "modal"}>
        <div className="modal_header">
          <div className="modal_title">{title}</div>
          <div className="close_btn" onClick={handleVisible}></div>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Modal;
