'use client'
import React from 'react'
import { useEffect } from 'react'
import '../app/styles/TextShaper.css'
import TagCloud from 'TagCloud'

export const SkillWords = () => {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
                const texts = [
                    "HTML",
                    "CSS",
                    "CSS3",
                    "SASS",
                    "JavaScript",
                    "TypeScript",
                    "React js",
                    "redux",
                    "Next js",
                    "Git",
                    "ES6",
            ];
            const options = {
                radius: 141,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: false,
            };
            TagCloud(container,  texts, options);
        }
    },[])
    return (
    <>
        <div className="text-shpere">
            <span className="tagcloud"></span>
        </div>
    </>
    );
}

// export default SkillWords;