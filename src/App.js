import React, { useEffect,useState } from 'react';
import './App.css';
import { Card } from 'react-bootstrap'
import { menuData } from './sample';
function App() {
  const [activeMenu, setActiveMenu] = useState(1);
  const [itemHolder, setItemHolder] = useState([])
  useEffect(() => {
    setItemHolder(menuData[1].data);
  }, [])

  const filteHandler =(index, data) =>{
    setActiveMenu(index);
    setItemHolder(data);
  }
  return (
    <>
      <img src="./assets/img/header.svg" alt="main" width="100%" />
      <h1 className="text-center main-header">Explore Our Events</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="filter-container p-4">
              {menuData.map((item, index) => {
                return (
                  <div className={`${activeMenu === index ? 'active-filter' : 'filter'}  m-2 p-2`} key={index} onClick={()=> filteHandler(index, item.data)}>{item.fiterName} ({item.data.length})</div>
                )
              }
              )}
            </div>
          </div>
          <div className="col-md-8">
            <div className="container-component">
              <div className="row ">
                {itemHolder.map((list, indexValue) => {
                    return (
                      <div className="col-md-6 mb-5" key={indexValue}>
                        <div className="card-container">
                          <img src={list.img} alt={`card-img-${indexValue}`} className="card-img-custom" width="100%" />
                          <Card.Body>
                            <div className="card-title">{list.title}</div>
                            <div className="card-date">{list.date}</div>
                            <div className="card-time my-1">{list.platform} | {list.time}</div>
                            <div className="button-container text-center my-2">
                              <button type="button" className="card-button text-center">Register now</button>
                            </div>
                          </Card.Body>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
