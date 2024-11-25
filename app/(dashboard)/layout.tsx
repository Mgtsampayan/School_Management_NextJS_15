import Link from "next/link";
import Image from "next/image";

export default function DashboardLayout({
    // children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* Left Sidebar */}
            <div className="w-[15%] md:w-[11%] lg:w-[18%] xl:w-[15%] bg-red-200 font-bold text-black">
                <Link href="/" className="flex items-center justify-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={35} height={35} />
                    <span className="hidden lg:block">School Portal</span>
                </Link>
            </div>
            {/* Right Side */}
            <div className="w-[85%] md:w-[89%] lg:w-[82%] xl:w-[85%] bg-blue-200 font-bold text-black">R</div>
        </div>
    );
}