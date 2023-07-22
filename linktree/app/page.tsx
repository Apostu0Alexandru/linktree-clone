import Image from "next/image";
import data from "../data.json"

function LinkCard({ href, title, image }: { href: string; title: string; image?: string }) {
  return (
    <a href={href} className="flex items-center p-4 rounded-sm hover:scale-110 transition-all bg-white mb-3">
      <div className="flex flex-col">
        <h2 className="font-semibold ">{title}</h2>
      </div>
    </a>
  )

}

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mx-auto justify-center mt-16 ">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  )
}
