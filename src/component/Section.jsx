import React from "react";

const Section = ({ backgroundColor, title, sub }) => {
  return (
    <section className="bg-{backgroundColor} ">
      <div className="container">
        <h2 className="text-center">{title}</h2>
        <p className="text-center">{sub}</p>
        
        <ul className="row">
          <li className="col-md-4">
            <div className="card bg-dark text-white">
              <img
                src="../img/photo-1593810450967-f9c42742e326.jpeg"
                className="card-img"
                alt="整體健身"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div>
                  <h3 className="card-title">整體健身</h3>
                  <p className="card-text">
                    每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。
                  </p>
                </div>
              </div>
            </div>
          </li>

          
        </ul>
      </div>
    </section>
  );
};

export default Section;
