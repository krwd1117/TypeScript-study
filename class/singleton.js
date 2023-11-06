"use strict";
// 싱글톤 패턴
class NetworkManager {
    static getInstance() {
        // NetworkManager로부터 만든 object가 없으면, 만들어서 리턴
        if (NetworkManager.instance === null) {
            NetworkManager.instance = new NetworkManager();
        }
        return NetworkManager.instance;
    }
    // private를 통해 생성자를 호출할 수 없도록 함
    constructor() {
    }
}
NetworkManager.instance = null;
const a1 = NetworkManager.getInstance();
const b1 = NetworkManager.getInstance();
console.log(a1 === b1);
