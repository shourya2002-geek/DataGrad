import React from 'react';
import './list.scss';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Link } from 'react-router-dom';


const List = (props) => {

    const location = useLocation();
    const [items, setItems] = useState([]);
    var courses = [];
    var urls = [];

    for (var i = 0; i < 22; i++) {
        if (i % 2 == 0) {
            courses.push(items[i]);
        }
        else {
            urls.push(items[i]);
        }
    }

    var result = urls.reduce(function (result, field, index) {
        result[courses[index]] = field;
        return result;
    }, {})








    var mp = new Map();
    for (let i = 0; i < courses.length; i++) {
        mp.set(courses[i], urls[i]);
    };



    useEffect(() => {
        console.log(location.state.data);
        setItems(location.state.data);








    }, [location]);



    return (
        <div className="wrap">

            <div className="list">




 

                {Object.keys(result).map(function (course, index) {
                    return (

                        <div className="item">


                        <a rel={'external'} className="title"
                            target="_blank" href={result[course]}>{course}</a>
                        


                        </div>


                    )
                })}


            </div>












        </div>
    )
}

export default List;
