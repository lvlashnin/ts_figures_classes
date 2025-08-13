type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    const theGreatest = Math.max(a, b, c);
    const sumOfOthers = a + b + c - theGreatest;

    if (theGreatest >= sumOfOthers) {
      throw new Error(
        `Triangle cannot be formed with sides of length ${a}, ${b} and ${c}`,
      );
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor(Math.PI * radius * radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
