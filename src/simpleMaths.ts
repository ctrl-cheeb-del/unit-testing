export function calcAreaSquare(sideLength: number): number {
  return Math.pow(sideLength, 2);
}

export function calcAreaTriangle(width: number, height: number): number {
  return (width * height) / 2;
}

export function calcAreaCircle(radius: number): number {
  return Math.PI * Math.pow(radius, 2);
}
