import { 
  DashboardOutlined, ShoppingCartOutlined, UserOutlined, 
  TeamOutlined, GiftOutlined, MailOutlined, ShopOutlined,
  ShoppingOutlined, GroupOutlined, SettingOutlined, 
  MobileOutlined, ProfileOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [{
  key: 'general',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Основное',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'home',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'home',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'products',
          path: `${APP_PREFIX_PATH}/catalog/products`,
          title: 'Товары',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'categories',
          path: `${APP_PREFIX_PATH}/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'collections',
          path: `${APP_PREFIX_PATH}/catalog/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'combo',
          path: `${APP_PREFIX_PATH}/catalog/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'clinets',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'client-list',
          path: `${APP_PREFIX_PATH}/clients/list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'client-groups',
          path: `${APP_PREFIX_PATH}/clients/groups`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/banners`,
      title: 'Баннеры',
      icon: GroupOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'promocodes',
      path: `${APP_PREFIX_PATH}/promocodes`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'offline-points',
      path: `${APP_PREFIX_PATH}/offline-points`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'addresses',
          path: `${APP_PREFIX_PATH}/offline-points/addresses`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'zones',
          path: `${APP_PREFIX_PATH}/offline-points/zones`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'employees',
      path: `${APP_PREFIX_PATH}/employees`,
      title: 'Сотрудники',
      icon: TeamOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mailings',
      path: `${APP_PREFIX_PATH}/mailings`,
      title: 'Расслыки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
},
{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'Системные',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'app',
      path: `${APP_PREFIX_PATH}/system/app`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'Логи',
      icon: ProfileOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}
]



const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
