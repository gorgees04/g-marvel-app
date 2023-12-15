import { getImageUrl } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
// typescript definitions
import { Img } from "@/app/lib/definitions";

const Card = ({
  category,
  name,
  img,
  id,
}: {
  category: string | undefined;
  name: string;
  img: Img;
  id: string;
}) => {
  return (
    <Link href={`/marvel/${category}/${id}`} className="flex">
      <div className="bg-offWhite text-black flex flex-col rounded overflow-hidden m-3 shadow-xl  shadow-black w-[150px] md:w-[200px] transition duration-500 hover:bg-marvelRed hover:text-white hover:shadow-marvelRed">
        <Image
          src={getImageUrl(img)}
          alt={name}
          width={200}
          height={300}
          className="w-auto h-auto md:w-[200px] overflow-hidden border-b-8 border-b-marvelRed shadow-inner shadow-black"
          priority={true}
        />
        <p
          className=" text-sm font-extrabold p-1 m-1 text-center truncate"
          title={name}
        >
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Card;
