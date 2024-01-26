import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";


actor Token {

    
    var owner : Principal = Principal.fromText("iqhs6-7juce-ltvge-rnm7k-6zxps-uv5ok-pnlfa-p4lbq-duy5x-tspiu-sqe");
    var totalSupply : Nat = 1000000000;
    var symbol : Text = "WITT";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    balances.put(owner, totalSupply);


    public query func balanceOf(who: Principal) : async Nat {

        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result;
        };

        return balance;
    };
};
