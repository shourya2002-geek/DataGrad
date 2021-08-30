import React from 'react';
import './list.scss';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticleComponent from '../Particles/particles';
import { AiOutlineArrowRight, AiFillHeart } from 'react-icons/ai';
import { RiAccountCircleFill } from 'react-icons/ri';
import Sidebar from '../Sidebar/sidebar';
import Navbar from '../Navbar/navbar';


const List = (props) => {


    const location = useLocation();
    const [items, setItems] = useState([]);
    var courses = [];
    var links = [];
    var levels = [];
    var orgs = [];

    for (var i = 0; i < 20; i++) {

        if (i >= 0 && i <= 4) {
            courses.push(items[i]);
        }

        if (i >= 5 && i <= 9) {
            links.push(items[i]);
        }

        if (i >= 10 && i <= 14) {
            levels.push(items[i]);
        }

        if (i >= 15 && i <= 20) {
            orgs.push(items[i]);
        }


    }

    var result1 = links.reduce(function (result1, field, index) {
        result1[courses[index]] = field;
        return result1;
    }, {})

    var result2 = levels.reduce(function (result2, field, index) {
        result2[courses[index]] = field;
        return result2;
    }, {})


    var result3 = orgs.reduce(function (result3, field, index) {
        result3[courses[index]] = field;
        return result3;
    }, {})

















    useEffect(() => {
        console.log(location.state.data);
        setItems(location.state.data);








    }, [location]);



    return (


        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "200vh"
            }}
        >
            <Sidebar />

            <ParticleComponent />

            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "200vh",
                    color: "white"
                }}
                className="front"
            >

                <Navbar />


                {Object.keys(result1).map(function (course, index) {
                    

                    return (





                        <div className="list">

                        <div className="item">

                            


                            <a rel={'external'} className="title"
                                target="_blank" href={result1[course]}>{course}</a>


                            <div>{result2[course]}</div>
                            <div>{result3[course]}</div>





                        </div>
                        </div>


                    )
                })}






























            </div>
        </div>
    )
}

export default List;
