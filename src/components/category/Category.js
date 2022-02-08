import { NavLink } from "react-router-dom";
import "./category.css";

const Category = ({ div_class }) => {
  const categorias = [
    {
      url: "/category/pc",
      img: "https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/blade-15-newest-2021_2x.png",
      texto: "Equipos armados",
    },
    {
      url: "/category/mouses",
      img: "https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/basilisk_2x.png",
      texto: "Mouses",
    },
    {
      url: "/category/teclados",
      img: "https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/tenkeyless_2x.png",
      texto: "Teclados",
    },
    {
      url: "/category/audio",
      img: "https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/kraken-kitty-black-2_2x.png",
      texto: "Audio",
    },
    {
      url: "/category/sillas",
      img: "https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/iskur-front-bright_2x.png",
      texto: "Sillas",
    },
    {
      url: "/category/consolas",
      img: "https://assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/wolverine_2x.png",
      texto: "Consolas",
    },
  ];
  div_class = div_class || "cat_container";

  return (
    <div className={div_class}>
      <div className="cat_radius">
        <div className="categories">
          {categorias.map((categoria, index) => {
            return (
              <NavLink key={index} to={categoria.url}>
                <div>
                  <h3>{categoria.texto}</h3>
                  <img
                    src={categoria.img}
                    alt={categoria.texto}
                  ></img>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
