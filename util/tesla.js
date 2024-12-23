export function decodeTeslaVin(vin) {
  if (vin.length !== 17) {
    return "Invalid VIN length. A VIN must be 17 characters.";
  }

  // Tesla models based on the 4th character
  const modelMap = {
    S: "Model S",
    3: "Model 3",
    X: "Model X",
    Y: "Model Y",
  };

  // Extract characters from the VIN
  const modelCode = vin[3]; // Tesla model (S, 3, X, Y)
  const model = modelMap[modelCode] || "Unknown Model";

  return model;
}
