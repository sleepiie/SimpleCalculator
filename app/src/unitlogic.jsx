export const initialState = {
    currentValue: "0",
  };
  
  const unitConversionRates = {
    meter: {
      kilometer: 0.001,
      centimeter: 100,
      millimeter: 1000,
      micrometer: 1000000,
    },
    kilometer: {
      meter: 1000,
      centimeter: 100000,
      millimeter: 1000000,
      micrometer: 1000000000,
    },
    centimeter: {
      meter: 0.01,
      kilometer: 0.00001,
      millimeter: 10,
      micrometer: 10000,
    },
    millimeter: {
      micrometer: 1000,
      centimeter: 0.1,
      meter: 0.001,
      kilometer: 1E-6,
    },
    micrometer: {
      millimeter: 0.001,
      centimeter: 1E-4,
      meter: 1E-6,
      kilometer: 1E-9,
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
    let formattedValue = convertedValue.toFixed(2);
    if (Math.abs(convertedValue) >= 1e+5) {
      formattedValue = (convertedValue.toExponential(1)).toString(); // Format as scientific notation with 1 decimal place
    }
    else if (Math.abs(convertedValue) <= 1e-4) {
      formattedValue = (convertedValue.toExponential(1)).toString(); // Format as scientific notation with 1 decimal place
    }
    
    return (formattedValue);
  };
  
  export const handleNumber = (value, state) => {
    if (value === "00") {
      if (state.currentValue === "0") {
        return state; // Prevent adding "00" if current value is "0"
      }
      return { ...state, currentValue: `${state.currentValue}00` };
    } 
    else if (value === ".") {
      if (!state.currentValue.includes(".")) {
        if (state.currentValue === "0") {
          return { currentValue: "0." };
        } else {
          return { currentValue: `${state.currentValue}.` };
        }
      } 
      else {
        return state;
      }
    }
    
    else if (state.currentValue === "0") {
      return { ...state, currentValue: value };
    } 
    else {
      const newValue = `${state.currentValue}${value}`.replace(/^0+(?!\.)00/, ''); 
      return {
        ...state,
        currentValue: newValue,
      };
    }
  };
  
  export const handleClear = (state) => {
    return {initialState};
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
  