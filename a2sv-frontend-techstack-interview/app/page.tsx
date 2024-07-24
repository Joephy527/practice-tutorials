import CardList from "@/components/CardList";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="py-24 px-26 min-h-screen">
      <Search />

      <CardList />
    </main>
  );
}
