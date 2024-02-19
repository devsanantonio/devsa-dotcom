import { Container } from '~/components/Container';
import { GrayscaleTransitionImage } from '~/components/GrayscaleTransitionImage';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';

export default function DevSA() {
    return (
        <>
            <PageIntro
                eyebrow="The devSA Experience"
                title="Deeply rooted in collaboration"
                centered
            >
                <p>
                    Our goal is to partner with existing organizations in the
                    city, addressing their technology challenges. As web
                    developers and software engineers, we strive to understand
                    how we can aid in resolving these issues, and then
                    collaboratively construct solutions that are both efficient
                    and enduring
                </p>
            </PageIntro>
            <FadeIn>
                <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
                    <Container className="">
                        {events.map((event) => (
                            <div
                                key={event.index}
                                className="mx-auto max-w-5xl"
                            >
                                <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                        <dt className="font-semibold">Org</dt>
                                        <dd>{event.org}</dd>
                                    </div>
                                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                        <dt className="font-semibold">Year</dt>
                                        <dd>
                                            <time>
                                                {new Date().getFullYear()}
                                            </time>
                                        </dd>
                                    </div>
                                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0">
                                        <dt className="font-semibold">Topic</dt>
                                        <dd>{event.topic}</dd>
                                    </div>
                                </dl>
                                <div className="border-y border-neutral-200 bg-neutral-100">
                                    <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                                        <GrayscaleTransitionImage
                                            src={event.image}
                                            alt="devSA collaboration event"
                                            quality={90}
                                            className="w-full"
                                            sizes="(min-width: 1216px) 76rem, 100vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Container>
                </div>
            </FadeIn>
        </>
    );
}

const events = [
    {
        index: 1,
        org: 'disABILITYsa',
        topic: 'W3C WAI resources to make your websites, and applications more accessible',
        image: 'https://res.cloudinary.com/jessebubble/image/upload/v1708287141/disability2_vwjs4u.png',
    },
    {
        index: 2,
        org: 'SA Creatives',
        topic: 'Deploy your website with Framer Motion. Fast out of the box and automatically optimized for search engines',
        image: 'https://res.cloudinary.com/jessebubble/image/upload/v1708288877/music_vwfrs4.jpg',
    },
];
