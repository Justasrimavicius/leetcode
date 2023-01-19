const trieNode = function(value){
    this.value = value;
    this.children = {};
    this.isEnd = false;
}

var WordDictionary = function() {
    this.root = new trieNode(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
    function recursion(word, node){
        if(word.length == 0){
            node.isEnd = true;
            return;
        }
        if(node.children[word[0]] === undefined){
            node.children[word[0]] = new trieNode(word[0]);
        }
        return recursion(word.slice(1), node.children[word[0]]);
    }

    recursion(word, this.root);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    function recursion(word, node){
        if(word[0] == '.'){
            let allPossibleVariants = Object.values(node.children);
            for(let i = 0; i < allPossibleVariants.length; i++){
                if(recursion(word.slice(1), allPossibleVariants[i]) === true)return true;
            }
            return false;
        } else {
            if(word.length == 0){
                if(node.isEnd == true)return true;
                return false;
            }
            
            if(node.children[word[0]] === undefined){
                return false;
            } else {
                return recursion(word.slice(1), node.children[word[0]]);
            }
        }
    }
    return recursion(word, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */