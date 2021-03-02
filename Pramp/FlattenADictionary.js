/*
A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

If a certain key is empty, it should be excluded from the output (see e in the example below).

EXAMPLE

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }

Important: when you concatenate keys, make sure to add the dot character between them. For instance concatenating Key2, c and d the result key would be Key2.c.d.

Constraints:
[time limit] 5000ms
[input] Dictionary dict
[output] Dictionary
*/

function flattenDictionary(dict) {
  //loop through the inputted object
  //check if element is an object
  //if it is, call flattenDictionary on that child object
  //base case, if we reach a non-object, return a specific keyname, and its value
  //helper function helps make the specific keyname

  let map = {};

  flattenDictHelper(dict, "", map);

  return map;
}

function flattenDictHelper(dict, initKey, map) {
  for (const key in dict) {
    if (typeof dict[key] === "object") {
      if (initKey === "") {
        flattenDictHelper(dict[key], key, map);
      } else {
        flattenDictHelper(dict[key], `${initKey}.${key}`, map);
      }
    } else {
      if (initKey === "") {
        map[key] = dict[key];
      } else {
        if (key === "") {
          map[initKey] = dict[key];
        } else {
          map[`${initKey}.${key}`] = dict[key];
        }
      }
    }
  }
}

//time complexity - O(N) goes through every key in the object once
//space - o(n) new object but includes every key from original object
