import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import Swiper styles
import CardSlider from "@/components/shared/card-slider";
import MotionWrapper from "@/components/shared/motion-wrapper";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import "swiper/css";
import { CircleCheck } from "lucide-react";
import { Nunito } from "next/font/google";
import Link from "next/link";

const content = [
  {
    title: "Global Reach",
    description:
      "By listing your store online with us, you instantly gain access to a global audience. Your products are no longer confined to local customers; instead, you can attract buyers from all over the world, expanding your market reach exponentially.",
    content: (
      <Image
        src={
          "https://images.unsplash.com/photo-1616077167599-cad3639f9cbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHNhbGV8ZW58MHx8MHx8fDA%3D"
        }
        alt="Global Reach"
        fill
        priority
      />
    ),
  },
  {
    title: "24/7 Accessibility",
    description:
      " With an online store, your business is open 24/7, allowing customers to browse and make purchases at their convenience. This flexibility removes the limitations of traditional brick-and-mortar stores' operating hours, enabling you to generate sales even while you sleep.",
    content: (
      <Image
        src={
          "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3BlbnxlbnwwfHwwfHx8Mg%3D%3D"
        }
        alt="Open 24/7"
        fill
        priority
      />
    ),
  },
  {
    title: "Easy Management",
    description:
      "Sankyfy offers user-friendly interfaces and intuitive tools that make managing your online store a breeze. From adding new products to processing orders and tracking inventory, everything can be efficiently handled from a single platform, streamlining your operations and saving you time.",
    content: (
      <Image
        src={
          "https://images.unsplash.com/photo-1485217988980-11786ced9454?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG9mZmljZXxlbnwwfHwwfHx8Mg%3D%3DD"
        }
        alt="Easy Management"
        fill
        priority
      />
    ),
  },
  {
    title: "Marketing Opportunities",
    description:
      " Online platforms like Shopify provide built-in marketing features and integrations that enable you to promote your products effectively. From email campaigns and social media advertising to SEO optimization, you have access to a variety of tools to attract and engage customers, helping you grow your business.",
    content: (
      <Image
        src={
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG1hcmtldGluZ3xlbnwwfHwwfHx8Mg%3D%3D"
        }
        alt="Marketing Opportunities"
        fill
        priority
        className="object-cover"
      />
    ),
  },
];

const products = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum voluptates culpa iure officiis rerum eius consectetur adipisicing elit.Ipsum voluptates culpa",
    price: 2800.0,
    tags: ["lorem", "ipsum", "dolor"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum voluptates culpa iure officiis rerum eius consectetur adipisicing elit.Ipsum voluptates culpa",
    price: 2800.0,
    tags: ["lorem", "ipsum", "dolor"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum voluptates culpa iure officiis rerum eius consectetur adipisicing elit.Ipsum voluptates culpa",
    price: 2800.0,
    tags: ["lorem", "ipsum", "dolor"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum voluptates culpa iure officiis rerum eius consectetur adipisicing elit.Ipsum voluptates culpa",
    price: 2800.0,
    tags: ["lorem", "ipsum", "dolor"],
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Lorem ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ipsum voluptates culpa iure officiis rerum eius consectetur adipisicing elit.Ipsum voluptates culpa",
    price: 2800.0,
    tags: ["lorem", "ipsum", "dolor"],
  },
];
const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen w-full mt-2 overflow-x-hidden">
      <MotionWrapper className="grid lg:grid-cols-2 gap-2 pb-8">
        <>
          <div className="relative w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] p-4 rounded-lg group overflow-hidden cursor-pointer">
            <div className="flex items-center gap-2 relative z-10">
              <Button variant="outline">New</Button>
              <Button>Upcoming</Button>
            </div>
            <Image
              src={
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              fill
              alt="Banner Image"
              priority
            />
            <div className="absolute bg-primary mix-blend-overlay left-0 top-0 w-full h-0 transition-all duration-300 ease-linear group-hover:h-full" />
          </div>
          <div className="relative w-full h-[60vh] sm:h-[80vh] rounded-lg overflow-hidden cursor-pointer space-y-2">
            <div className="h-full w-full rounded-lg flex flex-col gap-2">
              <div className="w-full h-1/2 grid grid-cols-2 gap-2">
                <div className="w-full h-full rounded-lg relative group">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                    }
                    alt="Product"
                    fill
                    priority
                    className="rounded-lg"
                  />
                  <div className="absolute bg-primary mix-blend-overlay left-0 top-0 w-full h-0 transition-all duration-300 ease-linear group-hover:h-full" />
                </div>
                <div className="w-full h-full rounded-lg relative group">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                    }
                    alt="Product"
                    fill
                    priority
                    className="rounded-lg"
                  />
                  <div className="absolute bg-primary mix-blend-overlay left-0 top-0 w-full h-0 transition-all duration-300 ease-linear group-hover:h-full" />
                </div>
              </div>
              <div className="h-1/2 w-full rounded-lg relative group">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1610395219791-21b0353e43cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2R1Y3R8ZW58MHwwfDB8fHww"
                  }
                  alt="Product"
                  fill
                  priority
                  className="rounded-lg"
                />
                <div className="absolute bg-primary mix-blend-overlay left-0 top-0 w-full h-0 transition-all duration-300 ease-linear group-hover:h-full" />
              </div>
            </div>
          </div>
        </>
      </MotionWrapper>

      {/* Clothing & Apparel Section */}
      <MotionWrapper className="grid lg:grid-cols-3 gap-2 mt-8 pb-8">
        <>
          <div className="h-[400px] col-span-1 rounded-lg relative group overflow-hidden cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFwcGFyZWx8ZW58MHwxfDB8fHwy"
              }
              alt="Apparel"
              fill
              className="rounded-lg object-center !z-[1]"
            />
            <div className="absolute z-[4] inset-0 flex flex-col items-center justify-center transform translate-y-32 opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-linear group-hover:translate-y-0">
              <div className="p-4 border-2 border-white rounded-md w-fit bg-primary/20">
                <h2 className="text-2xl font-semibold text-white">
                  Apparel Stores
                </h2>
              </div>
              <h4 className="capitalize text-3xl lg:text-4xl w-4/5 font-semibold text-white text-center">
                Nearby you <br /> explore for best discounts
              </h4>
            </div>
            <div className="absolute inset-0 group-hover:bg-black/80 z-[3] transition-color duration-300" />
          </div>
          <div className="h-[400px] w-full lg:col-span-2 rounded-lg relative group overflow-hidden cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Apparel"
              fill
              className="rounded-lg object-center !z-[1]"
            />
            <div className="absolute z-[4] inset-0 flex flex-col items-center justify-center transform -translate-y-32 opacity-0 group-hover:opacity-100 transition-transform duration-300 ease-linear group-hover:translate-y-0">
              <div className="p-4 border-2 border-white rounded-md w-fit bg-primary/20">
                <h2 className="text-2xl font-semibold text-white">View Now</h2>
              </div>
              <h4 className="capitalize text-3xl lg:text-4xl w-4/5 font-semibold text-white text-center">
                Latest fashion <br /> follow trends like never before
              </h4>
            </div>
            <div className="absolute inset-0 group-hover:bg-black/80 z-[3] transition-color duration-300" />
          </div>
        </>
      </MotionWrapper>

      {/* Partners Section */}
      <section className="container mx-auto px-[1rem] sm:px-[2rem] pb-8">
        <div className="flex items-center space-x-16 group">
          <div className="flex items-center space-x-16 animate-loop-scroll group-hover:paused select-none">
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              One Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Two Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Three Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Four Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Five Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Six Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Seven Logo
            </span>
          </div>
          <div
            className="flex items-center space-x-16 animate-loop-scroll group-hover:paused select-none"
            aria-hidden
          >
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              One Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Two Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Three Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Four Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Five Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Six Logo
            </span>
            <span className="text-[8vw] font-bold w-fit text-nowrap text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Seven Logo
            </span>
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="w-full bg-secondary pb-8 flex items-center gap-4 justify-between p-4 overflow-hidden">
        <CardSlider data={products} />
      </section>

      {/* Banner Seller Joining */}
      <section className="container mx-auto px-[1rem] sm:px-[2rem] pb-8 mt-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl capitalize font-bold text-center">
          Deciding to be a Seller?
        </h2>
        <h4 className="text-xl sm:text-2xl font-semibold text-center">
          See what we&apos;ve to offer!
        </h4>
        <StickyScroll content={content} />
      </section>

      <hr />

      {/* Footer */}
      <footer className="container mx-auto px-[1rem] sm:px-[2rem] pb-8 mt-8">
        <div className="w-full grid lg:grid-cols-2 gap-4">
          <div className="col-span-1 py-4">
            <h3
              className={`${nunito.className} text-lg md:text-2xl font-extrabold tracking-tight text-[#FB005B]`}
            >
              sankyfy.com
            </h3>
            <h5 className="text-base text-muted-foreground font-semibold">
              Make your online presence while we handle the work for you.
            </h5>
          </div>

          <div className="col-span-1 py-4 grid grid-cols-2 sm:grid-cols-4">
            <ul>
              <li className="text-lg font-semibold mb-4">Products</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Dashboard
                </Link>
              </li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  RoadMaps
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-lg font-semibold mb-4">Company</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Careers
                </Link>
              </li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  About us
                </Link>
              </li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-lg font-semibold mb-4">Sellers</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  For experts
                </Link>
              </li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  For startups
                </Link>
              </li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  For Corporates
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-lg font-semibold mb-4">Resources</li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Support
                </Link>
              </li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Help center
                </Link>
              </li>
              <li className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <Link
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-500"
                >
                  Terms & cond.
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-2 gap-4">
          <p className="text-sm font-medium text-muted-foreground">
            Copyright &copy;2024 sankyfy.com. All rights reserved.
          </p>
          <div className="w-full flex flex-row items-center justify-start gap-4">
            <Image
              src="/instagram.svg"
              alt="Instagram Link"
              height={100}
              width={100}
              className="h-6 w-6 object-contain cursor-pointer"
            />
            <Image
              src="/facebook.svg"
              alt="Facebook Link"
              height={100}
              width={100}
              className="h-6 w-6 object-contain cursor-pointer"
            />
            <Image
              src="/twitterx.svg"
              alt="Twitter X Link"
              height={100}
              width={100}
              className="h-6 w-6 object-contain cursor-pointer"
            />
            <Image
              src="/whatsapp.svg"
              alt="Whatsapp Link"
              height={100}
              width={100}
              className="h-6 w-6 object-contain cursor-pointer"
            />
            <Image
              src="/snapchat.svg"
              alt="Snapchat Link"
              height={100}
              width={100}
              className="h-6 w-6 object-contain cursor-pointer"
            />
          </div>
        </div>
        <hr className="my-4" />
        <p className="w-full text-sm font-medium text-center text-gray-800 dark:text-gray-500">
          Designed & Develped by{" "}
          <Link href="#" className="hover:text-blue-700 dark:text-blue-500">
            Shivam Kumar Singh
          </Link>
        </p>
      </footer>
    </main>
  );
}
