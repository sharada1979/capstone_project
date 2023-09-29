import { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";
// import components
import Product from "../components/Product";
import Hero from "../components/Hero";


const Handler = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // console.log the data every in a while
  // console.log(products);
  // get by categories products men’s & women’s clothing using filter
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
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
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Handler;















