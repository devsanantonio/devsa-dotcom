import { Container } from "../Container";
import { FadeIn } from "../FadeIn";
import { SectionIntro } from "../SectionIntro";

export function CalendarSection() {

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="Experience it for yourself"
                title="Shaping the identity of tech in San Antonio"
            >
                <p>
                    The landscape of in-person meetups in San Antonio is expanding rapidly, and it's exciting to see the emergence of tech community spaces.
                    But don't just take our word for it. Come and experience the vibrant tech community in San Antonio for yourself!
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <FadeIn>
                    <div className="">
                        <iframe
                            src="https://lu.ma/embed/calendar/cal-Jg0KUhNjt4lLR55/events?compact=true"
                            frameborder="0"
                            style={{border: "1px solid #bfcbda88", borderRadius: "24px", width: "100%", height: "600px"}}
                            allowfullscreen=""
                            aria-hidden="false"
                            tabindex="0"
                        ></iframe>
                    </div>
                </FadeIn>
            </Container>
        </div>
    )
}
    