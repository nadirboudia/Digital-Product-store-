import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
      
    <div 
      id="products"
    className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 sm:p-6 transition-transform hover:scale-105 duration-300 w-full">
      {/* Image */}
      
      <img
      loading="lazy"
        src={imgURL}
        alt={name}
        className="w-full h-64 sm:h-72 md:h-60 lg:h-64 object-cover rounded-lg"
      />

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <img src={star} alt="rating icon" width={20} height={20} />
        <p className="text-slate-gray font-montserrat text-sm">(4.5)</p>
      </div>

      {/* Name */}
      <h3 className="mt-2 text-lg sm:text-xl font-semibold font-palanquin text-center">
        {name}
      </h3>

      {/* Price */}
      <p className="mt-1 text-coral-red text-xl sm:text-2xl font-semibold font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
