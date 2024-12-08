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
      altText: "Hera Arms Indestries",
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
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <a
                  key={i}
                  href={brand.link}
                  className="m-2 flex bg-white dark:bg-gray-800 w-[120px] sm:w-[150px] items-center justify-center 2xl:w-[180px]"
                >
                  <img
                    src={brand.imageSrc}
                    alt={brand.altText}
                    className="h-auto w-full"
                  />
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