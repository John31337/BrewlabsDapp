// assets
import { IconDashboard, IconHome2, IconCalendar, IconSpeakerphone, IconSearch, IconMap2 } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconHome2, IconCalendar, IconSpeakerphone, IconSearch, IconMap2 };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconHome2,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Pools',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Farms',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Zap',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconSpeakerphone,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Swap',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconSearch,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Constructor',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconMap2,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
