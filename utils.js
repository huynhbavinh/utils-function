'use strict;'
/**
 * This func can change all your object value into the value you want it to be, expect the special you don't want to change
 * input : Object, keyAttribute (not change)
 * output: new Object
 * example:
 *  INPUT: const obj = {
 *      foo: false,
 *      bar: false,
 *      abc: true,
 *  }
 *  setAllAttributesObject(obj,'foo');
 *  OUTPUT: obj = {
 *      foo: true,
 *      bar: false,
 *      abc: false,
 *  }
 */
const setAllAttributesObject = (obj,keywordTab) => {
    Object.keys(obj).forEach(key => {
        key === keywordTab ? obj[key] = true : obj[key] = false;
    });
};
/**
 * This func will get all children array in Array, then return new Array with all children array value
 * input: array, nameArray
 * output: new array (include all children array)
 * example:
 *  INPUT: const array = [{
 *               'name': 'abc',
 *               'value': [{a:1,b:2,c:3}]
 *            }]
 *         const b = getArrayOf(array,'value')
 * 
 *  OUTPUT: const b = [{a:1,b:2,c:3}];
 */
const getArrayOf = (array,property) => {
    return array.reduce((prev, next) => {
        prev.push(...(next[property])|| []);
        return prev;
    }, [])
}
/**
 * This func can change all your object's attributes value into null
 * input : Object
 * output: new Object
 * example:
 *  INPUT: const obj = {
 *      foo: 1,
 *      bar: 2,
 *      abc: 3,
 *  }
 *  removeAllObjectAttributeValue(obj);
 *  OUTPUT: obj = {
 *      foo: null,
 *      bar: null,
 *      abc: null,
 *  }
 */
const removeAllObjectAttributeValue = (object) => {
    Object.keys(object).forEach(key => {
        object[key] = null;
     });
}
