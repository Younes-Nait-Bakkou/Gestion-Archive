import React, { useEffect, useState } from "react";
import Icon from "./Icon";

export default function InsightCard({resourceName,stat}) {
    const [iconLabel,setIconLabel] = useState('');

    const getLastUpdated = (lastUpdated) => {
        if (!lastUpdated) return 'N/A';
    
        const curTime = new Date();
        const updatedTime = new Date(lastUpdated);
        const timeDifference = Math.abs(curTime - updatedTime);

        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(timeDifference / (1000 * 60));
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    
        if (seconds < 60) {
            return `Last Updated: ${seconds} seconds ago`;
        } else if (minutes < 60) {
            return `Last Updated: ${minutes} minutes ago`;
        } else if (hours < 24) {
            return `Last Updated: ${hours} hours ago`;
        } else if (days < 30) {
            return `Last Updated: ${days} days ago`;
        } else if (months < 12) {
            return `Last Updated: ${months} months ago`;
        } else {
            return `Last Updated: ${years} years ago`;
        }
        
    };

    function kebabCase(str) {
        return str.replace(/\s+/g, '-');
    }

    useEffect(()=>{
        switch (stat.status) {
            case 'in progress':
                setIconLabel('pending')
                break;
            case 'on hold':
                setIconLabel('pause_circle')
                break;
            case 'archived':
                setIconLabel('lock')
                break;
            case 'opened':
                setIconLabel('lock_open_right')
                break;   
            default:
                break;
        }
    },[])
    
    return (
        <div className={kebabCase(stat.status)}>
            <Icon label={iconLabel} />
            <div className="middle">
                <div className="left">
                <h3>{resourceName.charAt(0).toUpperCase() + resourceName.slice(1) + ' ' +  stat.status} </h3>
                <h1> {stat.count} </h1>
                </div>

                <div className="progress">
                <svg>
                    <circle
                    r="30"
                    cy="35"
                    cx="35"
                    style={{ "--percentage": stat.percentage }}
                    ></circle>
                </svg>
                    <div className="number">{ stat.percentage.toFixed(0) }%</div>
                </div>
            </div>
            <small>{getLastUpdated(stat.last_updated)}</small>
        </div>
  );
}
