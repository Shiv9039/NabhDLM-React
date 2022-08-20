// assets
import { IconBrandChrome, IconHelp, IconBooks } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconBooks };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const classes = {
    id: 'classes',
    title: 'Classes',
    type: 'group',
    children: [
        {
            id: 'select-class',
            title: 'Select Class',
            type: 'collapse',
            icon: icons.IconBooks,
            children: [
                {
                    id: 'class-first',
                    title: 'Class 1st',
                    type: 'item',
                    url: '/classfirst',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-second',
                    title: 'Class 2nd',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-third',
                    title: 'Class 3rd',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-fourth',
                    title: 'Class 4th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-fifth',
                    title: 'Class 5th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-sixth',
                    title: 'Class 6th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-seventh',
                    title: 'Class 7th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-eighth',
                    title: 'Class 8th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-ninth',
                    title: 'Class 9th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-tenth',
                    title: 'Class 10th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-eleventh',
                    title: 'Class 11th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                },
                {
                    id: 'class-twelfth',
                    title: 'Class 12th',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBooks,
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default classes;
