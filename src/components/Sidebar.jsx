import {
    TemplateIcon, 
    AcademicCapIcon, 
    DesktopComputerIcon, 
    HandIcon, 
    BookOpenIcon, 
    SpeakerphoneIcon, 
    ChatAlt2Icon,
    VideoCameraIcon,
    CurrencyDollarIcon,
    AdjustmentsIcon,
    QuestionMarkCircleIcon
} from "@heroicons/react/solid"
import SidebarItem from "./ui/SidebarItem"
import SiteLogo from "./ui/SiteLogo"

function Sidebar() {
    return (
        <div className="bg-white min-h-screen w-[300px] flex flex-col sticky top-0">
            <div className="flex justify-center my-10 mx-8">
                <SiteLogo />
            </div>

            <div className="flex flex-col flex-grow">

                <SidebarItem icon={<TemplateIcon />} text="Dashboard" />
                <SidebarItem icon={<AcademicCapIcon />} text="School" />
                <SidebarItem icon={<DesktopComputerIcon />} text="Teachers" />
                <SidebarItem icon={<HandIcon />} text="Students" />
                <SidebarItem icon={<BookOpenIcon />} text="Courses" />
                <SidebarItem icon={<SpeakerphoneIcon />} text="Announcements" />
                <SidebarItem icon={<ChatAlt2Icon />} text="Messages" />
                <SidebarItem icon={<VideoCameraIcon />} text="Live Classroom" />
                <SidebarItem icon={<CurrencyDollarIcon />} text="Payments" />

            </div>

            <div className="mb-6">

                <SidebarItem icon={<AdjustmentsIcon />} text="Settings" />
                <SidebarItem icon={<QuestionMarkCircleIcon />} text="Help Center" />

            </div>
        </div>
    )
}

export default Sidebar
