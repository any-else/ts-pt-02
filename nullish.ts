/**
 *  ngữ cảnh: khi mọi người call data từ phía bên server về mà chả may nó bị undefined hoặc null thì tôi
 *  không muốn nó nhận giá trị này => 1 giá trị (default) để thay thế
 */

const fetchAPI = null;

const data = fetchAPI ?? "default value";

console.log("kết quả của data", data);
