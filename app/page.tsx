'use client';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <button
        onClick={() => {
          // Handle action
          console.log('Button clicked');
        }}
        className="bg-purple-600 text-white font-bold py-4 px-8 rounded-[12px] border-2 border-dashed border-green-500 hover:bg-purple-700 transition-all duration-300 shadow-lg active:scale-95"
      >
        CHICHO - JARVIS
      </button>
    </main>
  );
}