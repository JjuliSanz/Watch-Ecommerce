import Image from "next/image";
import Link from "next/link";

const Card = ({ url, model, desc, id, price }) => {
  return (
    <article className="w-[250px] h-[370px] flex flex-col rounded-xl border-[3px] border-gold glassmorphism shadow-gold-shadow">
      {/* Image */}
      <header className="pt-2 h-[50%] w-[90%] rounded-xl place-self-center">
        <Image
          src={url}
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center rounded-xl"
          alt={model}
        />
      </header>
      {/* Text */}
      <section className="flex flex-col text-start p-2 gap-2">
        {/* Title */}
        <h2 className="text-lg font-semibold card-title line-clamp-1">
          {model}
        </h2>
        {/* Description */}
        <p className="text-sm line-clamp-3 text-gold text-gold-shadow">{desc}</p>
        {/* Price */}
        <h4 className="text-sm font-medium text-gold text-gold-shadow">
          ${price.toLocaleString()} USD
        </h4>
      </section>
      {/* Button */}
      <footer className="h-[15%] flex justify-center items-center">
        <div className="w-fit border border-gold glassmorphism hover:scale-[0.95] hover:shadow-gold-shadow rounded-lg">
          <Link
            href={`./watches/${id}`}
            className="button text-xl font-regular px-2"
          >
            More Info
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default Card;
