import React from 'react'
import Icon from './Icon';

export default function Pagination({links, changePage}) {
    const getLabel = (label, index, length) => {
        switch (index) {
          case 0:
            return (
            <>
              <Icon label={'keyboard_double_arrow_left'} />
              Previous
            </>
            )
          case length - 1:
            return (
              <>
                <Icon label={'keyboard_double_arrow_right'}>
                Next
                </Icon>
              </>
              )
          default:
            return label;
        }
      };
    return (
        <nav className="pagination">
            <ul className="pagination-items">
            {links.map((link, i) => {
                return (
                <li key={i} className={`pageItem ${link.active ? "active" : ""}`}>
                    <button
                    onClick={(e) => {
                        e.preventDefault();
                        changePage(link.url);
                    }}
                    >
                    {link.url && getLabel(link.label, i, links.length)}
                    </button>
                </li>
                );
            })}
            </ul>
        </nav>
    )
}
