"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const page = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="max-content-width mx-auto py-24">
      <div className="grid grid-cols-2 gap-12 items-center justify-center">
        <div className="lg:p-12">
          <Image
            height="640"
            width="640"
            alt="Login image"
            src="/assets/images/login/login.svg"
          />
        </div>

        <div className="border-2 p-12">
          <form className="space-y-6 pt-4">
            <div className="space-y-2 text-sm">
              <label
                htmlFor="email"
                className="block dark:text-gray-600 font-bold"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 outline-none border "
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                htmlFor="email"
                className="block dark:text-gray-600 font-bold"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 outline-none border "
              />
            </div>

            <div className=" space-y-2 text-sm">
              <label className="block dark:text-gray-600 font-bold">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border outline-0 focus:dark:border-violet-600"
                />
                <span className="absolute top-3 right-2 text-xl text-[var(--clr-accent)] cursor-pointer">
                  <BsEyeSlashFill onClick={() => setShowPass(!showPass)}/>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="px-8 w-full text-white py-3 font-semibold rounded bg-primary dark:text-gray-100 hover:rounded-full duration-400 mt-10"
            >
              Sign up
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            <p className="px-3 text-sm dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4 py-2">
            <button
              aria-label="Log in with Google"
              className="p-2.5 rounded-full bg-[var(--bg-light)] hover:text-[var(--clr-accent)] border-2 hover:border-[var(--clr-accent)]"
            >
              <FaFacebookF />
            </button>
            <button
              aria-label="Log in with Google"
              className="p-2.5 rounded-full bg-[var(--bg-light)] hover:text-[var(--clr-accent)] border-2 hover:border-[var(--clr-accent)]"
            >
              <FaLinkedinIn />
            </button>
            <button
              aria-label="Log in with Google"
              className="p-2.5 rounded-full bg-[var(--bg-light)] hover:text-[var(--clr-accent)] border-2 hover:border-[var(--clr-accent)]"
            >
              <FaGoogle />
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              href="/login"
              className="underline dark:text-gray-800 ml-2 font-bold text-[var(--clr-accent)]"
            >
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;