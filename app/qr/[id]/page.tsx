import { notFound } from "next/navigation";
import { greetings } from "@/data/greetings";
import QRCode from "@/components/QRCode";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QRPage({ params }: Props) {
  const { id } = await params;

  const greeting = greetings.find((item) => item.id === id);

  if (!greeting) {
    notFound();
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://greeting-site-eta.vercel.app";

  const greetingUrl = `${baseUrl}/birthday/${greeting.id}`;

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 px-6 py-12"
    >
      <div className="w-full max-w-md rounded-[2rem] bg-white/90 p-8 text-center shadow-2xl backdrop-blur">
        <div className="mb-4 text-5xl">🎁</div>

        <h1 className="text-2xl font-black text-gray-900">
          تبریک برای {greeting.name}
        </h1>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          این QR Code را اسکن کن تا تبریک مخصوص {greeting.name} باز شود.
        </p>

        <div className="mt-8 flex justify-center">
          <QRCode value={greetingUrl} />
        </div>

        <p className="mt-6 break-all text-xs text-gray-400">
          {greetingUrl}
        </p>
      </div>
    </main>
  );
}