import type { MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import { HeroSection } from '~/components/CTA/Hero';
import { GitHubSection } from '~/components/CTA/GitHub';
import { DiscordSection } from '~/components/CTA/Discord';
import { MarqueeSection } from '~/components/CTA/Marquee';
import { AnimatedText } from '~/components/AnimatedText';
import { SponsorMask } from '~/components/CTA/SponsorMask';
import { ShopSection } from '~/components/CTA/Shop';
import { CalendarSection } from '~/components/CTA/Calendar';

export const meta: MetaFunction = () => {
   return [
      {
         title: 'San Antonio is a city rich in culture, history, and creativity. So is our tech stack!',
      },
      {
         name: 'devSA - Leveraging the power of our tech community in San Antonio',
         content:
            "Within our city, there's a notable absence in the field of web development. devSA is committed to filling this void by creating a dynamic hub where web developers and software engineers can connect, learn, and grow together",
      },
   ];
};

export default function Index() {
   return (
      <>
         <PageIntro eyebrow="Shaping the identity of tech in San Antonio" title={<AnimatedText />}>
            <p>
               Within our city, there is a significant disparity in defining San Antonio's tech landscape.{' '}
               <strong>devSA</strong> strives to mitigate this gap by establishing a vibrant hub that fosters an inclusive atmosphere for the local tech community     
            </p>
         </PageIntro>

         <MarqueeSection />
         <HeroSection />
         <CalendarSection />
         <ShopSection />
         <DiscordSection />
         <GitHubSection />
         <SponsorMask />
      </>
   );
}
