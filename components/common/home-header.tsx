"use client"
import { ArrowLeft, Heart, MoreHorizontal } from 'lucide-react';
import { useRouter } from "next/navigation";

export async function HomeHeader() {
    const router = useRouter();

    return (
        <header className="bg-home_main_bg shadow-sm z-10 border-b border-white/20">
            <div className="px-4 py-2 flex items-center justify-between">
                <button className="p-2 text-gray-300 hover:text-white"
                        onClick={() => router.back()}>
                    <ArrowLeft className="w-6 h-6" />
                </button>
            </div>
        </header>

    );
}

export default HomeHeader
