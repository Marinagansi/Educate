import DashboardIcon from '../../../assets/icons/dashboard.svg';
import ShippingIcon from '../../../assets/icons/shipping.svg';
import ProductIcon from '../../../assets/icons/product.svg';
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
        path: '/products',
        title: 'products',
    },
    {
        id: 4,
        icon: ProductIcon,
        path: '/appointments',
        title: 'Appointment',
    }
]

export default sidebar_menu;