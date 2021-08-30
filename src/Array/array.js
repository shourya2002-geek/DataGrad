import React from 'react';
import './array.scss';
import {IconContext} from "react-icons";
import { AiFillAppstore,AiFillPieChart  } from 'react-icons/ai';
import { RiPsychotherapyFill,RiMoneyDollarBoxFill  } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs';
import { GrBitcoin  } from 'react-icons/gr';




const array = () => {
    return (
        <IconContext.Provider
        value={{ color: 'black', size: '45px' }}
     >


            
            <AiFillAppstore />
            
            <RiPsychotherapyFill />
            <SiJavascript />
            <BsCodeSlash  />
            <RiMoneyDollarBoxFill />
            <AiFillPieChart />
            <GrBitcoin />
            <GrBitcoin />
            <GrBitcoin />
            <GrBitcoin />
            
            </IconContext.Provider>
    )
}


export default array;
