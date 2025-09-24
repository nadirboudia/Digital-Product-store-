const ServiceCard = ({ icon, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full 
                 rounded-[20px] shadow-3xl px-10 py-16 
                 transition-all duration-300 transform 
                 hover:-translate-y-3 hover:shadow-2xl hover:bg-white"
    >
      {/* Icon */}
      <div
        className="w-14 h-14 flex justify-center items-center 
                   bg-coral-red rounded-full 
                   transition-transform duration-300 hover:rotate-12"
      >
        <i className={`${icon} text-white text-2xl`}></i>
      </div>

      {/* Title */}
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>

      {/* Subtext */}
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
