
var WordDictionary = function() {
    this.tree = new Set();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.tree.add(word);
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    for (let item of this.tree) {
        if (item.length !== word.length) continue;
        
        let i = 0;

        while (i < item.length) {
            if (item[i] === word[i] || word[i] === '.') {
                i++;
            } else {
                break;
            }
        }

        if (i === item.length) {
            return true;
        }
    }

    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */