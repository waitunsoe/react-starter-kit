import React from "react";

const Test = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
  <div className="container mx-auto px-4 pt-10">
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-4">
        <img src="https://hdtoday.tv/wp-content/uploads/2018/03/Peter-Rabbit-Poster.jpg" alt="Peter Rabbit Poster" className="w-full rounded-lg shadow-lg"/>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Peter Rabbit</h1>
        <div className="flex flex-wrap items-center mb-4">
          <div className="text-gray-600 mr-4">Released:</div>
          <div className="font-bold text-gray-800">2018</div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <div className="text-gray-600 mr-4">Genre:</div>
          <div className="font-bold text-gray-800">Comedy, Family, Fantasy</div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <div className="text-gray-600 mr-4">Director:</div>
          <div className="font-bold text-gray-800">Will Gluck</div>
        </div>
        <div className="flex flex-wrap items-center mb-4">
          <div className="text-gray-600 mr-4">Stars:</div>
          <div className="font-bold text-gray-800">James Corden, Fayssal Bazzi, Domhnall Gleeson</div>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          The mischievous and adventurous Peter Rabbit and his family take over the farm of Mr. McGregor, who is determined to get rid of them. 
        </p>
        <div className="mt-8">
          <a href="#" className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300">Watch Now</a>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default Test;
