import React from "react";
import Ecommerce from "../../public/ecommerce-logo.png";
import movie from "../../public/movie.jpeg";
import todo from "../../public/to-do.jpg";


function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: Ecommerce,
      name: "E-Commerece Website",
      description:"This is made by using mern stack and MVC Architecture",
      SourceCode:"https://github.com/pathicharan321/ecommerce",
    },
    {
      id: 2,
      logo:movie ,
      name: "Movie App",
      description:"This is made by using Html,CSS,JavaScript",
      SourceCode:"https://github.com/pathicharan321/movie-rating",
    },
    {
      id: 3,
      logo:todo ,
      name: "Todo List",
      description:"This is made by using Html,CSS,JavaScript",
      SourceCode:"https://github.com/pathicharan321/todo_list",
    },
  ];
  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-17 my-5">
          {cardItem.map(({ id, logo, name,description,SourceCode}) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-1 text-gray-500">
                 {description}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                
                <button className="bg-green-400 hover:bg-green-600 text-white font-bold mr-10 px-6 py-4 rounded">
                  <a href={SourceCode} target="_blank" > Source code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
