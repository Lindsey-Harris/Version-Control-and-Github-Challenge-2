Array.contains

const array = ['hello', 'luffy', 'black mamba', 'goat', 'girl']


function containsString(array, searchString) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === searchString) {
        return true;
      }
    }
    return false;
  }

  console.log(containsString(array, 'girl'))