import { NavLink } from "react-router-dom";
import "./category.css"

const Category = ({ div_class }) => {
  div_class = div_class || "cat_container";

  return (
    <div className={div_class}>
      <div className="cat_radius">
        <div className="categories">
          <NavLink to="/category/pendientedecreararticulos">
            <div>
              <h3>Equipos armados</h3>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/blade-15-newest-2021_2x.png"
                alt="Equipos armados"
              />
            </div>
          </NavLink>

          <NavLink to="/category/mouses">
            <div>
              <h3>Mouses</h3>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/basilisk_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/pendientedecreararticulos">
            <div>
              <h3>Teclados</h3>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/tenkeyless_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/pendientedecreararticulos">
            <div>
              <h3>Audio</h3>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/kraken-kitty-black-2_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/pendientedecreararticulos">
            <div>
              <h3>Sillas</h3>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/iskur-front-bright_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/pendientedecreararticulos">
            <div>
              <h3>Consolas</h3>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/wolverine_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Category;
