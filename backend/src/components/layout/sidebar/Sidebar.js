import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "../../common/NavItem";
import Icon from "../../common/Icon";

export default function Sidebar({showSidebar,setShowSidebar}) {
  
  const navItems = [
    {
      label:'Dashboard',
      icon:'home',
      path:'/admin/dashboard'
    },
    {
      label: 'Views',
      icon: 'more_vert',
      path: '/admin/views',
      children: [
          { label: 'Modules', icon: 'inventory_2', path: '/modules' },
          { label: 'Formateurs', icon: 'assignment_ind', path: '/formateurs' },
          { label: 'Groupes', icon: 'groups', path: '/groupes' },
          { label: 'Users', icon: 'account_circle', path: '/users' }
      ],
    },
    {
        label: 'Actions',
        icon: 'stacks',
        path: '/admin/actions',
        children: [
          { label: 'Modules', icon: 'inventory_2', path: '/modules' },
          { label: 'Formateurs', icon: 'assignment_ind', path: '/formateurs' },
          { label: 'Groupes', icon: 'groups', path: '/groupes' },
          { label: 'Users', icon: 'account_circle', path: '/users' }
      ]
    },
    {
        label: 'Statistics',
        icon: 'monitoring',
        path: '/admin/statistics',
    },
    {
        label: 'Sync Excel',
        icon: 'sync',
        path: '/admin/sync',
    },
    {
        label: 'History',
        icon: 'history',
        path: '/admin/history',
    },
    {
        label: 'Settings',
        icon: 'settings',
        path: '/admin/settings',
    },
    {
        label: 'Log out',
        icon: 'logout',
        path: '/admin/logout',
    },
  ]

  return (
    <aside>
      <div className="top">
        <div className="logo">
          <img src="/assets/images/layout/logo.png" alt="" />
        </div>

        <div className="close" id="close-btn" onClick={()=>setShowSidebar(false)}>
          <Icon label={'close'} />
        </div>
      </div>

      <div className="sidebar">
        {navItems.map((nav,i)=>(
          <NavItem key={i}
            label={nav.label} 
            icon={nav.icon} 
            path={nav.path} 
            children={nav.children}
          />
        ))}
      </div>
    </aside>
  );
}
