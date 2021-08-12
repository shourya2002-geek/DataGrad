import React from 'react';
import './front.scss';



const front = () => {

    




    return (
        <div>
            <section>
                <div className="text">

                <div className="header">CoursifyIt!</div>
                <div className="content">Coursera Inc. is an American massive open online course provider founded in 2012 by Stanford University computer science professors Andrew Ng and Daphne Koller. Coursera works with universities and other organizations to offer online courses, certifications, and degrees in a variety of subjects. According to CNBC "more than 150 universities offered upwards of 4,000 courses through Coursera, which features over two dozen degree programs at prices that are lower than many in-person school offerings."</div>

                </div>
                <div className="icons">

                    <a rel={'external'} href="/"  className="home loader-ring"><div>Home</div></a>


                    <a rel={'external'} href="/questions" className="course loader-ring"><div>Courses</div></a>

                    <a rel={'external'} href="/articles" className="articles loader-ring"><div>Articles</div></a>

                    
                </div>








            </section>


        </div>



                


                

            
    )
}

export default front;
