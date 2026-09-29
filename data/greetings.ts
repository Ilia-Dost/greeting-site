export type Greeting = {
    id: string;
    name: string;
    title: string;
    message: string;
    image: string;
    music: string;
};

export const greetings: Greeting[] = [
    {
        id: "demo",
        name: "دوست عزیز",
        title: "تولدت مبارک 🎂",
        message:
            "امیدوارم سال جدید زندگی‌ات پر از اتفاق‌های خوب، خنده‌های واقعی و لحظه‌های قشنگ باشه. ❤️",
        image: "/images/demo.jpg",
        music: "/music/demo.mp3",
    },
    {
        id: "ali",
        name: "علی",
        title: "کلیک کن",
        message:
            "شماره کارت بدم یا پخش کنم؟😉",
        image: "/images/ali.jpg",
        music: "/music/ali.mp3",
    },
];
