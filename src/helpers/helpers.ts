export class Helpers {
  public static isFilled = (val: string) => val !== null && val !== undefined && val !== '';

  public static getNodeByPropRecursive = (
    obj: object,
    prop: string,
    parent: object,
    shouldGetParent = false,
    resultHolder: Array<any>
  ) => {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      resultHolder.push(shouldGetParent ? parent : obj);
    } else {
      Object.entries(obj).forEach(([_, val]) => {
        if (Helpers.isFilled(val) && typeof val === 'object') {
          Helpers.getNodeByPropRecursive(val, prop, obj, shouldGetParent, resultHolder);
        }
      });
    }
  };
}
