import React from 'react';
import { Link } from 'react-router-dom'

const Create = props => {
    const data = props.data
    return (
    <section className="create-and-sell tf-section bg-color-14161B">
        <div className="container">
            <div className="row">
                
                {
                    data.map((item,index)=> (
                        <div key={index} className="col-lg-3 col-md-6 col-12">
                        <div className={`sc-wallet style-2 ${item.class}`}>
                            {/* <div className="icon">
                                <img src={item.img} alt="Bidzen" />
                            </div> */}
                            <div className="content">
                                <h5  style={{fontSize: "30px"}} >{item.title}</h5>
                                <p>{item.desc}</p>
                                {/* <Link to="/connect-wallet" className="read-more"><i
                                        className="fas fa-arrow-right"></i></Link> */}
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </section>
    );
};

export default Create;
