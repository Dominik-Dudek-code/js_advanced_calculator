'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add(value) {
      this.result += value;

      return this;
    },

    subtract(value) {
      this.result -= value;

      return this;
    },

    multiply(value) {
      this.result *= value;

      return this;
    },

    divide(value) {
      if (value !== 0) {
        this.result /= value;
      } else {
        throw new Error("Can't divide by 0!");
      }

      return this;
    },

    operate(operation, value) {
      switch (operation) {
        case this.add:
          this.add(value);
          break;
        case this.subtract:
          this.subtract(value);
          break;
        case this.multiply:
          this.multiply(value);
          break;
        case this.divide:
          this.divide(value);
          break;
        default:
          throw new Error('Unknown operation');
      }

      return this;
    },

    reset() {
      this.result = 0;

      return this;
    },
  };
}

module.exports = makeCalculator;
