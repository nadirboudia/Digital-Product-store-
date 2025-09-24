const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
 <div
  className={`border-2 rounded-xl ${
    bigShoeImg === imgURL.bigShoe
      ? "border-coral-red"
      : "border-transparent"
  } cursor-pointer`}
  onClick={handleClick}
>
  <div className='flex justify-center items-center bg-center rounded-xl 
                  w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 p-2'>
    <img
      src={imgURL.thumbnail}
      alt='products'
      className='w-full h-full object-contain'
    />
  </div>
</div>

  );
};

export default ShoeCard;
