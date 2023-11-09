'use client'
import Typewriter from "typewriter-effect";

function TypingText({typingContent}: {typingContent: string[]}) {
  
  return (
    <Typewriter
      options={{
        strings: typingContent,
        autoStart: true,
        loop: true,
      }}
    />
  );
}
export default TypingText;