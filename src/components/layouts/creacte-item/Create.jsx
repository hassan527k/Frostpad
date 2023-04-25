import React from 'react';
import img from '../../../assets/images/background/img-create-item.jpg'

const Create = () => {
return (
    <section className="tf-section create-item pd-top-0 mg-t-40">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-create-item-content">
                        <div className="form-create-item">
                            <div className="sc-heading">
                                <h3>Create Presale</h3>
                                <p className="desc">Create a custom presale for your token</p>
                            </div>
                            <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">
                                {/* <label className="uploadFile">
                                    <span className="filename">Choose Item</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label> */}
                                <div className="input-group">
                                    <input id="comment-message" name="message" type="text" placeholder="Contract Address" required />
                                </div> 
                                <p className="desc"> .</p>
                                <h4 className="desc">⫸ Presale Details</h4>
                                <p className="desc"> .</p>
                                <p className="desc">The Presale Rate defines how many tokens contributors get per BNB, the listing Rate sets how many tokens per BNB on PancakeSwap</p>
                                <div className="input-group">
                                    <input name="number" type="number" placeholder="Presale Rate" required />
                                    <input name="number" type="number" placeholder="Listing Rate" required />
                                </div>
                                <p className="desc">SoftCap is the minimum amount required for a successful presale, HardCap is the target limit of raised capital</p>
                                <div className="input-group">
                                    <input name="number" type="number" placeholder="Softcap" required />
                                    <input name="number" type="number" placeholder="Hardcap" required />
                                </div>
                                <p className="desc">Minimum and maximum BNB each wallet can contribute</p>
                                <div className="input-group">
                                    <input name="number" type="number" placeholder="Minumum" required />
                                    <input name="number" type="number" placeholder="Maximum" required />
                                </div>
                                
                                <p className="desc">Liquidity % going to PancakeSwap and its unlock date</p>
                                <div className="input-group">
                                    <input name="number" type="number" placeholder="Liquidity % for PancakeSwap" required />
                                    <input name="date" type="date" placeholder="Unlock Date" required />
                                </div>
                                <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="sale" name="fav_language" />
                                        <label htmlFor="sale">Whitelist Presale</label>
                                    </div>
                                    {/* <div className="btn-check">
                                        <input type="radio" id="price" name="fav_language" />
                                        <label htmlFor="price">
                                            Instant Sale Price
                                        </label>
                                    </div>
                                    <div className="btn-check">
                                        <input type="radio" id="purchase" name="fav_language" />
                                        <label htmlFor="purchase">
                                            Unlock Purchased
                                        </label>
                                    </div> */}
                                </div>
                                <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Whitelisted Wallet Address list" aria-required="true"></textarea>  
                                
                                <p className="desc"> .</p>
                                <h4 className="desc">⫸ Presale Schedule</h4>
                                <p className="desc"> .</p>
                                <p className="desc">Start Time:</p>
                                <div className="input-group">
                                    <input name="name" type="datetime-local" placeholder="Liquidity % for PancakeSwap" required />
                                </div>
                                <p className="desc">End Time:</p>
                                <div className="input-group">
                                    <input name="name" type="datetime-local" placeholder="Liquidity % for PancakeSwap" required />
                                </div>

                                <p className="desc"> .</p>
                                <h4 className="desc">⫸ Project Details</h4>
                                <p className="desc"> .</p>
                                <p className="desc">Enter your project details</p>
                                <div className="input-group">
                                    <input id="comment-message" name="message" type="text" placeholder="Project Name" required />
                                </div> 
                                <div className="input-group">
                                <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Project Description" aria-required="true"></textarea>
                                </div>
                                <div className="input-group">
                                <input id="comment-message" name="message" type="text" placeholder="Website Link" required />
                                <label className="uploadFile">
                                    <span className="filename">Upload Logo</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label>
                                </div>
                                <p className="desc">Add link to your project's introduction YouTube video to be embedded on your presale page</p>
                                <div className="input-group">
                                    <input id="comment-message" name="message" type="text" placeholder="Introductory Video Link" required />
                                </div> 
                                <p className="desc">Add your social links</p>
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="YouTube" required />
                                    <input name="name" type="text" placeholder="Twitter" required />
                                </div>
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="Telegram" required />
                                    <input name="name" type="text" placeholder="Discord" required />
                                </div>
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="Github" required />
                                    <input name="name" type="text" placeholder="Instagram" required />
                                </div>
                                <div className="input-group">
                                    <input name="name" type="text" placeholder="LinkedIn" required />
                                    <input name="name" type="text" placeholder="Reddit" required />
                                </div>



                                {/* <div className="input-group">
                                    <input name="name" type="text" placeholder="Audit Report Link" required />
                                    <label className="uploadFile">
                                    <span className="filename">Upload PDF</span>
                                    <input type="file" className="inputfile form-control" name="file" />
                                    <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                </label>
                                    <input name="number" type="text" placeholder="Start date" required />
                                </div> */}


                                <button name="submit" type="submit" id="submit"
                                    className="sc-button style letter style-2"><span>Create Presale</span> </button>
                            </form>
                        </div>
                        {/* <div className="form-background">
                            <img src={img} alt="Bidzen" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Create;
