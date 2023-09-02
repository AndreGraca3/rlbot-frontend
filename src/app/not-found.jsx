import Image from "next/image";

export default function NotFound({ code }) {
  return (
    <div className="flex w-full h-full mx-10">
      <Image
        className="justify-center"
        src={"/error-background.gif"}
        width={1000}
        height={500}
        alt="Error image"
      ></Image>
      <div className="flex flex-col w-full justify-center items-center space-y-2">
        <h1 className="text-center border-b-2 rounded-sm text-8xl">
          {code || 404}
        </h1>
        <h1 className="text-center text-red-600 text-2xl">
          NOT THE MATCH YOU'RE LOOKING FOR.
        </h1>
      </div>
    </div>
  );
}
