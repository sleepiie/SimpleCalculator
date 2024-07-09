export const initialState = {
    currentValue: "0",
    operator: null,
    previousValue: null,
  };
  
  export const handleNumber = (value, state) => {
    if (state.currentValue === "0" ) {
      if  (value === '.')
        return {
          currentValue: `${state.currentValue}${value}`,
        };
      return { currentValue: `${value}` };
    }
    if (state.currentValue === null ) {
      return { currentValue: `${value}` };
    }
  
    return {
      currentValue: `${state.currentValue}${value}`,
    };//เอาเลขมาต่อกัน
  };
  
  const handleEqual = (state) => {
    const { currentValue, previousValue, operator } = state;
  
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = { operator: null, previousValue: null };
    
    switch (operator) {
      case "+":
        return {
        
          currentValue: `${previous + current}`,
          ...resetState,
        };
      case "-":
        return {
          currentValue: `${previous - current}`,
          ...resetState,
        };
      case "*":
        return {
          currentValue: `${previous * current}`,
           ...resetState,
        }
      case "/":
        return {
          currentValue: `${previous / current}`,
          ...resetState,
        };
  
      default:
        return state;
    }
  };
  
  // calculator function
  const calculator = (type, value, state) => {
    switch (type) {
      case "number":
        if (state.operator != null) {
          
            // state.currentValue = value
            return { 
              operator : state.operator,
              previousValue : state.currentValue,
              currentValue : value 
            };

        } 
        return handleNumber(value, state);
      case "clear":
        
        return initialState;
      case "posneg":
        return {
          currentValue: `${parseFloat(state.currentValue) * -1}`,
        };
      case "percentage":
        return {
          currentValue: `${parseFloat(state.currentValue) * 0.01}`,
        };
      case "operator":
        return {
          operator: value,
          previousValue :  null,
          currentValue : state.currentValue
        };
      case "equal":
        return handleEqual(state);
      default:
        return state;
    }
  };
  
  export default calculator;