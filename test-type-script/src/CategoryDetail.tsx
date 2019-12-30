import React, { FC, useState } from 'react';
import {useParams } from 'react-router-dom';
import ListData from './ListData';

const CategoryDetail: FC = () => {
    const { id } = useParams();
    let category = {
        id: "",
        title : ""
    };
    for (var i = 0; i < ListData.length; i++) {
        if (id == ListData[i].id) {
            category = ListData[i];
            break;
        }
    }
    return (
        <div>
            <div>Chi tiết Category</div>
            <div className="w-100" style={{ width: "400px" }}>
                <label style={{ width: "50%" }}>Id: </label>
                <span>{category.id}</span>
            </div>
            <div className="w-100" style={{ width: "400px" }}>
                <label style={{ width: "50%" }}>Tên category: </label>
                <span>{category.title}</span>
            </div>
        </div>
    )
}

export default CategoryDetail