import { notFound } from "next/navigation";
import { greetings } from "@/data/greetings";
import GreetingExperience from "@/components/GreetingExperience";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function BirthdayPage({ params }: Props) {
    const { id } = await params;

    const greeting = greetings.find((item) => item.id === id);

    if (!greeting) {
        notFound();
    }

    return (
        <GreetingExperience
            name={greeting.name}
            title={greeting.title}
            message={greeting.message}
            image={greeting.image}
            music={greeting.music}
        />
    );
}