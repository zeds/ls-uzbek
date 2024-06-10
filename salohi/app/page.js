import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-blue-100">
      <header className="my-grid bg-green-300">
        <div className="bg-yellow-300">1</div>
        <div className="bg-red-500">2</div>
        <div className="bg-pink-500">3</div>
      </header>
    </main>
  );
}
