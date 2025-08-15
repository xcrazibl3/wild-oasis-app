import CabinCard from "@/components/CabinCard";
import { Metadata } from "next";
import Cabin from "@/interfaces/cabin";

export const metadata: Metadata = {
  title: "Cabins",
  description: "Explore our unique cabins",
};

export default function Page() {
  // CHANGE
  const cabins: Cabin[] = [
    {
      id: "1",
      name: "Mountain Retreat",
      maxCapacity: 4,
      regularPrice: 200,
      discount: 20,
      image: "/images/cabin1.jpg",
    },
    {
      id: "2",
      name: "Mountain Retreat",
      maxCapacity: 4,
      regularPrice: 200,
      discount: 20,
      image: "/images/cabin1.jpg",
    },
    {
      id: " 3",
      name: "Mountain Retreat",
      maxCapacity: 4,
      regularPrice: 200,
      discount: 20,
      image: "/images/cabin1.jpg",
    },
  ];

  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        Our Luxury Cabins
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature &apos s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {cabins.length > 0 && (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
