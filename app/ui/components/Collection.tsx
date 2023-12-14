import { CollectionType } from "@/app/lib/definitions";
import Card from "./Card";
import Link from "next/link";

const Collection = ({
  title,
  category,
}: {
  title: string;
  category: CollectionType[] | [];
}) => {
  if (category.length > 0) {
    return (
      <div className="m-10">
        <Link href={`/marvel/${title.toLowerCase()}`}>
          <h1 className="text-4xl font-bold text-marvelRed m-2">{title}</h1>
        </Link>
        <div className="overflow-x-auto flex items-center justify-start shadow-lg shadow-black">
          {category.map((category: CollectionType) => {
            // Checking the namining of card weather in api there is name / title
            let header;
            if (category.name) {
              header = category.name;
            } else if (category.fullName) {
              header = category.fullName;
            } else {
              header = category.title;
            }
            return (
              <div className="w-[180px]" key={category.id}>
                <Card
                  category={title.toLocaleLowerCase()}
                  name={header}
                  img={category.thumbnail}
                  id={category.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Collection;
