// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract PresaleContract {
  
    struct Presale {
        address owner;
        uint256 presalePrice;
        uint256 listingPrice;
        uint256 softcap;
        uint256 hardcap;
        uint256 minContribution;
        uint256 maxContribution;
        uint256 startTime;
        uint256 endTime;
        uint256 tokensToSell;
        uint8 liquidityPercentage;
        uint256 liquidityUnlockTime;
        bool haveWhitelistedUsers;
        uint256 totalInvestment;
    }
    
    mapping(address => mapping (address => bool)) whitelistedUsers;
    mapping(address => mapping(address=>uint)) contributions;
    mapping(address => Presale) private presales;

    mapping(address => address[]) private tokenOwner;

    function createPresale(
        address _tokenAddress,
        uint256 _presalePrice,
        uint256 _listingPrice,
        uint256 _softcap,
        uint256 _hardcap,
        uint256 _minContribution,
        uint256 _maxContribution,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _tokensToSell,
        uint8 _liquidityPercentage,
        bool _haveWhitelistedUsers,
        address[] memory _whitelistedUsers,
        uint256 _liquidityUnlockTime
    ) external {
        require(_startTime >= block.timestamp, "Presale: Start time must be in future");
        require(_endTime > _startTime, "Presale: End time must be after start time");
        require(_hardcap > _softcap, "Presale: Hardcap must be greater than softcap");
        require(_maxContribution > 0, "Presale: Max contribution must be greater than 0");
        require(_minContribution > 0, "Presale: Min contribution must be greater than 0");

        presales[_tokenAddress] = Presale(msg.sender,
        _presalePrice,
        _listingPrice,
        _softcap,
        _hardcap,
        _minContribution,
        _maxContribution,
        _startTime,
        _endTime,
        _tokensToSell,
        _liquidityPercentage,
        _liquidityUnlockTime,
        _haveWhitelistedUsers,
        0
        );
        
        if (_haveWhitelistedUsers) {
            addWhitelistUser(_tokenAddress, _whitelistedUsers);
        }
        tokenOwner[msg.sender].push(_tokenAddress);
    }

    function getInvestment(address _tokenAddress) external view returns (uint256) {
        Presale storage presale = presales[_tokenAddress];
        return presale.totalInvestment;
    }

    function getPresalesByOwner() external view returns (address[] memory) {
        return tokenOwner[msg.sender];    
    }



    function addWhitelistUser(address _tokenAddress, address[] memory _whitelistedUsers ) internal {
        for (uint256 i = 0; i < _whitelistedUsers.length; i++) {
                whitelistedUsers[_tokenAddress][_whitelistedUsers[i]]= true;
        }
    }
    //     function withdraw(address payable _presaleOwner, uint256 _presaleIndex) external {
    //     Presale storage presale = presales[_presaleOwner];
    //     require(block.timestamp > presale.endTime, "Presale has not ended");
    //     require(presale.totalInvestment >= presale.softcap, "Softcap not reached");
    //     require(msg.sender == presale.owner, "Only the presale owner can withdraw funds");
    //     uint256 balance = address(this).balance;
    //     uint256 liquidity = balance * presale.liquidityPercentage / 100;

    //     // Transfer liquidity to a PancakeSwap pool
    //     address[] memory path = new address[](2);
    //     path[0] = address(this);
    //     path[1] = IUniswapV2Router02(pancakeSwapRouter).WETH();
    //     uint[] memory amounts = IUniswapV2Router02(pancakeSwapRouter).swapExactETHForTokens{value: liquidity}(
    //         0,
    //         path,
    //         address(this),
    //         block.timestamp + 360
    //     );
    //     uint256 tokenAmount = amounts[1];

    //     // Transfer tokens to the presale owner
    //     IERC20 token = IERC20(_presaleOwner);
    //     require(token.transfer(_presaleOwner, tokenAmount), "Failed to transfer tokens");

    //     // Transfer remaining balance to the presale owner's wallet
    //     (bool success, ) = _presaleOwner.call{value: address(this).balance}("");
    //     require(success, "Failed to transfer remaining balance");
    // }
}
