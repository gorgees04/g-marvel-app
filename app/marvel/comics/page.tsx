import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";
import Comics from "@/app/ui/components/comics/Comics";

export default function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Comics"} />
      <Comics query={searchParams.query} page={searchParams.page} />
      <Pagination pagesLength={30} />
    </section>
  );
}
