"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";

type GreetingExperienceProps = {
    name: string;
    title: string;
    message: string;
    image: string;
    music: string;
};

export default function GreetingExperience({
    name,
    title,
    message,
    image,
    music,
}: GreetingExperienceProps) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [started, setStarted] = useState(false);

    const handleStart = () => {
        const audio = audioRef.current;

        if (!audio) {
            alert("Audio پیدا نشد");
            return;
        }

        audio.currentTime = 0;
        audio.volume = 1;

        audio
            .play()
            .then(() => {
                setStarted(true);

                // 🎉 Confetti
                confetti({
                    particleCount: 120,
                    spread: 90,
                    startVelocity: 35,
                    origin: {
                        x: 0.5,
                        y: 0.6,
                    },
                });
            })
            .catch((error) => {
                console.error("Music error:", error);

                setStarted(true);

                confetti({
                    particleCount: 120,
                    spread: 90,
                    startVelocity: 35,
                    origin: {
                        x: 0.5,
                        y: 0.6,
                    },
                });
            });
    };

    return (
        <>
            {/* 🎵 Audio - بدون کنترل ظاهری */}
            <audio
                ref={audioRef}
                src={music}
                loop
                preload="auto"
                className="hidden"
            />

            {!started ? (
                /* ================= INTRO ================= */
                <main
                    dir="rtl"
                    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 px-6"
                >
                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl" />

                    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-300/40 blur-3xl" />

                    <div className="relative z-10 text-center">
                        <div className="mb-8 animate-bounce text-7xl">
                            🎁
                        </div>

                        <h1 className="text-3xl font-black text-gray-900 sm:text-5xl">
                            یک سورپرایز برای تو
                        </h1>

                        <p className="mt-4 text-gray-600">
                            یک تبریک کوچک اما مخصوص تو آماده شده ❤️
                        </p>

                        <button
                            type="button"
                            onClick={handleStart}
                            className="mt-10 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:scale-95"
                        >
                            🎀 باز کردن تبریک
                        </button>
                    </div>
                </main>
            ) : (
                /* ================= GREETING CARD ================= */
                <main
                    dir="rtl"
                    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff7f5] px-4 py-12 sm:px-6"
                >
                    <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-pink-200/60 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-200/60 blur-3xl" />

                    <article className="relative z-10 w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white bg-white/90 shadow-[0_25px_80px_-25px_rgba(190,80,140,0.25)] backdrop-blur-xl animate-[cardIn_0.7s_ease-out_both]">

                        {/* Header */}
                        <div className="relative overflow-hidden bg-gradient-to-l from-rose-400 via-pink-400 to-purple-400 px-6 pb-10 pt-8 text-center text-white">
                            <div className="relative">
                                <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs backdrop-blur-sm">
                                    ✦ یک سورپرایز مخصوص تو ✦
                                </span>

                                <div className="mt-5 text-5xl animate-[fadeUp_0.6s_ease-out_0.2s_both]">
                                    🎁
                                </div>

                                <h1 className="mt-4 text-2xl font-black sm:text-3xl animate-[fadeUp_0.6s_ease-out_0.3s_both]">
                                    {title}
                                </h1>

                                <p className="mt-2 text-white/90 animate-[fadeUp_0.6s_ease-out_0.4s_both]">
                                    برای {name}، با کلی عشق ❤️
                                </p>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative px-6 pt-8 sm:px-9 animate-[fadeUp_0.7s_ease-out_0.45s_both]">
                            <div className="relative mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-[1.5rem] border-8 border-white shadow-xl">
                                <Image
                                    src={image}
                                    alt={`عکس ${name}`}
                                    fill
                                    priority
                                    sizes="(max-width: 640px) 90vw, 400px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="px-6 pb-10 pt-8 text-center sm:px-9 animate-[fadeUp_0.7s_ease-out_0.6s_both]">
                            <div className="mb-5 text-2xl">
                                💕
                            </div>

                            <p className="whitespace-pre-line text-sm leading-8 text-gray-600 sm:text-base sm:leading-9">
                                {message}
                            </p>

                            <p className="mt-8 text-xs text-gray-400">
                                با عشق ساخته شده ❤️
                            </p>
                        </div>
                    </article>
                </main>
            )}
        </>
    );
}