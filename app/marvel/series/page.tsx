import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";
import Series from "@/app/ui/components/series/Series";

export default function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Series"} />
      <Series query={searchParams.query} page={searchParams.page} />
      <Pagination pagesLength={30} />
    </section>
  );
}
