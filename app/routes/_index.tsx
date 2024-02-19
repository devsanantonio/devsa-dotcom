import type { MetaFunction } from '@remix-run/node';
import { PageIntro } from '~/components/PageIntro';
import { HeroSection } from '~/components/CTAHero';
import { GitHubSection } from '~/components/CTAGitHub';
import { DiscordSection } from '~/components/CTADiscord';
import { MarqueeSection } from '~/components/CTAMarquee';
import { AnimatedText } from '~/components/AnimatedText';
import { CommunitySection } from '~/components/CTACommunity';
import { SponsorMask } from '~/components/CTASponsorMask';

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
            <PageIntro
                eyebrow="Military City, USA"
                title={<AnimatedText />}
            >
                <p>
                    In our city, there's a significant gap in the field of software development.{' '}
                    <strong>devSA</strong> is dedicated to bridging this gap by establishing a dynamic hub 
                    that fosters an environment of innovative solutions for users, 
                    transcending boundaries of platform and technology
                </p>
            </PageIntro>

            <MarqueeSection />
            <HeroSection />
            <CommunitySection />
            <DiscordSection />
            <GitHubSection />
            <SponsorMask />
        </>
    );
}
