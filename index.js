const fs = require("fs");
const os = require("os");

module.exports = () =>{
    const env = fs.readFileSync(process.env.ENV_FILE, process.env.ENCODING).split(os.EOL);
    /**
     * @returns {Array} Returns all values and keys stored in the file.
     */
    let list = () =>{
        let list = [];
        env.forEach(line => {
            if(line.length > 0){
                list.push(line.split("="))
            }
        });
        return list
    }
    /**
     * @returns {Array} Returns all keys in the file.
     */
    let keys = () =>{
        let keys = [];
        env.forEach(line => {
            if(line.length > 0){
                keys.push(line.split("=").shift())
            }
        });
        return keys
    }
    /**
     * @returns {Array} Returns all values in the file.
     */
    let values = () =>{
        let values = [];
        env.forEach(line => {
            if(line.length > 0){
                values.push(line.split("=").pop())
            }
        });
        return values
    }
    /**
     * Synchronously writes the changed content back to the file.
     * @param {*} content The file content.
     * @returns {Boolean} Returns a boolean true if the the task is performed.
     */
    let write = (content) =>{
        try {
            fs.writeFileSync(process.env.ENV_FILE, content, {flag:"w", encoding:process.env.ENCODING});
            return true
        } catch (error) {
            console.log(error)
        }
        return false
    }
    return {
        /**
         * @returns {Array} Returns all values and keys stored in the file.
         */
        list: () =>{
            return list()
        },
        /**
         * @returns {Array} Returns all keys in the file.
         */
        keys: () =>{
            return keys()
        },
        /**
         * @returns {Array} Returns all values in the file.
         */
        values: () =>{
            return values()
        },
        /**
         * Shows the selected key value from the file.
         * @param {*} key The key name of the value to be shown.
         * @returns Returns a String if the value exists, undefined if the key is not set or null if the value is null.
         */
        view: (key) =>{
            return values()[keys().indexOf(key)].length > 0 ? values()[keys().indexOf(key)] : undefined
        },
        /**
         * Shows the selected key value from the process env.
         * @param {*} key The key name of the value to be shown.
         * @returns Returns a String if the value exists or undefined if the value is not set.
         */
        eview: (key) =>{
            return process.env[key] ? process.env[key] : undefined
        },
        /**
         * Synchronously modifies the file, replacing the key value if it already exists.
         * @param {*} key The key name of the value to be changed.
         * @param {*} value The data to write. The value is not coerced to a string and cannot be equals to zero.
         * @param {*} env If set to 1 it will also update your process variable.
         * @returns {Boolean} The procedure finish status.
         */
        edit: (key, value, environment) =>{
            return keys().indexOf(key) !== -1 ? (env.splice(keys().indexOf(key), 1, `${key}=${value}`), write(env.join(os.EOL), environment && (process.env[key] = value))) : false
        },
        /**
         * Synchronously removes the key and value from the file.
         * @param {*} key The key name of the value to be removed.
         * @param {*} recursive The authorization to remove the key. If not supplied, the default of `false` is used and the key won't be removed.
         * @param {*} env If set to 1 it will also update your process variable.
         * @returns {Boolean} The procedure finish status.
         */
        remove: (key, environment) =>{
            return keys().indexOf(key) !== -1 ? (env.splice(keys().indexOf(key), 1, `${key}=`), write(env.join(os.EOL), environment && (process.env[key] = ''))) : undefined
        }
    }
    
};