import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-[400px] rounded-t-lg">
        <Image src={"/image/onda_abertura.png"} alt="Logo" width={450} height={400} className="rounded-t-lg"/>
      </div>
      
      <div className="w-full h-[380px] rounded-b-lg flex items-center justify-center">
        <Image src={"/image/logo.png"} alt="" width={300} height={300} className="-translate-y-[140px]"/>
      </div>

      
    </>
  );
}
