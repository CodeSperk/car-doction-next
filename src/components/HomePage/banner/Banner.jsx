const bannerBg = [
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next:"#slide2",
    prev:"#slide4",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next:"#slide3",
    prev:"#slide1",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next:"#slide4",
    prev:"#slide2",
  },
  {
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
      next:"#slide1",
      prev:"#slide3",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full bg-blue-500 h-[40vh] md:h-[60vh] lg:h-[80vh] rounded-md">
      {bannerBg.map((banner, idx) => (
        <div key={idx} id={`slide${idx + 1}`} className="carousel-item relative w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${idx + 1}.jpg)`
        }}
        >
         
          <div className="text-white h-full flex flex-col justify-center p-20 space-y-6">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold md:max-w-[35%] xl:max-w-[40%]">{banner.title}</h1>
          <p className="md:text-xl">{banner.description}</p>
          <div className="flex gap-6">
          <button className="btn btn-primary text-white w-fit">Explore Now</button>
          <button className="btn bg-transparent text-white w-fit">Explore Now</button>
          </div>
          </div>



            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
      
        </div>
      ))}
    </div>
  );
};

export default Banner;
