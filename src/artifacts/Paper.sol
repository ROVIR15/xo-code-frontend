pragma solidity ^0.6.1; 
pragma experimental ABIEncoderV2;

contract Paper{
    struct Grade{uint writing;uint listening;uint reading;}
    mapping (uint => Grade) public grades;
    address public person; bytes32 public name; uint current;
    address private administrator; 
    modifier isAdministrator() {require(msg.sender == administrator, "Caller is not owner");
        _;
    }
    
    constructor(address _person, bytes32 _name, uint _date, uint a, uint b, uint c) public {
        person = _person;
        name = _name;
        administrator = msg.sender;
        current = _date;
        grades[_date] = Grade(a, b, c);
    }

    function setChanges(uint _date, uint _W, uint _L, uint _R) public isAdministrator { grades[_date] = Grade(_W, _L, _R); current = _date; }
}
