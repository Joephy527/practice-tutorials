import CardList from "@/components/CardList";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="py-24 sm:px-26 px-5 min-h-screen">
      <Search />

      <CardList />
    </main>
  );
}
