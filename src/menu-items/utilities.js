// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'head',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Link',
            type: 'item',
            url: '',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'icons',
            title: 'Link',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Sub link',
                    type: 'item',
                    url: '',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
