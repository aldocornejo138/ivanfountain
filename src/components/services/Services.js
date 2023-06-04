import React from "react";
import Title from "../layouts/Title";
import { IvanDelivery } from "../../assets/index";
import { IvanRepair } from "../../assets/index";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    triggeOnce: false,
  });

  return (
    <section
      id="services"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div ref={ref}>
        {inView ? (
          <div className=" Visible flex justify-center items-center text-center">
            <Title title="Servicing all of Sol Cal since 2014" des="SERVICES" />
          </div>
        ) : (
          <div className=" nonVisible flex justify-center items-center text-center">
            <Title title="Servicing all of Sol Cal since 2014" des="SERVICES" />
          </div>
        )}
      </div>
      <div ref={ref}>
        {inView ? (
          <div className=" revealLeft card ">
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
                  install all day every day. With us you will ensure your
                  investment will be handled and installed properly. It does not
                  matter where we pick it up at a store or even another house.
                </p1>
              </div>
            </div>
          </div>
        ) : (
          <div className=" hideLeft card ">
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
                  install all day every day. With us you will ensure your
                  investment will be handled and installed properly. It does not
                  matter where we pick it up at a store or even another house.
                </p1>
              </div>
            </div>
          </div>
        )}
      </div>
      <div ref={ref}>
        {inView ? (
          <div className=" revealRight card ">
            <div className="card-picture">
              <img
                src={IvanRepair}
                alt={IvanRepair}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="card-Right">
              <div className="card-Title text-responsive">
                <h1 className="text-4xl md:text-5xl  text-designColor text-center font-bold capitalize">
                  Fountain Cleaning and Repair
                </h1>
              </div>
              <div className="card-paragraph text-responsive">
                <p1 className="text-xs mdl:text-sm uppercase font-light  text-container text-designColor text-center tracking-wide">
                  Is there a fountain you would like to install in your home or
                  business, but it looks too heavy or complicated? Let the
                  professionals take care of it for you. We pick up deliver and
                  install all day every day. With us you will ensure your
                  investment will be handled and installed properly. It does not
                  matter where we pick it up at a store or even another house.
                </p1>
              </div>
            </div>
          </div>
        ) : (
          <div className=" hideRight card ">
            <div className="card-picture">
              <img
                src={IvanRepair}
                alt={IvanRepair}
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="card-Right">
              <div className="card-Title text-responsive">
                <h1 className="text-4xl md:text-5xl  text-designColor text-center font-bold capitalize">
                  Fountain Cleaning and Repair
                </h1>
              </div>
              <div className="card-paragraph text-responsive">
                <p1 className="text-xs mdl:text-sm uppercase font-light  text-container text-designColor text-center tracking-wide">
                  Is there a fountain you would like to install in your home or
                  business, but it looks too heavy or complicated? Let the
                  professionals take care of it for you. We pick up deliver and
                  install all day every day. With us you will ensure your
                  investment will be handled and installed properly. It does not
                  matter where we pick it up at a store or even another house.
                </p1>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" revealLeft card ">
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
              Maintenance
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

      <div className=" card ">
        <div className="card-picture">
          <img
            src={IvanRepair}
            alt={IvanRepair}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="card-Right">
          <div className="card-Title text-responsive">
            <h1 className="text-4xl md:text-5xl  text-designColor text-center font-bold capitalize">
              And Much More!
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
    </section>
  );
};
export default Services;
