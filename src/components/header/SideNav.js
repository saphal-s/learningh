import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SideBarData, category } from "../../constant/NavData";
import { GiThink } from "react-icons/gi";

// Component to render category title
const CategoryTitle = ({ title }) => {
  return <h5>{title}</h5>;
};
const SideBarItems = ({ items }) => {
  return (
    <ul className="sub_category_list">
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/${item.id}`} className="no-underline text-white">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const SideNav = () => {
  return (
    <nav className="side_bar ps-4 pt-4 pe-4">
      <div className="logo pb-3 mb-3">
        <h2 className="pb-3">Learning Hammer</h2>
        <Link
          to="/"
          className="link "
          style={{ display: "flex", alignItems: "center" }}
        >
          <AiFillHome className="hicon" />
          &nbsp; Home
        </Link>

        <Link
          to="/mcq"
          className="link "
          style={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
        >
          <GiThink className="hicon" />
          &nbsp; Entrance Preparation
        </Link>
      </div>

      {category.map((cat) => (
        <div key={cat.id}>
          <CategoryTitle title={cat.title} />
          <SideBarItems
            items={SideBarData.filter((item) => item.category === cat.id)}
          />
        </div>
      ))}
    </nav>
  );
};

export default SideNav;
