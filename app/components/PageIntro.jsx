import clsx from 'clsx';

import { Container } from './Container';
import { FadeIn } from './FadeIn';

export function PageIntro({ eyebrow, title, children, centered = false }) {
    return (
        <Container
            className={clsx(
                'mt-24 sm:mt-32 lg:mt-40'
            )}
        >
            <FadeIn>
                <h1>
                    <span className="font-display block text-base font-semibold text-neutral-950">
                        {eyebrow}
                    </span>
                    <span className="sr-only"> - </span>
                    <span
                        className={clsx(
                            'font-displayblock max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl'
                        )}
                    >
                        {title}
                    </span>
                </h1>
                <div
                    className={clsx(
                        'mt-6 max-w-3xl text-balance text-xl text-neutral-600',
                    )}
                >
                    {children}
                </div>
            </FadeIn>
        </Container>
    );
}
