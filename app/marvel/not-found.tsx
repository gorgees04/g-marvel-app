import Link from "next/link";
import groot from "@/app/ui/img/groot.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-[700px] flex flex-col justify-center items-center text-white text-lg">
      <p>No Found!!</p>
      <Image src={groot} alt="falcon image" width={300} height={0} />
      <Link href="/marvel" className="text-marvelRed">
        Return Home
      </Link>
    </div>
  );
}
