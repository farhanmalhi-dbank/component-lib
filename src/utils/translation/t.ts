import english from '../../locales/en.json';

const t = (key: string) => {
  let keys = key.split('.');
  if (keys.length === 1) {
    return english[key] ? english[key] : key;
  } else {
    let value = english;
    for (let index = 0; index < keys.length; index++) {
      if (value[keys[index]]) {
        value = value[keys[index]];
      } else {
        return key;
      }
    }
    return value ? value : key;
  }
};

export default t;
