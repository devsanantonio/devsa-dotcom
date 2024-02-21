import { Link } from '@remix-run/react';
import { Container } from './Container';
import { FadeIn } from './FadeIn';

export function GitHubSection() {
   return (
      <>
         <Container className="mt-24 sm:mt-32">
            <FadeIn>
               <div className="relative rounded-3xl bg-transparent">
                  <div className="relative h-80 overflow-hidden md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2">
                     <img
                        className="h-full w-full object-contain"
                        alt="devSA github logo"
                        src="https://res.cloudinary.com/jessebubble/image/upload/v1707781399/midjourney/github_hlswbo.png"
                     />
                  </div>
                  <div className="relative mx-auto max-w-7xl py-10 sm:py-32 lg:px-8 lg:py-40">
                     <div className="pl-6 pr-6 md:mr-auto md:w-2/3 md:pr-16 lg:w-1/2 lg:pl-0 lg:pr-24 xl:pr-32">
                        <h2 className="text-base font-semibold leading-7 text-spursPink">
                           Let's build together San Antonio
                        </h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                           Pull Request Welcome
                        </p>
                        <p className="mt-6 text-wrap text-base leading-7 text-neutral-800">
                           We have activated GitHub Discussions and implemented
                           a structured template for reporting issues and bugs.
                           This enhancement empowers every member of our
                           community to contribute by reporting anomalies or
                           proposing innovative features.
                        </p>
                        <div className="mt-8">
                           <Link
                              to="https://github.com/devsanantonio"
                              className="inline-flex rounded-md bg-neutral-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-950/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                           >
                              Visit our GitHub page
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </Container>
      </>
   );
}
