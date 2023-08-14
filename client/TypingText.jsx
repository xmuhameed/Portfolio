'use client'
import React from 'react'
import Typewriter from "typewriter-effect";

 const TypingText = () => {
  return (
    <Typewriter
      options={{
        strings: [
            "i'm a Frontend Developer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
export default TypingText;