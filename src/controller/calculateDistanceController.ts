import { DistanceCalculator } from "../entity/DistanceCalculator";
import { calculateDistanceValidator } from "../validator";
import { DistanceCalculatorInputDataType, DistanceCalculatorOutputDataType, ErrorType } from "../type";

const distanceCalculatorInstance = new DistanceCalculator();

export async function calculateDistanceController( data: DistanceCalculatorInputDataType ): Promise<DistanceCalculatorOutputDataType|ErrorType> {
  const response = calculateDistanceValidator( data );
  if ( response !== null )
    return response;

  const calculations = await distanceCalculatorInstance.calc( data );

  return Object.assign( calculations, { error: false } );
}
