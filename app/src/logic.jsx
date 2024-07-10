export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (value === ".") {
    // Prevent adding more than one decimal point
    if (state.currentValue.includes(".")) {
      return state;
    }
    return {
      ...state,
      currentValue: `${state.currentValue}${value}`,
    };
  }

  if (state.nextValueShouldReset) {
    return {
      ...state,
      currentValue: `${value}`,
      nextValueShouldReset: false,
    };
  }

  if (state.currentValue === "0") {
    return { ...state, currentValue: `${value}` };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${value}`,
  };
};

const formatValue = (value) => {
  const num = parseFloat(value);
  if (isNaN(num)) {
    return value;
  }
  if (num > 1e7 || num < 1e-7) {
    return num.toExponential(1);
  }
  const formattedValue = num.toFixed(3);
  return parseFloat(formattedValue).toString();
};

const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = { operator: null, previousValue: null, nextValueShouldReset: true };

  if (isNaN(current) || isNaN(previous)) {
    return state;
  }

  switch (operator) {
    case "+":
      return {
        currentValue: formatValue(previous + current),
        ...resetState,
      };
    case "-":
      return {
        currentValue: formatValue(previous - current),
        ...resetState,
      };
    case "*":
      return {
        currentValue: formatValue(previous * current),
        ...resetState,
      };
    case "/":
      return {
        currentValue: formatValue(previous / current),
        ...resetState,
      };

    default:
      return state;
  }
};

const handleRemove = (state) => {
  if (state.currentValue.length === 1) {
    return {
      ...state,
      currentValue: "0",
    };
  }
  return {
    ...state,
    currentValue: state.currentValue.slice(0, -1),
  };
};

// calculator function
const calculator = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "clear":
      return initialState;
    case "posneg":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case "operator":
      return {
        ...state,
        operator: value,
        previousValue: state.currentValue,
        nextValueShouldReset: true,
      };
    case "equal":
      return handleEqual(state);
    case "remove":
      return handleRemove(state);
    default:
      return state;
  }
};

export default calculator;
