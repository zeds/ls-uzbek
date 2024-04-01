import Image from "next/image";

export default function Home() {
  let data ={first_name:"Tsutomu",last_name:"Okumura"};
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div>データ:{data.last_name}</div>
    </div>
  );
}
