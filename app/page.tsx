import Image from "next/image";

export default function Home() { 
  return (
    <div className="w-full bg-[var(--Light-gray)] min-h-screen flex justify-center items-center">
      <div className=" max-w-[400px] bg-[var(--White)] max-h-[600px] flex flex-col justify-center items-start rounded-2xl p-4">
        <div className="w-full border-8 border-[#3785ff] rounded-xl">
          <Image 
            src="/image-qr-code.png"
            width={400}
            height={400}
            alt="qr-code"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[28px] font-semibold p-4"> Improve your front-end skills by building projects</h1>
          <p className="text-[15px] font-normal">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </p>
        </div>

      </div>
    </div>
  )
}