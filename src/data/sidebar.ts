import { IconVariant } from "../models/types";

type NavLink = {
    icon: IconVariant;
    label: string;
    value: string;
  };
  

export const NAV_LINKS: Array<NavLink> = [
    {
        icon : 'home',
        label: 'Home',
        value: '/'
    },
    {
        icon : 'application',
        label: 'Application',
        value: '/application'
    }
]