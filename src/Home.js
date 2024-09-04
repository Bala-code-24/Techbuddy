// src/Home.js
import React from "react";
import { Button } from "@nextui-org/react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center">
      <header className="w-full flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Techbuddy</div>
        <nav>
          <a href="#!" className="text-blue-400 mx-4">Next.js 14 Course</a>
          <a href="#!" className="text-blue-400">Dev Career Accelerator</a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-blue-500">Master</span> Modern Web Development <br />
          With a <span className="text-blue-500">Project</span> Based Approach
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Gain real-world experience and land that dev job you've always imagined
        </p>
        <div className="mt-8 flex space-x-4">
          <Button auto className="bg-blue-500">
            Ultimate Next.js 14 Course
          </Button>
          <Button auto className="bg-purple-500">
            Dev Career Accelerator
          </Button>
        </div>
      </main>

      <footer className="p-4">
        <div className="text-center">
          <p>© 2024 Techbuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
