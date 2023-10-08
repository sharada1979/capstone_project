import { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";
// import hero
import Hero from "../components/Hero";
import Login from "../components/Login";
import { useState, useEffect } from "react";

const Home = () => {
  // get products from product context
  // const { products } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(false);
  let filteredProducts;
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      let fetchedP = [];
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      // console.log(data);
      if (sort) {
        fetchedP = data.filter((item) => {
          return (
            item.category === "electronics" || item.category === "jewelery"
          );
        });
      } else {
        fetchedP = data.filter((item) => {
          return (
            item.category === "men's clothing" ||
            item.category === "women's clothing"
          );
        });
      }
      setProducts(fetchedP);
    };
    fetchProducts();
  }, [filteredProducts, sort]);

  // console.log the data every in a while
  // console.log(products);
  // get by categories products men's & women's clothing using filter

  const handleClick = () => {
    if (sort === false) {
      setSort(true);
    } else {
      setSort(false);
    }
    console.log(products);
  };
  // console.log the filteredProducts:
  // console.log(filterProducts);
  // create a section for a container
  // map the product using key property
  // add CSS in line for margin, border, padding, etc, using className
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
          mx-auto md:max-w-none md:mx-0"
          >
            {products &&
              products.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
          </div>
        </div>
        <button className="bg-primary flex p-4 justify-center
        items-center text-white w-full font-medium" onClick={handleClick}>
          ELECTRONICS
        </button>
        <Login />
      </section>
    </div>
  );
};

export default Home;










