import { footer } from "@/app/data/footer";

export default function FooterBrand() {
  return (
    <div className="max-w-md">
      <a
        href="#"
        className="text-2xl font-bold tracking-tight text-white"
      >
        {footer.brand}
      </a>

      <p className="mt-5 leading-7 text-zinc-400">
        {footer.description}
      </p>
    </div>
  );
}