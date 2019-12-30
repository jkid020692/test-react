import React, { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
    data: any;
    stt: Number
}
const CategoryItem: FC<IProps> = (props: IProps) => {
    return (
        <Fragment>
            <tr>
                <td>{props.stt}</td>
                <td>
                    <Link
                        to={`/category/${props.data.id}`}
                        className="list-group-item">
                        {props.data.title}
                    </Link>
                </td>
            </tr>
        </Fragment>
    )
}

export default CategoryItem