import DashboardIcon from '../../../assets/icons/dashboard.svg';
import ShippingIcon from '../../../assets/icons/uniIcon.png';
import ProductIcon from '../../../assets/icons/productIcon.png';
import UserIcon from '../../../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/forms',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: UserIcon,
        path: '/users',
        title: 'User',
    },
    {
        id: 3,
        icon: ShippingIcon,
        path: '/adduni',
        title: 'universities',
    },
    {
        id: 4,
        icon: ProductIcon,
        path: '/scholarshiplist',
        title: 'Scholarship',
    }
]

export default sidebar_menu;