import { Container } from '~/components/Container';
import { BlockQuote } from '~/components/BlockQuote';
import { FadeIn } from '~/components/FadeIn';
import { List, ListItem } from '~/components/List';
import { TagList, TagListItem } from '~/components/TagList';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';
import { SectionIntro } from '~/components/SectionIntro';

export function HeroSection() {
   return (
      <div className="mt-24 pt-24">
         <SectionIntro
            eyebrow="Building for everyone"
            title="Leveraging the power of our tech community"
            invert={false}
         >
            <p>
               San Antonio is a city rich in culture, history, and creativity.{' '}
               <strong className="md:block">So is our tech stack!</strong>
            </p>
         </SectionIntro>
         <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32">
            <Tech />
            <Community />
            <Future />
         </div>
      </div>
   );
}

function Section({ title, image, children }) {
   return (
      <Container className="group/section [counter-increment:section]">
         <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
            <div className="flex justify-center">
               <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                  <GrayscaleTransitionImage
                     {...image}
                     sizes="(min-width: 1024px) 41rem, 31rem"
                     className="justify-center rounded-3xl lg:justify-end lg:group-even/section:justify-start"
                  />
               </FadeIn>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
               <FadeIn>
                  <div
                     className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                     aria-hidden="true"
                  />
                  <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                     {title}
                  </h2>
                  <div className="mt-6">{children}</div>
               </FadeIn>
            </div>
         </div>
      </Container>
   );
}

function Tech() {
   return (
      <Section
         title="Defining tech in SA"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708041444/images_modern_Huggies_Doodle_Huggy_cqsv7a.gif',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               Within our city, a significant void exists in the realms of web
               development. devSA aims to bridge this gap by establishing a
               vibrant hub where individuals from diverse backgrounds can
               convene to exchange insights on the tools, languages, and
               frameworks integral to their development work
            </p>
            <p>
               From marketing agencies that power our city's small businesses
               and government websites with CMS tools like WordPress or Drupal,
               to federal cybersecurity contractors employing cutting-edge cloud
               computing and data science to safeguard our nation's
               infrastructure, and innovative startups disrupting the status quo
               with AI and machine learning—San Antonio is a dynamic city
               perpetually in motion
            </p>
            <p>
               We are excited to observe the emergence of these new community
               spaces. It's heartening to see their alignment with our objective
               of fostering a unique and beneficial initiative in San Antonio
               that serves the web development community
            </p>
         </div>

         <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
            New community spaces include:
         </h3>
         <TagList className="mt-4">
            <TagListItem>Alamo Angular Developers</TagListItem>
            <TagListItem>SA Data Science</TagListItem>
            <TagListItem>UXSA</TagListItem>
            <TagListItem>ACM SA</TagListItem>
            <TagListItem>Cloud Native SA</TagListItem>
            <TagListItem>SA New Tech Meetup</TagListItem>
         </TagList>
      </Section>
   );
}

function Community() {
   return (
      <Section
         title="Supporting the tech community"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708111969/Vibing_Huggy_pstjli.gif',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               The in-person meetup space in San Antonio continues to grow! We
               are thrilled to witness the rise of tech community spaces
               dedicated to nurturing and growing the web development community
               in our city
            </p>
            <p>
               Opportunities abound for those interested in publicly sharing
               their journey with our community. Our goal isn't to rival content
               creators on platforms like YouTube, Twitch, or Twitter. Instead,{' '}
               <strong>devSA strives to offer a dedicated platform</strong> for
               those eager to share their experiences and growth with the SA
               tech community
            </p>
            <p>
               We are also looking to partner with our local marketing agencies
               and businesses to host in-person events and tech talks. If you
               are interested in sponsoring a topic-specific tech talk, or
               gifting the community with some swag, we'd love to hear from you
            </p>
         </div>

         <BlockQuote
            author={{ name: 'Andy Bell', role: 'CEO of Set Studio' }}
            className="mt-12"
         >
            Tools are just tools. They don't really matter—especially to the
            people trying to use the websites you build. The same goes for
            frameworks too. The most important thing is that you stick to the
            key principles
         </BlockQuote>
      </Section>
   );
}

function Future() {
   return (
      <Section
         title="Thinking about the future"
         image={{
            src: 'https://res.cloudinary.com/jessebubble/image/upload/v1708123120/images_Brand_Logos_Rainbow_Hugging_Face_dgynvl.svg',
         }}
      >
         <div className="space-y-6 text-base text-neutral-600">
            <p>
               <strong>devSA aims to bridge the gap for developers</strong> by
               establishing a vibrant hub where individuals from diverse
               backgrounds can convene to exchange insights on the tools,
               languages, and frameworks integral to their development work
            </p>
            <p>
               Beyond establishing a platform for developers to share their
               events, tech talks, and personal journeys, we are also actively
               seeking partnerships with local businesses and recruiters. Our
               aim is to provide a space where job listings and opportunities
               can be shared, further enriching our community
            </p>
         </div>

         <h3 className="font-display mt-12 text-base font-semibold text-neutral-950">
            Thinking about the developer experience
         </h3>
         <List className="mt-8">
            <ListItem title="Showcase">
               We've designated a special area on our website for developers to
               exhibit their work, complete with links to their GitHub,
               LinkedIn, and personal websites. This provides an excellent
               opportunity to present your work to a focused audience and foster
               connections with other developers and businesses in San Antonio
            </ListItem>
            <ListItem title="Job Board">
               We are actively seeking partnerships with local businesses and
               recruiters. Our goal is to provide a space where job listings and
               opportunities can be shared, further enriching our web
               development community
            </ListItem>
         </List>
      </Section>
   );
}
