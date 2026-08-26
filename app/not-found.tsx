import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl mb-6">
        404
      </div>
      <h1 className="text-4xl font-black mb-3">Page Not Found</h1>
      <p className="text-sm text-zinc-600 max-w-sm mb-8 font-medium">
        The system path you requested does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-black text-white font-bold text-xs hover:bg-zinc-800 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]"
      >
        Return Home →
      </Link>
    </div>
  );
}
