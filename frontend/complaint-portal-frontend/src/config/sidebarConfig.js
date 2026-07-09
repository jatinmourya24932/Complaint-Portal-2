import {
    FiHome,
    FiPlusCircle,
    FiClipboard,
    FiSearch,
    FiUsers,
    FiBook,
    FiLayers
} from "react-icons/fi";

export const sidebarConfig = {

    STUDENT: [

        {
            title: "Dashboard",
            icon: FiHome,
            path: "/student/dashboard"
        },

        {
            title: "Create Complaint",
            icon: FiPlusCircle,
            path: "/student/create-complaint"
        },
{
        title: "My Complaints",
        icon: FiClipboard,
        path: "/student/my-complaints"
    },


    ],

    FACULTY: [

        {
            title: "Dashboard",
            icon: FiHome,
            path: "/faculty/dashboard"
        },

        {
            title: "Assigned Complaints",
            icon: FiClipboard,
            path: "/faculty/dashboard"
        }

    ],

    HOD: [

        {
            title: "Dashboard",
            icon: FiHome,
            path: "/hod/dashboard"
        },

        {
            title: "Department Complaints",
            icon: FiClipboard,
            path: "/hod/dashboard"
        }

    ],

    ADMIN: [

        {
            title: "Dashboard",
            icon: FiHome,
            path: "/admin/dashboard"
        },

        {
            title: "Complaints",
            icon: FiClipboard,
            path: "/admin/dashboard"
        },

        {
            title: "Faculty",
            icon: FiUsers,
            path: "/admin/faculty"
        },

         {
            title: "Student",
            icon: FiUsers,
            path: "/admin/student"
        },

        {
            title: "Departments",
            icon: FiLayers,
            path: "/admin/departments"
        },

        {
            title: "Subjects",
            icon: FiBook,
            path: "/admin/subjects"
        }

    ]

};