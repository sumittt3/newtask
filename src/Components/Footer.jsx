import React from "react";
import {TiSocialLinkedin} from "react-icons/ti";
import {SlSocialInstagram} from "react-icons/sl";
import {TiSocialYoutube} from "react-icons/ti";
import {TiSocialFacebook} from "react-icons/ti";
import {SlSocialTwitter} from "react-icons/sl";
const Footer = function () {
  return (
    <div className="bg-black w-full mt-3 flex-col">
      <div className="flex justify-center gap-8 pt-2">
        <p className="text-4xl hover:text-blue-300 text-white">
          <TiSocialLinkedin />
        </p>
        <p className="text-2xl text-white mt-2 hover:text-red-300">
          <SlSocialInstagram />
        </p>
        <p className="text-3xl text-white mt-1 hover:text-blue-300">
          <SlSocialTwitter />
        </p>
        <p className="text-3xl text-white mt-1 hover:text-red-700">
          <TiSocialYoutube />
        </p>
        <p className="text-4xl text-white hover:text-blue-600">
          <TiSocialFacebook />
        </p>
      </div>
      <div className="text-center mt-2">
        <p className="text-white font-mono text-[15px]">
          © 2024. Designed by Sumit. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
