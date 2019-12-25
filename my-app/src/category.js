import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

var newsList = [
  {
    "id": "1",
    "title": "Category 1",
    "content": "ct1"
  },
  {
    "id": "2",
    "title": "Category 2",
    "content": "ct2"
  },
  {
    "id": "3",
    "title": "Category 3",
    "content": "ct3"
  },
  {
    "id": "4",
    "title": "Category 4",
    "content": "ct4"
  },
  {
    "id": "5",
    "title": "Category 5",
    "content": "ct5"
  },
  {
    "id": "6",
    "title": "Category 6",
    "content": "ct6"
  },
  {
    "id": "7",
    "title": "Category 7",
    "content": "ct7"
  },
  {
    "id": "8",
    "title": "Category 8",
    "content": "ct8"
  },
  {
    "id": "9",
    "title": "Category 9",
    "content": "ct9"
  },
  {
    "id": "10",
    "title": "Category 10",
    "content": "ct10"
  }
]

class TableCategoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      id: ""
    };
  }
  choseCategory(id) {
    this.setState({
      redirect: true,
      id: id
    })
  }
  renderRedirectDetail = () => {
    // if (this.state.redirect){
    //   return(
    //     <BrowserRouter>
    //     <Redirect to={{ pathname: '/category/' + this.state.id }} />
    //     <Route path="/category/:id" component={CategoryDetail}/>
    //   </BrowserRouter>
    //   )
    // }
    return(
      <BrowserRouter>
      <Redirect to={{ pathname: '/category/' + this.state.id }} />
      <Route path="/category/:id" component={CategoryDetail}/>
    </BrowserRouter>
    )
  }
  render() {
    debugger
    const redirect = this.state.redirect;
    return (      
      <BrowserRouter>
      {redirect ? this.renderRedirectDetail() : (
        <tr onClick={this.choseCategory.bind(this, this.props.data.id)}>
          <td>{this.props.stt}</td>
          <td>
            <Link
              to={{ pathname: '/category/' + this.props.data.id }}
              className="list-group-item"
              key={this.props.data.id}>
              {this.props.data.title}
            </Link>
          </td>
        </tr>
      )}
      </BrowserRouter>
    )
  }
}
class CategoryDetail extends React.Component {
  render() {
    let category = {};
    let id = this.props.id;
    for (var i = 0; i < newsList.length; i++) {
      if (id == newsList[i].id) {
        category = newsList[i];
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
}
class CategoryCreate extends React.Component {
  render() {
    return (
      <div>
       tạo
      </div>
    )
  }
}
class TableList extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      newsPerPage: 3
    };
  }

  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  select = (event) => {
    this.setState({
      newsPerPage: event.target.value
    })
  }
  viewCreateCategory() {

  }
  render() {
    let currentPage = this.state.currentPage;
    let newsPerPage = this.state.newsPerPage;
    let indexOfLastNews = currentPage * newsPerPage;
    let indexOfFirstNews = indexOfLastNews - newsPerPage;
    let currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
    let renderTodos = currentTodos.map((todo, index) => {
      return <TableCategoryItem stt={index + 1 + (currentPage - 1) * newsPerPage} key={index} data={todo} />;
    });
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <div>

          <button onClick={this.viewCreateCategory.bind(this)} style={{ cursor: "pointer" }}>Tạo mới category</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {renderTodos}
          </tbody>
        </table>
        <div className="news-per-page">
          <label>Limit</label>
          <select defaultValue="3" onChange={this.select} >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className="pagination-custom">
          <ul id="page-numbers">
            {
              pageNumbers.map(number => {
                if (this.state.currentPage === number) {
                  return (
                    <li key={number} id={number} className="active">
                      {number}
                    </li>
                  )
                }
                else {
                  return (
                    <li key={number} id={number} onClick={this.chosePage} >
                      {number}
                    </li>
                  )
                }
              })
            }
          </ul>
        </div>
      </div>
    );
  }

}
export default TableList