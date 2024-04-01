import { FaFolderOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Syllabus = (item) => {
  return (
    <div>
      <Link
        to={`/syllabus/${item.item?.id}/${item.item?.parentId}/${item.item?.title}`}
        className="link text-dark"
      >
        <li className="d-flex">
          <FaFolderOpen className="ficon" />
          &nbsp; {item.item?.title}
        </li>
      </Link>
    </div>
  );
};

export default Syllabus;
