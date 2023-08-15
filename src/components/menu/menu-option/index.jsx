import React from "react";

function MenuOption({ icon, name, notification }) {
  return (
    <div className='menu-option'>
      {icon}
      <span>{name}</span>
      {notification && (
        <div className='notify-badge'>
          <span>1</span>
        </div>
      )}
    </div>
  );
}

export default MenuOption;
