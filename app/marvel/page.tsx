import Image from "next/image";
import marvelUni from "@/app/ui/img/marvel-uni-1.jpg";
import marveFounder from "@/app/ui/img/marvel-founder.png";
import marvelChill from "@/app/ui/img/deepdish-marvel.jpg";

const page = () => {
  return (
    <section className="text-offWhite flex flex-col items-center m-6 sm:m-10">
      <div className="text-4xl m-10 text-center text-marvelRed">
        Marvel Universe
      </div>
      <div className="flex flex-col xl:flex-row items-center my-5 lg:my-10">
        <Image
          src={marvelUni}
          alt="marvel universe"
          width={400}
          height={300}
          priority={true}
          className="shadow-lg shadow-black rounded w-auto h-auto md:w-[500px]"
        />
        <p className="my-5 lg:mx-5 lg:w-[600px] text-center md:text-lg">
          The Marvel Universe is a fictional shared universe where the stories
          in most American comic book titles and other media published by Marvel
          Comics take place. Super-teams such as the Avengers, the X-Men, the
          Fantastic Four, the Guardians of the Galaxy, and many Marvel
          superheroes live in this universe, including characters such as
          Spider-Man, Captain America, Iron Man, Thor, the Hulk, Ant-Man, the
          Wasp, Wolverine, Black Panther, Doctor Strange, Daredevil, and Captain
          Marvel, Blade, Black Widow, Hawkeye, among numerous others.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-center my-5 lg:my-10">
        <p className="my-5 lg:mx-5 lg:w-[600px] text-center md:text-lg">
          The Marvel Universe is further depicted as existing within a
          "multiverse" consisting of thousands of separate universes, all of
          which are the creations of Marvel Comics and all of which are, in a
          sense, "Marvel universes". In this context, "Marvel Universe" is taken
          to refer to the mainstream Marvel continuity, which is known as
          Earth-616 or currently as Prime Earth.
        </p>
        <Image
          src={marvelChill}
          alt="marvel universe"
          width={400}
          height={0}
          priority={true}
          className="shadow-lg shadow-black rounded md:w-[500px]"
        />
      </div>

      <div className="flex flex-col xl:flex-row items-center my-5 lg:my-10">
        <Image
          src={marveFounder}
          alt="marvel universe"
          width={400}
          height={0}
          priority={true}
          className="shadow-lg shadow-black rounded md:w-[500px]"
        />
        <p className="my-5 lg:mx-5 lg:w-[600px] text-center md:text-lg">
          Founded in 1939 by Martin Goodman under the name Timely Publications,
          the company began by publishing a mix of superhero, crime, horror, and
          science fiction comics. However, it wasn't until the early 1960s that
          Marvel Comics truly came into its own, ushering in what would be known
          as the "Marvel Age of Comics." Spearheaded by visionaries like Stan
          Lee, Jack Kirby, Steve Ditko, and others, Marvel revolutionized the
          comic book landscape by creating flawed, relatable superheroes with
          real-world issues.
        </p>
      </div>
    </section>
  );
};

export default page;
