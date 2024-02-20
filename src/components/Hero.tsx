import Image from "next/image";
import profileImage from "../../public/images/profile.png";
import Link from "next/link";

export default function Hero(props) {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="SW 사진"
        width={180}
        height={180}
        priority
      />

      <h2 className="text-2xl font-bold mt-2">{"Hi, I'm SW"}</h2>
      <p className="text-xl font-semibold">Frontend Engineer</p>
      <Link href="/contact">
        <button className="bg-blue-600 font-bold text-white rounded-xl py-1 px-3 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
