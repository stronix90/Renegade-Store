import { NavLink } from "react-router-dom";

const Category = ({ div_class }) => {
  div_class = div_class || "";
  console.log(div_class);

  return (
    <div className={`cat_container ${div_class}`}>
      <div className="cat_radius">
        <div className="categories">
          <NavLink to="/category/electronics">
            <div>
              <h2>Equipos armados</h2>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/blade-15-newest-2021_2x.png"
                alt="Equipos armados"
              />
            </div>
          </NavLink>

          <NavLink to="/category/jewelery">
            <div>
              <h2>Mouses</h2>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/basilisk_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/men's%20clothing">
            <div>
              <h2>Teclados</h2>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/tenkeyless_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/women's%20clothing">
            <div>
              <h2>Audio</h2>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/kraken-kitty-black-2_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/women's%20clothing">
            <div>
              <h2>Sillas</h2>
              <img
                src="https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/iskur-front-bright_2x.png"
                alt="Mouses"
              ></img>
            </div>
          </NavLink>

          <NavLink to="/category/women's%20clothing">
            <div>
              <h2>Consolas</h2>
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
