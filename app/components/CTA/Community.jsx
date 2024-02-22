import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { SectionIntro } from '~/components/SectionIntro';
import { GrayscaleTransitionImage } from '../GrayscaleTransitionImage';

export function CommunitySection() {
   return (
      <div className="mt-24 pt-24 sm:mt-32 lg:mt-40">
         <SectionIntro
            eyebrow="Community Spotlight"
            title="Explore the city and discover your next community"
            invert={false}
         >
            <p>
               Explore a variety of virtual and in-person events taking place in
               the city. From engaging code-alongs to delightful free food
               events, there's an experience tailored for everyone
            </p>
         </SectionIntro>
         <Container className="mt-16">
            <div className="">
               {collections.map((group) => (
                  <FadeInStagger key={group.title}>
                     <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-3 xl:gap-8">
                        <div className="lg:col-span-3">
                           <ul
                              role="list"
                              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                           >
                              {group.examples.map((example) => (
                                 <li key={example.name}>
                                    <FadeIn>
                                       <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                          <Link to={example.href}>
                                             <GrayscaleTransitionImage
                                                alt="screen shot of the product"
                                                {...example.image}
                                                className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                             />
                                             <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                   {example.name}
                                                </p>
                                                <p className="mt-2 text-sm text-white">
                                                   {example.role}
                                                </p>
                                             </div>
                                          </Link>
                                       </div>
                                    </FadeIn>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </FadeInStagger>
               ))}
            </div>
         </Container>
      </div>
   );
}

const collections = [
   {
      title: 'Community',
      examples: [
         {
            name: 'Alamo Angular Developers',
            role: 'Join us to explore the world of frontend development using the Angular Framework',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708224283/clean_517219992_wa7yp9.webp',
            },
            href: 'https://www.meetup.com/alamos-angular-developers-meetup-group/',
         },
         {
            name: 'SA New Tech',
            role: 'The local community gets together to network, socialize and show-and-tell new technology',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708230947/600_518968043_lo9m1d.webp',
            },
            href: 'https://www.meetup.com/sanewtech/',
         },
         {
            name: 'User Experience San Antonio',
            role: 'We support the UX community in San Antonio by creating ways for people to connct and grow their skills',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708223443/clean_498237628_kvejoc.webp',
            },
            href: 'https://www.meetup.com/uxsanantonio-public/',
         },
         {
            name: 'ACM SA',
            role: 'This is a group for anyone in the San Antonio area interested in networking with other coding professionals.',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708223501/clean_519153582_mhlaxf.webp',
            },
            href: 'https://www.meetup.com/acm-sa/',
         },
         {
            name: 'SATX Robotix',
            role: 'San Antonio sits on the bleeding edge of robotic technology. From autonomous vehicles to drones to industrial robots, the Alamo City stands out',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708224681/clean_474350251_nd4e54.webp',
            },
            href: 'https://www.meetup.com/SATX-Robotix/',
         },
         {
            name: 'San Antonio Data Science',
            role: 'We aim to make San Antonio the Data Science Capitol of TX!',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708224680/clean_470143113_a8l02u.webp',
            },
            href: 'https://www.meetup.com/San-Antonio-Data-Science/',
         },
         {
            name: 'SA Data, Analytics, and AI',
            role: 'Community of like-minded individuals who have an interest in: business intelligence (BI) Advanced Analytics, Data Science, Data Engineering, Machine Learning Ops, Artificial Intelligence (AI)',
            image: {
               src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708230947/600_516956715_qqtqxu.webp',
            },
            href: 'https://www.meetup.com/dataandai/',
         },
      ],
   },
];
