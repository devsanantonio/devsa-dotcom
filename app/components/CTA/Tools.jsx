import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { Border } from '~/app/components/Border';
import {
   awsSvg,
   openAISvg,
   dockerSvg,
   githubSvg,
   figmaSvg,
   swiftUISvg,
   tailwindSvg,
   typescriptSvg,
   wordpressSvg,
   sqliteSvg,
   illustratorSvg,
} from '~/app/components/images/Logos';

const tools = [
   ['AWS', awsSvg],
   ['OpenAI', openAISvg],
   ['React', reactSvg],
   ['Docker', dockerSvg],
   ['Github', githubSvg],
   ['Figma', figmaSvg],
   ['SwiftUI', swiftUISvg],
   ['Tailwind', tailwindSvg],
   ['Typescript', typescriptSvg],
   ['Wordpress', wordpressSvg],
   ['SQLite', sqliteSvg],
   ['Illustrator', illustratorSvg],
];

export function ToolSection() {
   return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
         <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
               Leveraging the power of our tech community
            </h2>
         </FadeIn>
         <FadeInStagger className="mt-10" faster>
            <Border as={FadeIn} />
            <ul className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
               {tools.map(([client, logo], index) => (
                  <li key={index} className="group">
                     <FadeIn className="overflow-hidden">
                        <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                           <img
                              src={logo}
                              alt={client}
                              className="w-16 md:w-20"
                           />
                        </Border>
                     </FadeIn>
                  </li>
               ))}
            </ul>
         </FadeInStagger>
      </Container>
   );
}
