import React, { useState } from 'react'

function Card({ setCart }) {
  const [toggle, setToggle] = useState(true)

  const photos = [
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1692845706590',
   ' https://tse3.mm.bing.net/th?id=OIP.9oxxBrCNqRK192sHlHWCvwHaGk&pid=Api&P=0&h=220',
   ' https://techring.in/wp-content/uploads/2023/02/Samsung-Galaxy-S24-Ultra.jpg',
   ' https://specifications-pro.com/wp-content/uploads/2021/02/Vivo-S9e-5G-600x600.jpg',
    'https://images.hindustantimes.com/tech/img/2023/07/02/original/realme11Pro2_1688272980664.png',
  ];

  return (
    <div>
      {photos.map((photos, index) => (
        <div className="col mb-5" key={index}>
          <div className="card h-100">
            <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
            <img className="card-img-top" src={photos} alt="..." />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">Sale Item {index + 1}</h5>
                <span className="text-muted text-decoration-line-through">$50.00</span>
                $25.00
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
                {
                  toggle ? (
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() => {
                        setToggle((current) => !current);
                        setCart((current) => current + 1);
                      }}
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark mt-auto"
                      onClick={() => {
                        setToggle((current) => !current);
                        setCart((current) => current - 1);
                      }}
                    >
                      Remove
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;