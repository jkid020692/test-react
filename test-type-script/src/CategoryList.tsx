import React, { FC, useState } from 'react';
import CategoryItem from './CategoryItem';
import ListData from './ListData'
interface IProps {

};

const CategoryList: FC<IProps> = (props: IProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(3);
    const indexOfLastObj = currentPage * limit;
    const indexOfFirstObj = indexOfLastObj - limit;
    const currentList = ListData.slice(indexOfFirstObj, indexOfLastObj);
    let renderList = currentList.map((todo, index) => {
        return <CategoryItem stt={index + 1 + (currentPage - 1) * limit} key={index} data={todo} />;
    });
    const pageNumbers: Array<string> = [];
    for (let i = 1; i <= Math.ceil(ListData.length / limit); i++) {
        pageNumbers.push(i.toString());
    }
    const viewCreateCategory = () => {

    }
    return (
        <div>
            <div>
                <button onClick={viewCreateCategory} style={{ cursor: "pointer" }}>Tạo mới category</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList}
                </tbody>
            </table>
            <div className="news-per-page">
                <label>Limit</label>
                <select defaultValue="3" onChange={e => setLimit(Number(e.target.value))} >
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="7">7</option>
                </select>
            </div>
            <div className="pagination-custom">
                <ul id="page-numbers">
                    {
                        pageNumbers.map(number => {
                            if (currentPage === Number(number)) {
                                return (
                                    <li key={number} id={number} className="active">
                                        {number}
                                    </li>
                                )
                            }
                            else {
                                return (
                                    <li key={number} id={number} onClick={e => setCurrentPage(Number(e.currentTarget.id))} >
                                        {number}
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default CategoryList