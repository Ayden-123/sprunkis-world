import { NavItem } from '@/types';
import { HomeIcon, KanbanIcon, LayoutDashboardIcon, LogInIcon, UserCircleIcon, UserIcon, UserPlusIcon, UsersIcon } from 'lucide-react';

export const model_type_list = ["half", "video"]

export const navItems = [
  { title: "Home" },
  {
    title: "App",
    subChat: [
      { title: "Half illustration" },
      { title: "Face Swap" },
      { title: "Profile" },
    ]
  },
  { title: "Recent" },
];