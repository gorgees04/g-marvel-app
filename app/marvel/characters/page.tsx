import Header from "@/app/ui/components/Header";
import Pagination from "@/app/ui/components/Pagination";
import Characters from "@/app/ui/components/characters/Characters";

const page = ({
  searchParams,
}: {
  searchParams: { query?: string; page: string };
}) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header title={"Characters"} />
      <Characters query={searchParams.query} page={searchParams.page} />
      <Pagination pagesLength={30} />
    </section>
  );
};

export default page;
