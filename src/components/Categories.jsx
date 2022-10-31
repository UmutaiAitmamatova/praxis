import React from "react";

const Categories = ({items, onClickItem}) => {
    const [activeItem, setActiveItem] = React.useState(null);

    console.log(activeItem, setActiveItem);
    return (
            <div className="categories">
                <ul>
                    <li>Все</li>
                    {items.map((name, index) => (
                            <li className={activeItem === index ? "active" : ''} onClick={()=> setActiveItem(index)}>{name}</li>
                    ))}
                </ul>
            </div>
    );
};

export default Categories;
