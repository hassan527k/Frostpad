import React , { useRef , useState , useEffect } from 'react';
import TopBar from './TopBar';
import { Link , useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo/logo_dark.png'
import logo2x from '../../assets/images/logo/logo_dark@2x.png'
import logolight from '../../assets/images/logo/logo.png'
import logolight2x from '../../assets/images/logo/logo@2x.png'
import menus from "../../pages/menu";
import DarkMode from "./DarkMode"
import {ethers} from 'ethers';

import icon from '../../assets/images/icon/connect-wallet.svg'

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef (null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const [walletAddress, setWalletAddress] = useState("")

    const [barrer, setBarrer] = useState("")
    const [space, setSpacer] = useState("")
    // const [walletAddress, setWalletAddress] = useState("")


    const [activeIndex, setActiveIndex] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const[defaultAccount, setDefaultAccount] = useState('Connect MetaMask');
    const[userBalance, setUserBalance] = useState(null);
    const[ConnButtonText, setConnButtonText] = useState('Connect MetaMask');
    useEffect(() =>{
        checkConnectedWallets();
    });
    const connectWallet = async() =>{
        if(typeof window!="undefined" && typeof window.ethereum!="undefined"){
            // this means that metamask is installed//
            const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
           

        }
    }
    const checkConnectedWallets = async() =>{
        if(typeof window!="undefined" && typeof window.ethereum!="undefined"){
            try{
                const account = await window.ethereum.request({method: "eth_accounts"});
                if(account.length>0){
                    setDefaultAccount((account[0]).substring(0,4)+"..."+(account[0]).substr(38));
                    setBarrer("|");
                    setSpacer(" ");
                }
                
            }
            
            catch(err){
                console.log("Error");
            }

        }
    }

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     document.title = `You clicked ${count} times`;
    //   });
    // const requestAccount = async(ethProvider: any) : Promise<Array<string>>
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        
        scrollTop >= 100 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 120 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }




    const connectWalletHandler = () =>
    {
        if(window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result=>{
                accountChangedHandler(result[0]);
            })
        }
        else{
            setErrorMessage("Please install metamask");
        }
    }
    
    const accountChangedHandler = (newAccount) =>
    {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount.toString());


    }
    const getUserBalance = (address) =>{
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
        .then(balance=>{
            setUserBalance(ethers.utils.formatEther(balance));
            // setUserBalance(balance);
        })

    }
    const handleOnClick = index => {
        setActiveIndex(index); 
    };

    window.ethereum.on('accountsChanged', accountChangedHandler);

    return <div>
      {/* <TopBar /> */}
      <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                        <div id="site-header-inner" className="flex">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className='logo-dark' src={logo} srcSet={logo2x} alt="nft-gaming" />
                                        <img id="logo_header" className='logo-light' src={logolight} srcSet={logolight2x} alt="nft-gaming" />
                                    </Link>
                                </div>
                            </div>
                            {/* <form className="form-search">
                                <input type="text" placeholder="Search here" />
                                <button><i className="far fa-search"></i></button>
                            </form> */}

                            <nav id="main-nav" className="main-nav" ref={menuLeft}>
                                <ul id="menu-primary-menu" className="menu">
                                    {
                                        menus.map((data,index) => (
                                            <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item menu-item-has-children ${activeIndex === index ? 'active' : ''} ` }   >
                                                <Link to="#">{data.name}</Link>
                                                <ul className="sub-menu" >
                                                    {
                                                        data.namesub.map((submenu,index) => (
                                                            <li key={index} className={
                                                                pathname === submenu.links
                                                                    ? "menu-item current-item"
                                                                    : "menu-item"
                                                                }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </nav>
                            <div onClick = {connectWallet} className="button-connect-wallet">
                                {/* <button onClick = {connectWalletHandler}>
                                    <span>
                                    
                                    </span>
                                    <p>
                                    {userBalance}
                                    </p>
                                </button> */}
                                <div className="sc-button wallet  style-2">
                                    <img src={icon} alt="icon" />
                                    <span >
                                        {defaultAccount.length >0
                                    ?` ${defaultAccount} ${"|"}${" "}${userBalance}${" "}ETH`
                                    : "Connect MetaMask"
                                    }</span>
                                    {/* <span >
                                        {defaultAccount.length >0
                                    ?`${userBalance}
                                    `
                                    :""
                                    }</span> */}
                                    {/* <p>
                                    <span>{userBalance}</span>
                                    </p> */}
                                </div>
                            </div>

                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </header>
  </div>;
};

export default Header;