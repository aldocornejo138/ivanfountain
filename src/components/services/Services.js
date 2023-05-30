import React from "react";
import Title from "../layouts/Title";
import { IvanDelivery } from "../../assets/index";
import { IvanRepair } from "../../assets/index";

const Services = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Servicing all of Sol Cal since 2014" des="SERVICES" />
      </div>
      <div className="card ">
        <div className="card-picture">
          <img
            src={IvanDelivery}
            alt={IvanDelivery}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="card-Right">
          <div className="card-Title text-responsive">
            <h1 className="text-4xl md:text-5xl  text-designColor text-center font-bold capitalize">
              Delivary and Installation
            </h1>
          </div>
          <div className="card-paragraph text-responsive">
            <p1 className="text-xs mdl:text-sm uppercase font-light  text-container text-designColor text-center tracking-wide">
              Is there a fountain you would like to install in your home or
              business, but it looks too heavy or complicated? Let the
              professionals take care of it for you. We pick up deliver and
              install all day every day. With us you will ensure your investment
              will be handled and installed properly. It does not matter where
              we pick it up at a store or even another house.
            </p1>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-Right">
          <div className="card-Title text-responsive">
            <h1 className="text-4xl md:text-5xl  text-designColor text-center font-bold capitalize">
              Fountain Cleaning and Repair
            </h1>{" "}
          </div>
          <div className="card-paragraph text-responsive">
            <p1 className="text-xs mdl:text-sm  uppercase font-light text-container text-designColor text-center tracking-wide">
              Is there a fountain you would like to install in your home or
              business, but it looks too heavy or complicated? Let the
              professionals take care of it for you. We pick up deliver and
              install all day every day. With us you will ensure your investment
              will be handled and installed properly. It does not matter where
              we pick it up at a store or even another house.
            </p1>
          </div>
        </div>
        <div className="card-picture">
          <img
            src={IvanRepair}
            alt={IvanRepair}
            style={{
              borderRadius: "10px",
              position: "flex-start",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="card ">
        <div className="card-picture">
          <img
            src={IvanDelivery}
            alt={IvanDelivery}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="card-Right">
          <div className="card-Title text-responsive">
            <h1 className="text-4xl md:text-5xl text-designColor text-center font-bold capitalize">
              Maintenance
            </h1>
          </div>
          <div className="card-paragraph text-responsive">
            <p1 className="text-xs mdl:text-sm  uppercase font-light  text-container text-designColor text-center tracking-wide">
              Is there a fountain you would like to install in your home or
              business, but it looks too heavy or complicated? Let the
              professionals take care of it for you. We pick up deliver and
              install all day every day. With us you will ensure your investment
              will be handled and installed properly. It does not matter where
              we pick it up at a store or even another house.
            </p1>
          </div>
        </div>
      </div>
      <div className="card ">
        <div className="card-Right">
          <div className="card-Title text-responsive">
            <h1 className="text-4xl md:text-5xl text-designColor text-center font-bold capitalize">
              And Much More!
            </h1>{" "}
          </div>
          <div className="card-paragraph text-responsive">
            <p1 className="text-xs mdl:text-sm  uppercase font-light text-container text-designColor text-center tracking-wide">
              There is nothing more relaxing then to listen to the tranquil
              sounds of your fountain. Enjoy your fountain for years to come.
              Let us maintain your fountain with regular service. Here is the
              service we can provide for you. Vacuuming dirty water out,
              scrubbing out algae, cleaning pump filter, checking all tubing and
              fittings, re-leveling water flow and adding chemicals to water
            </p1>
          </div>
        </div>
        <div className="card-picture">
          <img
            src={IvanRepair}
            alt={IvanRepair}
            style={{
              borderRadius: "10px",
              position: "flex-start",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Services;
