module.exports = function(RED) {
    function BensNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
if(msg.payload.toLowerCase() =="ben"){
msg.payload = "Hello Ben - You are a wonderful person"}
else if (msg.payload.toLowerCase() == "andy"){

msg.payload = "Hello Andy you are a wonderful peron - even better than Ben"}

else {msg.payload = " I'm sorry "+msg.payload+" I don't know you!"}

		
            node.send(msg);
        });
    }
    RED.nodes.registerType("bens-node",BensNode);
}
