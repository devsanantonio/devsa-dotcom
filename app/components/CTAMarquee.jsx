import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function MarqueeSection() {
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
        <>
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn>
                    <div className="marquee -my-4 flex justify-center gap-5 py-4 sm:gap-8">
                        {imageArray.map((image, index) => (
                            <div
                                key={index}
                                className="marquee-item relative h-64 w-64 flex-none sm:h-80 sm:w-80"
                            >
                                <div className="absolute inset-0 rounded-xl" />
                                <img
                                    src={image.href}
                                    alt="midjourney collection"
                                    className={`relative h-full w-full object-contain ${rotations[index]}`}
                                />
                            </div>
                        ))}
                        {imageArray.map((image, index) => (
                            <div
                                key={index}
                                className="marquee-item relative h-64 w-64 flex-none sm:h-80 sm:w-80"
                            >
                                <div className="absolute inset-0 rounded-xl" />
                                <img
                                    src={image.href}
                                    alt="midjourney collection"
                                    className={`relative h-full w-full object-contain ${rotations[index]}`}
                                />
                            </div>
                        ))}
                    </div>
                </FadeIn>

                <style>
                    {`
                    .marquee {
                        animation: marquee 30s linear infinite;
                    }
                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                `}
                </style>
            </Container>
        </>
    );
}

const imageArray = [
    {
        name: 'huggingface',
        href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708041429/huggingface_hufljq.png',
    },
    {
        name: 'spring',
        href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708241255/spring_o7tta0.png',
    },
    {
        name: 'vite',
        href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708122486/vite_xbzdby.png',
    },
    {
        name: 'remix',
        href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708122485/remix_q0dzq3.png',
    },
    {
        name: 'deno',
        href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708122484/deno_xxhibx.png',
    },
    {
        name: 'blazor',
        href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708241255/blazor_gwq6t6.png',
    },
    {
        name: 'react',
        href: 'https://res.cloudinary.com/jessebubble/image/upload/v1708241255/react_zh7tzb.png',
    },
];
