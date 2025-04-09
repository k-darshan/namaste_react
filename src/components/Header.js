const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo-div">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-cute-panda-logo-design-vector-png-image_12532129.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;