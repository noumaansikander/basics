function Kfc() {
  let arr = [
    {
      id: 1,
      image: "burger.jpg",
      title: "Krunch Burger",
      description:
        "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      price: 250,
    },
    {
      id: 2,
      image: "mighty.png",
      title: "Mighty Zinger",
      description:
        "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
      price: 650,
    },
    {
      id: 3,
      image: "Stacker.png",
      title: "Zinger Stacker",
      description:
        "Double chicken fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese Sauce- sandwiched between a sesame seed bun",
      price: 550,
    },
    {
      id: 4,
      image: "mighty.png",
      title: "Mighty Zinger",
      description:
        "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
      price: 650,
    },
    {
      id: 5,
      image: "mighty.png",
      title: "Mighty Zinger",
      description:
        "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun",
      price: 650,
    },
  ];

  return (
    <div className="container my-5 d-flex p-2">
      {arr.map((arr) => {
        return (
          <div className="card" style={{ width: "18rem" }}>
            <img src={arr.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{arr.title}</h5>
              <p className="card-text">{arr.description}</p>
              <a href="https://www.google.com/" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Kfc;
