const createNode = function(value){
    this.value = value;
    this.children = {};
    this.isEnd = false;
}

var Trie = function() {
    this.root = new createNode(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    function recursion(word, node){
        if(word.length == 0){
            node.isEnd = true;
            return;
        }

        if(node.children[`${word[0]}`] === undefined){
            node.children[`${word[0]}`] = new createNode(word[0]);
        }

        recursion(word.slice(1), node.children[`${word[0]}`]);
    }
    recursion(word, this.root);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word){
    function recursion(word, node){
        if(word.length == 0 && node.isEnd)return true;

        if(node.children[word[0]] === undefined){
            return false;
        } else {
            return recursion(word.slice(1), node.children[word[0]]);
        }
    }
    return recursion(word, this.root);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {

    function recursion(word, node){
        if(word.length == 0)return true;

        if(node.children[word[0]] === undefined){
            return false;
        } else {
            return recursion(word.slice(1), node.children[word[0]]);
        }
    }
    return recursion(prefix, this.root);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */