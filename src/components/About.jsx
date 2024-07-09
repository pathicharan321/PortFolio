import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-15"
    >
      <div>
        <h1 className="text-3xl font-bold mb-1">About</h1>
        <p>
          Hello, I'm Charan, a passionate Web developer with a keen eye for MERN
          Stack .
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-4 py-3">
                    Education
                </th>
                <th scope="col" class="px-6 py-4">
                    College
                </th>
                <th scope="col" class="px-15 py-4">
                    Percentage/cgpa
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Bachelors of Technology in Chemical Engineering
                </th>
                <td class="px-6 py-4">
                    NIT Calicut
                </td>
                <td class="px-6 py-4">
                    8.21
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Board of Intermediate Education, Andhra Pradesh
                </th>
                <td class="px-6 py-4">
                    Bhasyam Junior Collage
                </td>
                <td class="px-6 py-4">
                   93.33
                </td>
                
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Secondary School Education
                </th>
                <td class="px-6 py-4">
                    Bhasyam High School
                </td>
                <td class="px-6 py-4">
                    99.33
                </td>
                
            </tr>
        </tbody>
    </table>
</div>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          I,m Proficient in Java and uses MERN Stack to create websites.I like to Solve Problems
          and I'm also a fast learner.
         
        </span>
        <br />
      </div>
    </div>
  );
}

export default About;
