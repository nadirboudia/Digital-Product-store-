import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section
    id="products"
      className="max-container px-4 mt-10 sm:px-6 lg:px-8 py-16"
    >
      {/* Header */}
      <div className="flex flex-col items-start gap-3 sm:gap-5">
        <h2 className="text-4xl sm:text-5xl font-palanquin font-bold leading-tight">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-slate-gray text-base sm:text-lg lg:max-w-xl">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      {/* Products Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <PopularProductCard
            key={product.name}
            {...product}
            className="transition-transform mt-12"
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
