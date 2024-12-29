import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <ul className="nav flex-column">
        <li><NavLink to="/dashboard/data-report">數據報表</NavLink></li>
        <li><NavLink to="/dashboard/ad-placement">廣告投放</NavLink></li>
        <li><NavLink to="/dashboard/ad-performance">廣告成效</NavLink></li>
        <li><NavLink to="/dashboard/edit">場所資料</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;