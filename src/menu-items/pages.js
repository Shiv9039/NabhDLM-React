// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    // caption: ' ',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Student',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                // {
                //     id: 'login3',
                //     title: 'Login',
                //     type: 'item',
                //     url: '/pages/login/login3',
                //     icon: icons.IconKey,
                //     target: true
                // },
                // {
                //     id: 'register3',
                //     title: 'Register',
                //     type: 'item',
                //     url: '/pages/register/register3',
                //     icon: icons.IconKey,
                //     target: true
                // },
                {
                    id: 'studentEnquiry',
                    title: 'Student Enquiry',
                    type: 'item',
                    url: '/pages/login/login3',
                    icon: icons.IconKey,
                    target: false
                },
                {
                    id: 'studentList',
                    title: 'Student List',
                    type: 'item',
                    url: '/pages/login/login3',
                    icon: icons.IconKey,
                    target: false
                },
                {
                    id: 'addStudent',
                    title: 'Add Student',
                    type: 'item',
                    url: '/pages/login/login3',
                    icon: icons.IconKey,
                    target: false
                }
            ]
        }
    ]
};

export default pages;
