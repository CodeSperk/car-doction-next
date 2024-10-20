const SectionTitle = ({title, subtitle, description}) => {
  return (
    <div className="space-y-2 max-w-[80%] lg:max-w-[70%] mx-auto">
      <h5 className="text-primary">{title}</h5>
      <h2 className="font-bold text-2xl md:text-3xl">
        {subtitle}
      </h2>
      <p className="text-gray-700">{description} </p>
    </div>
  );
};

export default SectionTitle;