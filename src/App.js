import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="flex justify-center items-center  ">
      <div className=" basis-1/3 bg-orange-200 h-screen">
        <div className="">lribbble</div>
        <div className=" font-bold text-xl text-orange-400 ">
          Discover the world's top Designers & Creatives
        </div>
      </div>

      <div className=" basis-2/3 bg-gray-100 h-screen">
        <div className="md:font-bold font-serif md:text-4xl text-xl text-gray-600 w-[70%] mb-10 ml-40 ">
          Google account
        </div>

        <div className="flex w-[60%] mx-auto mb-10  ">
          <div className="basis-1/2">
            <div className=" font-bold text-l ">Name</div>
            <input
              type="text"
              className="border border-slate-300 rounded-lg py-2 px-3 text-sm w-[90%] "
            />
          </div>

          <div className="basis-1/2">
            <div class="font-bold text-l ">Username</div>
            <input
              type="text"
              className="border border-slate-300 rounded-lg py-2 px-3 text-sm w-[90%]"
            />
          </div>
        </div>

        <div className="flex">
          <div className="w-[60%] mx-auto mb-10">
            <div className=" font-bold text-l">Email</div>
            <input
              type="email"
              id="email"
              class="bg-gray-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2.5 mb-10 "
              placeholder="khaingzar@gmail.com"
              required
            />

            <div className="font-bold text-l">Password</div>
            <input
              type="password"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2.5 mb-5"
              placeholder="6+ characters"
            />

            <div className="flex mb-8">
              <input type="checkbox" className="w-10 h-6 mx-4" />

              <p className="text-slate-400 whitespace-normal">
                Creating an account means you're okay with our
                <span className="keke"> Terms of service.Privacy Policy</span>{" "}
                ,and our default{" "}
                <span className="keke">Notification Settings.</span>
              </p>
            </div>

            <div className="bg-red-500 w-40 hover:bg-blue-400 cursor-pointer text-white  py-2 px-4  rounded mb-5">
              Create Account
            </div>
            <p className=" text-sm text-slate-400">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="keke">Privacy Policy</span> and{" "}
              <sapn class="keke">Terms of Service</sapn> apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
