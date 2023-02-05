import { Request, Response } from 'express'
// // class NamedValue<T> {
// //     private _value: T | undefined;
  
// //     constructor(private name: string) {}
  
// //     public setValue(value: T) {
// //       this._value = value;
// //     }
  
// //     public getValue(): T | undefined {
// //       return this._value;
// //     }
  
// //     public toString(): string {
// //       return `${this.name}: ${this._value}`;
// //     }
// //   }
  
// //   export default new NamedValue<number>('myNumber');
// //   value.setValue(10);
// //   console.log(value.toString()); // myNumber: 10

// class GenericNumber<NumType> {
//     zeroValue: NumType;
//     add: (x: NumType, y: NumType) =>{
//         return Num
//     } NumType;
// }

// let myGenericNumber = new GenericNumber<number>();
// console.log(myGenericNumber.zeroValue)
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     console.log(x + y)
//   return x + y;
// };

// export default new GenericNumber;

// Interface with classes

// interface ClockInterface {
//     currentTime: Date;
//     // setTime(d: Date): void;
//   }
   
//   class Clock implements ClockInterface {
//   currentTime: Date = new Date();
// //   setTime(d: Date = ) {
// //     console.log(d);
// //     this.currentTime = d;
// //   }

//   setTimeInnerFunction(req: Request, res: Response) {
    
//     let date: Date = new Date();
//     // this.setTime(date);
//   }
//     // constructor(h: number, m: number) {}
//   }

//   export default new Clock;

// interface Collection<T> {
//     add(o: T): void;
//     remove(o: T): void;
// }
interface Collection<T> {
    add(O: T): void;
    remove(O: T): void

}

// class List<T> implements Collection<T>{
//     private items: T[] = [];

//     add(o: T): void {
//         this.items.push(o);
//     }
//     remove(o: T): void {
//         let index = this.items.indexOf(o);
//         if (index > -1) {
//             this.items.splice(index, 1);
//         }
//     }
// }

class List<T> implements Collection<T> {
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o)
    }
    remove(O: T): void {
        
    }
}
// let list = new List<number>();
export default new List;