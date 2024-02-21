import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { Link } from '@remix-run/react';

export function ShopSection() {
   return (
      <Container className="mt-24 sm:mt-32 lg:mt-40">
         <FadeIn>
            <div className="overflow-hidden pt-32">
               <div className="rounded-3xl bg-neutral-950">
                  <div className="px-4 sm:px-6 lg:px-8">
                     <div className="relative pb-16 pt-48 sm:pb-24">
                        <div>
                           <h2
                              id="sale-heading"
                              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                           >
                              Print on Demand
                              <br />
                              <strong className="text-spursPink">
                                 Wear the web!
                              </strong>
                           </h2>
                           <div className="mt-6 text-base">
                              <Link
                                 to="https://devsanantonio.printify.me/products"
                                 className="font-semibold text-white"
                              >
                                 Shop Now
                                 <span aria-hidden="true"> &rarr;</span>
                              </Link>
                           </div>
                        </div>

                        <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                           <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                              <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                 <div className="flex-shrink-0">
                                    <img
                                       className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                       src="https://res.cloudinary.com/jessebubble/image/upload/v1708540839/printify/Lifestyle_alkmqv.jpg"
                                       alt="devSA Terminal React Tee "
                                    />
                                 </div>

                                 <div className="mt-6 flex-shrink-0 sm:mt-0">
                                    <img
                                       className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                       src="https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Front_p196aj.jpg"
                                       alt="devSA Terminal Hugging Face Tee"
                                    />
                                 </div>
                              </div>
                              <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                 <div className="flex-shrink-0">
                                    <img
                                       className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                       src="https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_4_Front_1_avyzok.jpg"
                                       alt="devSA Terminal Logo Tee"
                                    />
                                 </div>

                                 <div className="mt-6 flex-shrink-0 sm:mt-0">
                                    <img
                                       className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                       src="https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_3_Context_g7z6bl.jpg"
                                       alt="devSA Terminal Logo Tee"
                                    />
                                 </div>
                              </div>
                              <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                                 <div className="flex-shrink-0">
                                    <img
                                       className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                       src="https://res.cloudinary.com/jessebubble/image/upload/v1708540840/printify/Person_1_szs1sg.png"
                                       alt="devSa Terminal Vite Tee"
                                    />
                                 </div>

                                 <div className="mt-6 flex-shrink-0 sm:mt-0">
                                    <img
                                       className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                                       src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                                       alt=""
                                    />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </FadeIn>
      </Container>
   );
}
