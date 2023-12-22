import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center mt-9 min-h-screen">
      <Image src="/img/error.svg" height={50} width={50} alt="notFound" />
      <h2 className="font-semibold">¡Ups! It seems there was a problem</h2>
      <p class="">We cannot find the route you ask us for</p>
      <p>
        Come back to{" "}
        <Link href="/" className="text-green">
          Home
        </Link>{" "}
      </p>
    </main>
  );
}
