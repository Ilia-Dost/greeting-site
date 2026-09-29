import Link from "next/link";

export default function Home() {
    return (
        <main
            dir="rtl"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100"
        >
            {/* Background decorations */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-pink-300/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-200/30 blur-3xl" />

            <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
                <div className="w-full max-w-3xl text-center">

                    {/* Logo */}
                    <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/80 text-5xl shadow-xl backdrop-blur">
                        🎁
                    </div>

                    {/* Title */}
                    <p className="mb-4 text-sm font-bold text-pink-500 sm:text-base">
                        ✦ یک تبریک متفاوت ✦
                    </p>

                    <h1 className="text-4xl font-black leading-tight text-gray-900 sm:text-6xl">
                        برای آدم‌های
                        <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            خاص زندگی‌مون ❤️
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-gray-600 sm:text-lg sm:leading-9">
                        یک کارت تبریک دیجیتال شخصی‌سازی‌شده،
                        با عکس، موسیقی و یک پیام مخصوص.
                        <br />
                        فقط لینک رو باز کن و سورپرایز رو شروع کن 🎀
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/birthday/demo"
                            className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-base font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95 sm:w-auto"
                        >
                            مشاهده یک تبریک 🎉
                        </Link>

                        <Link
                            href="/qr/demo"
                            className="w-full rounded-2xl border border-white bg-white/70 px-8 py-4 text-base font-bold text-gray-700 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white active:scale-95 sm:w-auto"
                        >
                            نمایش QR Code 📱
                        </Link>
                    </div>

                    {/* Features */}
                    <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        <div className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur">
                            <div className="text-3xl">🎵</div>

                            <h2 className="mt-3 font-black text-gray-800">
                                موسیقی
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                یک آهنگ مخصوص برای فضای تبریک
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur">
                            <div className="text-3xl">📸</div>

                            <h2 className="mt-3 font-black text-gray-800">
                                عکس شخصی
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                عکس و پیام مخصوص هر شخص
                            </p>
                        </div>

                        <div className="rounded-3xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur">
                            <div className="text-3xl">📱</div>

                            <h2 className="mt-3 font-black text-gray-800">
                                QR Code
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                قابل اشتراک‌گذاری با یک اسکن ساده
                            </p>
                        </div>

                    </div>

                    {/* Contact */}
                    <div className="mx-auto mt-12 max-w-md rounded-3xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur">
                        <div className="text-3xl">💬</div>

                        <h2 className="mt-3 text-lg font-black text-gray-800">
                            راه ارتباطی
                        </h2>

                        <p className="mt-2 text-sm leading-7 text-gray-500">
                            برای ساخت تبریک اختصاصی یا ارتباط با من،
                            می‌تونی از طریق تلگرام پیام بدی.
                        </p>

                        <a
                            href="https://t.me/ily4_CFZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#229ED9] px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
                        >
                            💬 @ily4_CFZ
                        </a>
                    </div>

                    {/* Footer */}
                    <p className="mt-10 text-xs text-gray-400">
                        با عشق ساخته شده ❤️
                    </p>

                </div>
            </section>
        </main>
    );
}