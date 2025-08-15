import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cabins",
  description: "Explore our unique cabins",
};

export default async function Page() {
  return (
    <div>
      <h1>Cabins Page</h1>
    </div>
  );
}
