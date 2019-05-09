import { IsFunc } from './filter';

/**
 * 检查输入是否为函数，并返回一个一定可以调用的函数
 *
 * @param {function} func
 * @return {function}
 */
export function CallFunc(func) {
  // return typeof func === 'function';
  return IsFunc(func) ? func : () => {};
}

/**
 * 检查输入是否为函数，如果是，则直接调用，把从（包含）第二个参数起的所有参数传入到该函数中
 *
 * @return {*} 函数执行后的结果
 */
export function Call() {
  const [func, ..._arguments] = arguments;
  return IsFunc(func) && func.apply(this, _arguments);
}