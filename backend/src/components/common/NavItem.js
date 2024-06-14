import React from 'react'
import { NavLink } from 'react-router-dom';
import Icon from './Icon';

export default function NavItem({label, icon, path, children}) {

    if (Array.isArray(children) && children.length > 0) {
        return (
            <NavLink
                to={path}
                className="dropdown"
                style={{'--nav-children': children.length }}
            >
                <NavLink to={path}>
                    <Icon label={icon} />
                    <h3>{label}</h3>
                </NavLink>
                <div className="dropdown-items">
                    {children.map((item, i) => (
                        <NavLink key={i} to={path + item.path}>
                            <Icon label={item.icon} />
                            <h3>{item.label}</h3>
                        </NavLink>
                    ))}
                </div>
            </NavLink>
        );
    } else {
        return (
            <NavLink to={path}>
                <Icon label={icon} />
                <h3>{label}</h3>
            </NavLink>
        );
    }
}
