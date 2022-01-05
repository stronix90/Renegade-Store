import Slider from "../home/hero/Slider";
import ScrollDownArrow from "../home/hero/ScrollDownArrow";
import Category from "../category/Category";
import Information from "./information/Information";
import Products from "./products/Products";
import Brands from "./brands/Brands";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Slider />
      <ScrollDownArrow />
      <div id="main"></div>
      <div className="section2">
        <Information />
        <Brands />
        <h2 className="products_title">
          <a href="#products">PRODUCTOS</a>
        </h2>
      </div>

      <div id="products"></div>
      <Category div_class="cat_container_home" />
      <div className="container products_container">
        <a href="/store">
          <h3>Ver todos los productos</h3>
        </a>
        <h3>Productos destacados</h3>
        <Products />
        <h3>Productos en oferta</h3>
        <Products />
        <span>
          tium ad facere cupiditate ipsa omnis pariatur saepe molestiae officiis
          corporis? Quas dolores ea suscipit, magnam cum assumenda quo esse,
          unde ad obcaecati est voluptates? Recusandae eum nihil porro fugiat?
          Ratione architecto ullam impedit culpa maxime eos, voluptate dolore
          totam rerum reprehenderit nostrum! Cum fugiat provident perferendis
          odio ex porro alias maxime, possimus nulla autem reiciendis error,
          harum optio ad? Nemo, eius. Maiores tempore expedita exercitationem
          sunt illo, ut maxime error assumenda amet, officia facilis architecto
          provident est quis cum nobis omnis, ducimus vero ipsa voluptas numquam
          natus! Omnis, blanditiis. Eius accusantium dolorem dolorum deserunt
          tempore quia incidunt cumque adipisci commodi velit tempora fugiat,
          blanditiis aliquam. Placeat aspernatur tempora provident commodi
          incidunt harum quas delectus quam voluptates sequi, molestiae aut? Eos
          modi quia illo nemo laboriosam nulla commodi recusandae esse
          reiciendis suscipit rem officiis harum ducimus, eaque magnam aliquid
          perspiciatis quo a, consectetur sit iusto velit! Voluptatum dicta
          dolorem facere. Labore nisi perferendis sed saepe magnam totam
          voluptate, veritatis, laboriosam quos quis explicabo placeat mollitia
          eligendi modi, voluptatibus nesciunt repellendus odio rerum. Ut rem
          sequi illum, ipsum repudiandae nam eaque? Est unde reiciendis numquam
          excepturi quasi impedit veritatis amet dolorum eveniet. Quia modi
          architecto corrupti voluptatibus veniam dolores nam sequi quisquam
          debitis, assumenda aut. Rem, quas perferendis. Asperiores, in saepe?
          Adipisci vitae perferendis eos eius rerum fuga illo laudantium ratione
          tempora, possimus, aliquam temporibus deserunt? Veniam reprehenderit
          similique animi rem? Dolores illum tempora animi saepe, eius sint unde
          nemo eligendi! Doloremque facere cumque, deleniti, corrupti officiis
          ratione quidem quos blanditiis, mollitia delectus numquam enim
          praesentium quis esse molestiae. Mollitia veritatis impedit,
          praesentium cupiditate rerum repudiandae itaque. Eos animi recusandae
          ut. Autem illo quia ipsam dicta saepe mollitia maiores minima, nihil
          cupiditate possimus aliquid quis accusantium officia quidem. Minus
          nemo dolore corrupti, dolores consequatur incidunt blanditiis rem
          perferendis. Quod, labore a? Incidunt quaerat voluptatum excepturi
          dolorum ratione tempore, maxime possimus impedit eligendi, tempora
          perspiciatis et commodi esse reprehenderit laudantium officia minus
          nisi molestiae, sapiente sequi libero pariatur est voluptas.
          Accusamus, expedita. Quasi excepturi tempora voluptatem iure
          exercitationem consectetur dolor reiciendis earum nostrum officiis
          nisi totam obcaecati ipsa libero necessitatibus, voluptas maiores
          odit. Voluptas consequuntur iusto veritatis laudantium mollitia porro
          omnis vero! Quisquam doloremque odio asperiores, architecto fugit
          officiis temporibus aut, at repudiandae neque hic dolores, recusandae
          minus optio nam! Consectetur excepturi dicta beatae vero aperiam quas
          pariatur odio itaque libero! Reprehenderit! Molestias, distinctio
          quaerat. Blanditiis laborum minima aut ullam perspiciatis veritatis
          nam consectetur! Vel facilis qui dolorem atque aspernatur, vero
          voluptates temporibus eaque, quo ex quas voluptatum adipisci quam
          neque delectus! Esse doloremque odio culpa corrupti distinctio libero
          laborum possimus vel, asperiores ea reprehenderit autem, consequuntur
          quis cumque ut provident. Odit ipsa veniam repudiandae! Obcaecati
          dolore amet nulla! Nisi, reiciendis consectetur!
        </span>
      </div>
    </div>
  );
};

export default Home;
