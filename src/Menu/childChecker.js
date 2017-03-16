import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';

const MenuChilds = (propValue, key, componentName) => {
  const { type } = propValue[key];
  if (type !== MenuItem && type !== MenuDivider) {
    return new Error(`Invalid prop 'children[${key}]' supplied to '${componentName}', expected 'MenuItem or MenuDivider'`);
  }
  return false;
};
export default MenuChilds;
