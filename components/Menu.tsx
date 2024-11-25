// Menu.tsx
import Image from "next/image";
import Link from "next/link";

// Types
interface MenuItem {
    icon: string;
    label: string;
    href: string;
}

interface MenuSection {
    title?: string;
    items: MenuItem[];
}

// Menu data
const menuData: MenuSection[] = [
    {
        items: [
            { icon: "/home.png", label: "Home", href: "/" },
            { icon: "/accounting.png", label: "Accounting", href: "/accounting" },
            { icon: "/parent.png", label: "Parent", href: "/parent" },
            { icon: "/teacher.png", label: "Teacher", href: "/teacher" },
            { icon: "/student.png", label: "Student", href: "/student" },
            { icon: "/registrar.png", label: "Registrar", href: "/registrar" },
            { icon: "/class.png", label: "Class", href: "/class" },
            { icon: "/assignment.png", label: "Assignment", href: "/assignment" },
            { icon: "/announcement.png", label: "Announcement", href: "/announcement"},
            { icon: "/lesson.png", label: "Lesson", href: "/lesson" },
            { icon: "/exam.png", label: "Exam", href: "/exam" },
            { icon: "/grade.png", label: "Grade", href: "/grade" },
            { icon: "/report.png", label: "Report", href: "/report" },
            { icon: "/calendar.png", label: "Calendar", href: "/calendar" },
        ],
    },
    {
        title: "OTHER",
        items: [
            { icon: "/profile.png", label: "Profile", href: "/profile" },
            { icon: "/settings.png", label: "Settings", href: "/settings" },
            { icon: "/logout.png", label: "Logout", href: "/logout" },
        ],
    },
];

const Menu = () => {
    return (
        <nav className="flex flex-col gap-6 p-4">
            {menuData.map((section, index) => (
                <div key={section.title || `section-${index}`} className="flex flex-col gap-4">
                    {section.title && (
                        <h2 className="text-sm font-semibold text-gray-500">{section.title}</h2>
                    )}
                    <div className="flex flex-col gap-2">
                        {section.items.map((item) => (
                            <Link
                                href={item.href}
                                key={item.label}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                <Image
                                    src={item.icon}
                                    alt={`${item.label} icon`}
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    );
};

export default Menu;