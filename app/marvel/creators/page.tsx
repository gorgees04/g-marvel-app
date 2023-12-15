import Pagination from "@/app/ui/components/Pagination";
import Creators from "@/app/ui/components/creators/Creators";

export default function Page({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) {
  return (
    <section className="flex flex-col justify-center items-center">
      <Creators query={searchParams.query} page={searchParams.page} />
      <Pagination pagesLength={30} />
    </section>
  );
}
