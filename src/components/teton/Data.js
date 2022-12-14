import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  MenuIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'

import {
  ViewBoardsIcon,
  PuzzleIcon,
  ChartSquareBarIcon,
} from '@heroicons/react/solid'

const user = { 
  name: 'Chris Chilcoat', 
  email: 'chrischilcoat@gmail.com', 
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=32&h=32&q=80'
}


const breadcrumb = [
  { name: 'Teton', href: '/about'},
  { name: 'Components', href: '#' },
  { name: 'Buttons', href: '#' },
]

const data = [
  { name: 'About', href: '/about'},
  { name: 'Customers', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Careers', href: '#'},
  { name: 'Privacy', href: '#' },
]

const layouts =  [
  { name: 'Grid', href: '/layout/grid', icon: ViewBoardsIcon },
  { name: 'Stacks', href: '/layout/stack', icon: ViewBoardsIcon },
]

const components =  [
  { name: 'Alerts', href: '/components/alerts', icon: PuzzleIcon },
  { name: 'Badges', href: '/components/badges', icon: PuzzleIcon },
  { name: 'Buttons', href: '/components/buttons', icon: PuzzleIcon },
  { name: 'Button Groups', href: '/components/button-groups', icon: PuzzleIcon },
  { name: 'Cards', href: '/components/cards', icon: PuzzleIcon },
  { name: 'Carousel', href: '/components/carousel', icon: PuzzleIcon },

]

const examples =  [
  { name: 'Composer', href: '/examples/composer', icon: ChartSquareBarIcon,
},
  { name: 'Pager', href: '/examples/pager', icon: ChartSquareBarIcon,
},

]

const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]

const navigation = [
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

export { user, data, company, resources, navigation, breadcrumb, components, layouts, examples }
