import Pagination from "@/app/ui/components/Pagination";
import Header from "@/app/ui/components/Header";
import Events from "@/app/ui/components/events/Events";

export default function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Events"} />
      <Events query={searchParams.query} page={searchParams.page} />
      <Pagination pagesLength={30} />
    </section>
  );
}
