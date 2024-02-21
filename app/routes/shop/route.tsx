/* 
import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { PageIntro } from '~/components/PageIntro';
import { Container } from '~/components/Container';
import { FadeIn, FadeInStagger } from '~/components/FadeIn';
import { getProducts } from './queries';

export async function loader({ request }: LoaderFunctionArgs) {
    const data = await getProducts();

    return json(data);
}

function AllProducts() {
    const data = useLoaderData<typeof loader>();

    return (
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <Container className="">
                <h2 className="text-2xl font-bold">All Products</h2>
                <FadeInStagger>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {data.map((data: any) => (
                            <div className="" key={data.title}>
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                                >
                                    <div className="lg:col-span-3">
                                        <li>
                                            <FadeIn>
                                                <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                                    <Link
                                                        to={`/shop/${data.id}`}
                                                    >
                                                        <img
                                                            src="https://cdn.discordapp.com/attachments/951197655021797436/1209628258300338217/justinkosch_Futuristic_poster_advertisement_for_a_cognitive_tec_748e789a-11b5-41cd-bee2-98d8fe7ddba2.png?ex=65e79d1a&is=65d5281a&hm=447cf828fdc7f1b6c251732975c4f6597f21061905e9aeacc3a2eacdf05ebce1&"
                                                            alt={data.title}
                                                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                                {data.title}
                                                            </p>
                                                            <p className="mt-2 text-sm text-white">
                                                                $19.99
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </FadeIn>
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        ))}
                    </div>
                </FadeInStagger>
            </Container>
        </div>
    );
}

export default function Index() {
    return (
        <>
            <PageIntro
                eyebrow="The devSA Shop"
                title="Welcome to the devSA Shop"
                centered
            >
                <p>
                    Our goal is to provide high-quality, custom apparel and
                    merchandise for the devSA community. We strive to offer a
                    variety of products that are both stylish and comfortable
                    and perfect for any occasion.
                </p>
            </PageIntro>

            <AllProducts />
        </>
    );
}
 */
