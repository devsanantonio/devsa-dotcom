import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { Border } from '~/components/Border';
import logoAWS from '~/components/images/logos/aws.svg';
import logoOpenAI from '~/components/images/logos/openai.svg';
import logoDocker from '~/components/images/logos/docker.svg';
import logoSwiftUI from '~/components/images/logos/swiftui.svg';
import logoReact from '~/components/images/logos/react.svg';
import logoTailwind from '~/components/images/logos/tailwind.svg';
import logoTypescript from '~/components/images/logos/typescript.svg';
import logoWordpress from '~/components/images/logos/wordpress.svg';
import logoSQLite from '~/components/images/logos/sqlite.svg';
import logoFigma from '~/components/images/logos/figma.svg';
import logoGithub from '~/components/images/logos/github.svg';
import logoIllustrator from '~/components/images/logos/illustrator.svg';

const tools = [
   ['AWS', logoAWS],
   ['OpenAI', logoOpenAI],
   ['React', logoReact],
   ['Docker', logoDocker],
   ['Github', logoGithub],
   ['Figma', logoFigma],
   ['SwiftUI', logoSwiftUI],
   ['Tailwind', logoTailwind],
   ['Typescript', logoTypescript],
   ['Wordpress', logoWordpress],
   ['SQLite', logoSQLite],
   ['Illustrator', logoIllustrator],
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
