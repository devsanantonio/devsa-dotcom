import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Link } from '@remix-run/react';
import qrCode from '~/components/images/qr-code.svg';

function QrCodeBorder(props) {
    return (
        <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
            <path
                d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

export function SponsorMask() {
    return (
        <div className="mt-24 sm:mt-32">
            <Container>
                <FadeIn>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative isolate overflow-hidden rounded-3xl bg-neutral-950 px-6 py-24 text-center shadow-2xl sm:px-16">
                            {GradientMask()}
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                                There is a significant gap in the field of software
                                development. We are committed to bridging this
                                gap by establishing a dynamic hub that fosters an environment 
                                of innovative solutions for users
                            </p>
                            <div className="mx-auto mt-10 flex max-w-xl items-center justify-center">
                                <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                                    <QrCodeBorder className="absolute inset-0 h-full w-full stroke-white" />
                                    <img
                                        src={qrCode}
                                        alt="Stripe QR code"
                                        className="h-20 w-20 rounded-2xl bg-white p-2"
                                    />
                                </div>
                                <div className="ml-8 lg:w-64">
                                    <p className="text-base font-semibold text-white">
                                        <Link to="https://donate.stripe.com/bIY7sy6FecLJeTm5kk">
                                            <span className="absolute inset-0 sm:rounded-2xl" />
                                            Click QR Code to Donate
                                        </Link>
                                    </p>
                                    <p className="mt-1 text-sm text-neutral-300 text-balance">
                                        As we venture into hosting official
                                        devSA events, we are actively seeking
                                        two key elements: sponsors and
                                        collaborative organizations
                                    </p>
                                </div>
                            </div>
                            <svg
                                viewBox="0 0 1024 1024"
                                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                                aria-hidden="true"
                            >
                                <circle
                                    cx={512}
                                    cy={512}
                                    r={512}
                                    fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                                    fillOpacity="0.7"
                                />
                                <defs>
                                    <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                        <stop stopColor="#EEEEEE" />
                                        <stop offset={1} stopColor="#E935C1" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    );
}

function GradientMask() {
    return (
        <Container className="">
            <FadeIn>
                <div className="noise grid grid-cols-1 place-items-center">
                    <h3 className="text-7xl font-black sm:text-9xl">devSA</h3>
                </div>

                <style>
                    {`
                        /* this is def a hack */
                        @layer demo {
                            .noise {
                                --lines: 0.0003px;
                            
                                /*
                                repeating sub pixel radial hard stop lines
                                creates thousands, so small they distort
                                use this distortion as a mask
                                the hard stops are basically on/off lines
                                */

                                mask: repeating-radial-gradient(
                                    circle at center,
                                    #000,
                                    var(--lines),
                                    #000,
                                    0, /* transition hints make code easier to manage */
                                    #0000,
                                    calc(var(--lines) * 2),
                                    #0000 0 /* trailing 0 is part of the hard stop logic */
                                );
                            }
                        }

                        @layer demo.support {
                            .noise {
                                --space:;
                                @supports (background: linear-gradient(in oklch, #000, #000)) {
                                --space: in oklch;
                                }
                                
                                display: grid;
                                gap: 5vmin;
                            
                                /* shared gradient across headlines "fixed" */
                                background: linear-gradient(to bottom right var(--space), deeppink, blue) fixed;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                            
                                @media (prefers-color-scheme: light) {
                                    background: linear-gradient(
                                        to bottom var(--space), 
                                        black, neutral
                                    ) fixed;
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                }
                            }
                        }
                    `}
                </style>
            </FadeIn>
        </Container>
    );
}
