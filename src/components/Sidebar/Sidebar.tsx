import React, { FC } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-toggle" onClick={onToggle}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
      <div className="sidebar-content">
        <h2 className="sidebar-title">Фильтры</h2>
        <input
          type="text"
          placeholder="Поиск..."
          className="sidebar-input"
          aria-label="Поиск"
        />
        <div className="sidebar-filter">
          <input type="checkbox" id="filter" />
          <label htmlFor="filter">В наличии</label>
        </div>
        <select className="sidebar-select" aria-label="Категория">
          <option value="">Выберите категорию</option>
          <option value="Нижнее белье">Нижнее белье</option>
          <option value="Игрушки">Игрушки</option>
          <option value="Настольные игры">Настольные игры</option>
          <option value="Цифровые товары">Цифровые товары</option>
        </select>
        <button className="sidebar-apply-button">Применить</button>
      </div>
    </div>
  );
};

export default Sidebar;
