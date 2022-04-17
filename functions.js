function viewNFT() {
    var contract = new web3.eth.Contract(abi, '0x7E785284948348515ae8E9d5455Ca7D8b21717e1'); // CLOCKS NFT

    $("#lang1").html(content);
    var content = "<p></p>";    
    for(x = 1; x < 92; x++){
    counter=0;
    var event = contract.methods.tokenURI(x).call()
        .then(function (result) {
        content += "<a href=" + result + " target=_blank> "+counter.toString()+",</a>";
        $("#lang").html(content);
    counter++;
            });
    var event = contract.methods.ownerOf(x).call()
        .then(function (result) {
        if (result == zombieMaster) content += " <-mine, ";
        $("#lang").html(content);
        });
    };

    var event = contract.methods.balanceOf(zombieMaster).call()
        .then(function (result) {
        var content = "Your CLOCKS NFTs amount is:  ";
            console.log(result);
        content += JSON.stringify(result.toString());
        $("#lang1").html(content);
        });
};

function viewNFT1() {
    //if (!zombieMaster) location.reload(true);
    var tokenId = $("#tokenId").val();
    var contract = new web3.eth.Contract(abi, '0x7E785284948348515ae8E9d5455Ca7D8b21717e1'); // CLOCKS NFT
    
    var event = contract.methods.ownerOf(tokenId).call()
        .then(function (result) {
        var content = "<br>Owner of this token ID:  ";
            console.log(result);
        content += JSON.stringify(result.toString());
        $("#lang2").html(content);
        });
     
    var event = contract.methods.tokenURI(tokenId).call()
        .then(function (result) {
        var content = "Metadata uri:  <br>";
            console.log(result);
        content += JSON.stringify(result.toString());
        content += "<p><br><iframe src=./items/"+tokenId+".html width=404 height=404></iframe><br><br></p>";
        $("#frame").html(content);
        });
};