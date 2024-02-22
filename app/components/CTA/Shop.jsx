import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import { Button } from '~/components/Button';
import { GrayscaleTransitionImage } from '../GrayscaleTransitionImage';
import { Link } from "@remix-run/react";

export function ShopSection() {
   let rotations = [
      'rotate-2',
      '-rotate-2',
      'rotate-2',
      'rotate-2',
      '-rotate-2',
      'rotate-2',
      '-rotate-2',
   ];

   return (
      <div className='cta mt-24 pt-24 sm:mt-32 lg:mt-40 rounded-3xl px-6 py-4 pb-24'>
         <SectionIntro
            eyebrow="Print on Demand"
            title="Show off your tech stack and wear the web"
         >
            <p>
               Every purchase you make is a direct investment in our developer community! 
               While developers connect on GitHub and collaborate to complete the official devSA store, 
               we realized these designs were too good to be left gathering dust. {' '}
               Print on demand is powered by the Printify API
            </p>
            <Link to="https://devsanantonio.printify.me/products" target="_blank" rel="noopener noreferrer">
               <Button 
                  className='mt-6 text-spursPink -ml-4'
               >
                  Shop Now &rarr;
               </Button>
            </Link>
         </SectionIntro>
         <Container className="mt-16">
            <FadeIn>
               <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8 overflow-x-auto">
                  {mockups.map((mockup, index) => (
                     <div key={index} className="relative h-64 w-64 flex-none sm:h-80 sm:w-80">
                        <div className="absolute inset-0 rounded-xl" />
                        <Link to={mockup.href} target="_blank" rel="noopener noreferrer">
                           <GrayscaleTransitionImage 
                              src={mockup.src} 
                              alt={mockup.alt} 
                              className={`slideZoom relative h-full w-full rounded-3xl object-contain ${rotations[index]}`}
                           />
                        </Link>
                     </div>
                  ))}
               </div>
            </FadeIn> 
         </Container>

         <style>
            {`
               @keyframes slideZoom {
                  0% {
                     transform: translateX(100%) scale(0.8);
                     opacity: 0;
                  }
                  100% {
                     transform: translateX(0) scale(1);
                     opacity: 1;
                  }
               }

               .slideZoom {
                  animation: slideZoom 0.6s ease-out;
               }

               .cta {
                  /* Other styles */
                  background-size: 200% 200%;
                  animation: gradient 15s ease infinite;
                  background-image: linear-gradient(45deg, #fff 0%, #eee 55%, #333 100%);
                }
                
                @keyframes gradient {
                  0% {
                    background-position: 0% 50%;
                  }
                  50% {
                    background-position: 100% 50%;
                  }
                  100% {
                    background-position: 0% 50%;
                  }
               }
            `}
         </style>
      </div>
   );
}



const mockups = [
   {
      src: "https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg",
      alt: "devSA Terminal React Tee",
      href: ""
   },
   {
      src: "https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg",
      alt: "devSA Terminal React Face Tee",
      href: "https://devsanantonio.printify.me/product/5902956/unisex-garment-dyed-t-shirt"
   },
   {
      src: "https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_4_Front_1_avyzok.jpg",
      alt: "devSA Terminal Logo Tee",
      href: "https://devsanantonio.printify.me/product/5924654/unisex-garment-dyed-t-shirt"
   },
   {
      src: "https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Context_g7z6bl.jpg",
      alt: "devSA Terminal Logo Tee",
      href: "https://devsanantonio.printify.me/product/5924654/unisex-garment-dyed-t-shirt"
   },
   {
      src: "https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_1_szs1sg.png",
      alt: "devSA Terminal Vite Tee",
      href: "https://devsanantonio.printify.me/product/5919627/unisex-garment-dyed-t-shirt"
   },
   {
      src: "https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Front_p196aj.jpg",
      alt: "devSA Terminal Huggin Face Tee",
      href: "https://devsanantonio.printify.me/product/5919629/unisex-garment-dyed-t-shirt"
   }
];