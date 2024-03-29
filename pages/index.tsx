import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import SmallCard from "../components/SmallCard/SmallCard";
import MediumCard from "../components/MediumCard/MediumCard";
import LargeCard from "../components/LargeCard/LargeCard";
import Footer from "../components/Footer/Footer";
import React from "react";
import { Props } from "../public/types/typings.Home";

function Home({ exploreData, cardsData }: Props) {
  return (
    <div className="">
      <Head>
        <title>Tino's Homestay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
      <Header />
      {/* BANNER */}
      <Banner />
      {/* Content */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small Card */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        {/* Medium Card */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardsData.map((item: any) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        {/* Large Card */}
        <section>
          <div>
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="The Greatest Outdoors"
              description="Wishlists curated by Homestay"
              buttonText="Get Inspired"
            />
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return { props: { exploreData, cardsData } };
}
