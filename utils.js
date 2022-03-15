'use strict;'
/**
 * This func can change all your object value into the value you want it to be, expect the special you don't want to change
 * input : Object, keyAttribute (not change)
 * output: new Object
 * example:
 *  INPUT: const obj = {
 *      foo: false,
 *      bar: false,
 *      vinz: true,
 *  }
 *  setAllAttributesTab(obj,'foo');
 *  OUTPUT: obj = {
 *      foo: true,
 *      bar: false,
 *      vinz: false,
 *  }
 */
const setAllAttributesTab = (obj,keywordTab) => {
    Object.keys(obj).forEach(key => {
        key === keywordTab ? obj[key] = true : obj[key] = false;
    });
};
