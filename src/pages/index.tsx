import Image from "next/image";
import localFont from "next/font/local";
import { Loading } from "@/components/Loading";
import { useEffect, useRef } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playMp3 = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    // setTimeout(() => {
    //   const elem: any = document.getElementById('quit-image');
    //   elem.click();
    // }, 3000);
  }, []);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="animate__animated animate__fadeOut animate__delay-14s">

        <Loading></Loading>
      </div>
      <div className="absolute flex flex-col items-center justify-center w-screen h-screen animate__animated animate__fadeIn animate__delay-16s">
        <button
          onClick={playMp3}
          className="px-6 py-3 mb-6 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
        >
          Click vô
        </button>
        <Image className="animate__animated  animate__pulse animate__infinite" id="quit-image" onClick={playMp3} src='/leave.jpg' width={200} height={200} alt="Cáo từ" priority></Image>
      </div>
      <audio id="bg-audio" ref={audioRef} >
        <source src="background.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
