import CabinCard from "@/components/CabinCard";
import Cabin from "@/interfaces/cabin";
import { getCabins } from "@/lib/data-service";
// import { connection } from "next/server";

export default async function CabinList() {
  // await connection();
  const cabins: Cabin[] = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
