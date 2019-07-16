'use strict';

class HashTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    add(key,value){
        let hashedKey = this.hash(key);
        if (this.map[hashedKey]){
            let current = this.map[hashedKey];
            while(current) {
                if (current.key === key) {
                    current.value = value;
                    return true;
                }
                if (current.next) {
                    current = current.next
                }
                else {
                    break;
                }
            }
            current.next = {key:key,value:value}
        } else
        {
            this.map[hashedKey]={key:key,value:value}
            return true;
        }
        return false;
    }

    hash(string){
        let key = string.toString();
        let code = 0;
        for (let i = 0 ; i <key.length ; i++ ){
            code+= ((i**key.charCodeAt(0))+(i**i))% this.size ;
        }
        return code;
    }

    get(key){
        let hashedKey = this.hash(key);
        if(!this.map[hashedKey]) {
            return 'key not found';
        }
        else
        {
            for(let data in this.map[hashedKey]){
                if(this.map[hashedKey].key === key){
                    return this.map[hashedKey].value;
                }
            }
        }
    }

}

module.exports = HashTable;