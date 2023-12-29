import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full h-screen ">
      <div className="w-full h-full flex flex-col justify-center items-center glassmorphism rounded-xl text-gold text-gold-shadow">
        <svg
          fill="currentColor"
          width="200px"
          height="200px"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.514 13c-.45 0-.688.54-.363.857l3.143 3.14-3.146 3.146c-.455.436.255 1.177.707.707L15 17.705l3.146 3.145c.452.47 1.162-.27.707-.707l-3.146-3.145 3.142-3.14c.324-.318.087-.858-.364-.858-.13.004-.253.058-.344.15L15 16.29l-3.142-3.14c-.09-.092-.214-.146-.344-.15zM2.5 8h25c.277 0 .5.223.5.5s-.223.5-.5.5h-25c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zM7 6.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zm-2 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zm-2 0a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5zM1.5 4C.678 4 0 4.678 0 5.5v19c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-19c0-.822-.678-1.5-1.5-1.5h-27zm0 1h27c.286 0 .5.214.5.5v19c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-19c0-.286.214-.5.5-.5z" />
        </svg>
        
        <h2 className="font-semibold text-lg">¡Ups! It seems there was a problem</h2>
        <p className="font-semibold text-base">We cannot find the route you ask us for</p>
        <p className="font-medium text-base">
          Come back to{" "}
          <Link href="/" className="font-semibold text-lg underline-offset-4 hover:underline">
            Home
          </Link>{" "}
        </p>
      </div>
    </main>
  );
}
