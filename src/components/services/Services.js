import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";

const Services = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Servicing all of Sol Cal since 2014" des="SERVICES" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Maintenance"
          des=" With Software Development Lifecycle can effectively communicate
                 with stakeholders, developers, and designers to meet business goals."
        />
        <Card
          title="Repairs and Restoration"
          des="  A service for providing end-to-end solutions, from ideation to deployment, for 
                building custom software applications."
        />
        <Card
          title="Delivery and Installation of Fountains"
          des="Analyzation, Optimization, and improving website content, structure, and technical 
                aspects to increase visibility, traffic, and rankings."
        />
        <Card
          title="Custom Fountain Design"
          des="Designing, developing, and launching websites that meet business and user needs, 
                leveraging a variety of front-end and back-end technologies."
        />
        <Card
          title="Removal and Fountain Relocation"
          des="Creating intuitive and user-centered design solutions for software applications 
                or websites, leveraging analysis and prototyping techniques. "
        />
        <Card
          title="Fountain Surfacing"
          des="Providing the infrastructure, storage, and support necessary to host websites and 
                web applications, ensuring high uptime, security, and performance."
        />
      </div>
    </section>
  );
};
export default Services;
