const CategoryCard = () => {
  const categories = [
    {
      name: "Stays",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUY3z0aYJABHlMjG3GfhIBC3oEVvSyBrBSADWVKlecaFIfvZFrvi5YrFIQMUfYwfBNCto&usqp=CAU",
      description: "Homes, boutique hotels & more",
    },
    {
      name: "Experiences",
      img: "https://img.traveltriangle.com/blog/wp-content/uploads/2017/12/cover-for-50-Amazing-Travel-Experiences-Around-The-World.jpg",
      description: "Activity hosted by locals",
    },
    {
      name: "Adventures",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GBL4hSzNBjTtH2havCodAizkp-T_Tkdrh2xYwEm4SBrp4VKhDd5O_739bmZxOa0fQX0&usqp=CAU",
      description: "Hosted trips including lodges",
    },
    {
      name: "Restaurants",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyCch1_jr06LSf3okw4ws7w35YtYb97Ge2q3CEGbTy3jveoA7_ntVE02bxoaO0KkZT68&usqp=CAU",
      description: "Popular spots to eat & drink",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "auto auto",
        justifyContent: "space-evenly",
        width: "80%",
        flexWrap: "wrap",
        marginTop: "80px",
      }}
    >
      {categories.map((category) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              marginBottom: "20px",
              border: "1px solid grey",
            }}
          >
            <img
              src={category.img}
              alt={category.name}
              height={100}
              width={130}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto auto",
              }}
            >
              <h4>{category.name}</h4>
              <p>{category.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCard;
