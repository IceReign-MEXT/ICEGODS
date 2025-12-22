// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IceGodsVault {
    address public founder;
    uint256 public monthlyRate = 0.002 ether; // ~-6 USD
    mapping(address => uint256) public subscriptionEnd;

    event PaymentReceived(address indexed user, uint256 amount, uint256 expiry);

    constructor() {
        founder = msg.sender;
    }

    function subscribe() public payable {
        require(msg.value >= monthlyRate, "Insufficient payment");
        if (subscriptionEnd[msg.sender] < block.timestamp) {
            subscriptionEnd[msg.sender] = block.timestamp + 30 days;
        } else {
            subscriptionEnd[msg.sender] += 30 days;
        }
        emit PaymentReceived(msg.sender, msg.value, subscriptionEnd[msg.sender]);
    }

    function withdraw() public {
        require(msg.sender == founder, "Only founder can withdraw");
        payable(founder).transfer(address(this).balance);
    }
}
