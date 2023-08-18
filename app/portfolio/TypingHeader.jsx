"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const  TypingHeader = () => {
  return (
    <Typewriter
      options={{
        strings: ["My Projects"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};
export default TypingHeader