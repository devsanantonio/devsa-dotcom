import { Link } from '@remix-run/react';
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Logo } from '~/components/Logo';
import { SocialMedia } from '~/components/SocialMedia';

export function Footer() {
    return (
        <Container as="footer" className="mt-24 w-full">
            <FadeIn>
                <div className="mb-20 flex flex-col items-center justify-between gap-6 border-t border-neutral-950/10 pt-12 md:flex-row md:gap-0">
                    <Link to="/" aria-label="Home">
                        <Logo className="h-20 w-auto md:h-24" />
                    </Link>
                    <SocialMedia />
                </div>
            </FadeIn>
        </Container>
    );
}
