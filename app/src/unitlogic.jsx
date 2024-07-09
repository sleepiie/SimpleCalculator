export const initialState = {
    currentValue: "0",
  };
  
  const unitConversionRates = {
    meter: {
      kilometer: 0.001,
      centimeter: 100,
    },
    kilometer: {
      meter: 1000,
      centimeter: 100000,
    },
    centimeter: {
      meter: 0.01,
      kilometer: 0.00001,
    },
  };
  
  const convertUnits = (value, inputUnit, outputUnit) => {
    if (!value || !inputUnit || !outputUnit || inputUnit === outputUnit) {
      return value;
    }
  
    const inputValue = parseFloat(value);
    const conversionRate = unitConversionRates[inputUnit][outputUnit];
    
    if (!conversionRate) {
      return value;
    }
  
    const convertedValue = inputValue * conversionRate;
    return convertedValue.toString();
  };
  
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0") {
      return { ...state, currentValue: `${value}` };
    }
    return {
      ...state,
      currentValue: `${state.currentValue}${value}`,
    };
  };
  
  export const handleClear = (state) => {
    return initialState;
  };
  
  export const handleRemove = (state) => {
    if (state.currentValue.length === 1) {
      return { ...state, currentValue: "0" };
    }
    return {
      ...state,
      currentValue: state.currentValue.slice(0, -1),
    };
  };
  
  export default convertUnits;
  