import { useState, useEffect } from 'react';

const words = [
   'the browser',
   'the web',
   'user experience',
   'web accessibility',
   'the cloud',
   'non-profits',
   'open source',
   'small business',
   'startups',
   'cybersecurity',
];

export function AnimatedText() {
   const [currentWordIndex, setCurrentWordIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);

      return () => clearInterval(interval);
   }, []);

   return (
      <>
         <h1
            className="font-display -ml-1 block max-w-5xl text-balance text-5xl font-medium tracking-tight sm:text-6xl"
            data-animate
            data-gradient
            style={{
               '--secondary': 'hsla(0,0%,100%,0.5)',
               '--highlight': '2',
               '--spread': '1',
            }}
         >
            <span className="text-neutral-950">Building for</span>{' '}
            {words[currentWordIndex]}{' '}
         </h1>

         <style>
            {`             
                [data-gradient=true] {
                    --primary-bg: conic-gradient(from var(--angle, 180deg) at 50% 70%,hsla(0,0%,98%,1) 0deg,#eec32d 72.0000010728836deg,#ec4b4b 144.0000021457672deg,#709ab9 216.00000858306885deg,#4dffbf 288.0000042915344deg,hsla(0,0%,98%,1) 1turn);
                }
                h1 {
                    background:
                        var(--primary-bg),
                        linear-gradient(var(--secondary), var(--secondary)),
                        linear-gradient(var(--secondary) 0 calc((var(--highlight) + var(--spread)) * 2lh), transparent);
                    background-repeat: no-repeat;
                    background-size: 
                        100% calc(var(--highlight) * 2lh),
                        100% calc((var(--highlight) + var(--spread)) * 2lh),
                        100% 100%;
                    background-clip: text;
                    color: transparent;
                }
            
                @media(prefers-reduced-motion: no-preference) {
                    @property --angle {
                        inherits: true;
                        initial-value: 180deg;
                        syntax: '<angle>';
                    }
                    @keyframes rotate {
                        to { --angle: 540deg; }
                    }
                    [data-gradient=true][data-animate=true] {
                        animation: rotate 6s infinite linear;
                    }
                }
        `}
         </style>
      </>
   );
}
