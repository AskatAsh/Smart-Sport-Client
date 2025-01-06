const Brands = () => {
  const brandsData = [
    {
      imageSrc:
        "https://logowik.com/content/uploads/images/t_icone-sports8480.logowik.com.webp",
      altText: "Icone Sports",
      link: "#",
    },
    {
      imageSrc:
        "https://logowik.com/content/uploads/images/t_minnesota-golden-gophers-new1553.logowik.com.webp",
      altText: "Minnesota Golden",
      link: "#",
    },
    {
      imageSrc: "https://logowik.com/content/uploads/images/t_leixoes-sc7351.logowik.com.webp",
      altText: "Leixos SC",
      link: "#",
    },
    {
      imageSrc: "https://logowik.com/content/uploads/images/t_hera-arms-industries5820.logowik.com.webp",
      altText: "Hera Arms Industries",
      link: "#",
    },
    {
      imageSrc: "https://logowik.com/content/uploads/images/t_setanta-sports-old2102.logowik.com.webp",
      altText: "Setanta Sports",
      link: "#",
    },
    {
      imageSrc: "https://logowik.com/content/uploads/images/t_bein-sports-png2285.logowik.com.webp",
      altText: "Bein Sports",
      link: "#",
    },
    {
      imageSrc: "https://logowik.com/content/uploads/images/t_bose-new-20246219.logowik.com.webp",
      altText: "Bose",
      link: "#",
    },
  ];

  return (
    <section className="py-10 bg-white dark:bg-gray-900 mb-16">
      <h2 className="mb-8 font-semibold text-3xl text-center text-gray-800 dark:text-gray-200">
        Popular Brands
      </h2>
      <div className="max-w-7xl w-11/12 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="flex flex-wrap justify-center xl:justify-between gap-3">
              {brandsData.map((brand, i) => (
                <a
                  key={i}
                  href={brand?.link}
                  className="flex flex-col bg-white dark:bg-gray-800 px-0 shadow-sm text-gray-700 dark:text-gray-300 border dark:border-gray-700 max-w-24 sm:max-w-32 lg:max-w-40"
                >
                  <img
                    src={brand?.imageSrc}
                    alt={brand?.altText}
                    className="h-auto w-full"
                  />
                  <p className="p-2 h-full flex items-center text-center justify-center text-sm sm:text-base">{brand?.altText}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;