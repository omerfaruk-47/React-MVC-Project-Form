import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <div className="p-4 bg-black flex justify-between">
      <h1>
        <Link to={"/"} className="text-yellow-500 font-bold text-2xl  ">
          Form Card
        </Link>
      </h1>
      <nav className="text-white flex gap-4 items-center">
        <NavLink to={"/"}>Gönderiler</NavLink>
        <NavLink to={"/create"}>Gönderi Ekle</NavLink>
      </nav>
    </div>
  );
};

export default HeaderView;
