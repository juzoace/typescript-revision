import { Request, Response } from 'express'
import CustomerUtility from "../utils/customer";
import { publisher } from "../services/broker/publisher";
import { YieldExpression } from 'typescript';

class CustomerController {

    getCustomersLocatedWithinRadius (req: Request, res: Response) {
        
        // Read data from the text file 
        const closeCustomerId = CustomerUtility.getDataFromFile();

        // Send result to message broker
        const messageToBroker = new publisher();

       // If it fails to connect, log error and send response back to client
       messageToBroker.init(closeCustomerId, res);

    let point : {
        school: string,
        age: number
    } = {
        school: 'Bosby',
        age: 18
    }
    // const boy: string = 'chima';
    const logPoint = ({school, age}: {school: string, age: number}) : void=> {

    }

    logPoint(point)

    const profile = {
        name: 'ALEX',
        age: 20,
        coords: {
            lat: 0,
            lng: 15
        },
        setAge(age: number): void {
            this.age = age;
        }
    }

    // With Javascript
    // const { age } = profile;

    // With typescript
    // const { age, name }: { age: number, name: string } = profile;

    // With Javascript
    // const { coords: { lat, lng }} = profile

    // With typescript
    // const { coords: { lat, lng } }: { coords: { lat: number, lng: number }} = profile;

    // Arrays with typescript
    const carMakers: string[] = ['ford', 'toyota'];

    const movieMakers :any[][] =  [ ['boy', 98] ]; // item inside array must be array (whose value is set to any)

    // Tuples: Array-like structure where each element represents some property of a record
    type Drink = [string, boolean, number];
    const pepsi: Drink = ['brown', true, 890];

    interface Vehicle {
      name: string;
        year: Date;
        broken: boolean;
        summary(): string
    }

    const oldCivic: { name: string, year: Date, broken: boolean, summary: ()=> string } = {
        name: 'civic',
        year: new Date(),
        broken: true,
        summary(): string {
            return `Name: ${this.name}`
        }
    }

    const printVehicle = (vehicle: Vehicle): void => {
        console.log(vehicle.summary())
    }

    printVehicle(oldCivic);

    // Interface with objects
    interface Box {
        contents: number;
      }
       
      let xy: Box = {
        contents: 99,
      };
       console.log(xy);

    // function printData<T>(data: T) {
    //     console.log("data: ", data);
    // }
    
    // printData(2);
    // printData("hello");
    // printData(true);
    // printData([1, 2, 3, 4, 5, 6]);
    // printData([1, 2, 3, "hi"]);
    // printData({ name: "Ram", rollNo: 1 });

    // Function annotation without interfaces or generic but normal type annotation 
    const logNumber: (i: number) => void = (i: number) => {
        console.log('Hey')
    }

    logNumber(4)
    // Rewriting using generics
    // const logNumber: <X>(arg: X ) => X = <X>(arg: X) => {

    //     return arg;
    // }

    // const valueFromLog = logNumber(39090);
    // console.log(valueFromLog);


    const boy: <G>(arg: G) => G[] = <G>(arg: G) => {
        return [arg, arg]
    }
    console.log(boy(7));

    function printData<X,Y>(data1: X, data2: Y): [X, Y]{
        console.log("Output is: ", data1, data2);
        // console.log(data2.length);
        return [data1, data2];
    }
    
    // printData<string, string>("Hello", "World");
    printData(123, ["Hi", 123]);

    // With generic
    const printDataFunctionWithArray = <X, Y> (first_name: X, last_name: Y) : [X, Y] => {
        console.log(`${first_name} ${last_name} `)
        console.log([first_name, last_name])
        return [first_name, last_name];
    }

    printDataFunctionWithArray('uzochukwu', 'nwigwe')

    function interfaceDeclaration<X,Y,Z>(data1:X, data2:Y, data3:Z) {
        console.log(typeof data3)
        console.log(`${data1}, ${data2}, ${data3}`)
    }


    function foo<T>(abc: T): T {
        console.log(abc);
        return abc;
    }
    
    const x = { abc: 123 };
    foo(x);
    
    const y: number = 123;
    foo<number>(y);

    const z : number[]= [1, 3, 6];
    foo(z)

    // interfaceDeclaration([3, 7], 'Nania', {name: 'Hello world'});

    // Generics with interfaces
    interface UserData<X,Y> {
        name: X;
        rollNo: Y;
    }
    
    const user: UserData<string, number> = {
        name: "Ram",
        rollNo: 1
    }
    console.log(user)

    // Interface with generics
    interface PlayerDetails <x, y, z> {
        name: x,
        age: y,
        position: z
    }

    const player : PlayerDetails<string, number, string> = {
        name: 'uzo',
        age: 28,
        position: 'striker'
    }

    function identity<Type>(arg: Type): Type {
        //  console.log(arg.length); error: Property 'length' does not exist on type 'Type'.
        return arg;
    }

  // Generic interface and function
  interface keyValueProcessor<T, U> {
    (key: T, val: U): void;
  };
  
  function processKeyPairs<T, U>(key:T, value: U): void {
    console.log(`processKeyPairs: key = ${key}, value = ${value}`)
  }

  let numKVProcessors: keyValueProcessor<number, string> = processKeyPairs;
  numKVProcessors(1, 'Bill')

    // 
    // function loggingIdentity<Type> (arg: Array<Type>): Array<Type> {
    //     return arg;
    // }

    // OR

      function loggingIdentity<Type>(arg: Type[]): Type[] {
        console.log(typeof arg[1]);
        return arg;
    } 

    loggingIdentity(['is',8,9,0,7])

    // Using generic interface
    interface GenericIdentityFn {
        <Type>(arg: Type): Type;
    }

    function identity2<Type>(arg: Type): Type {
        return arg;
    }
    identity2('hello')

    const myIdentity: GenericIdentityFn = identity2;

    interface Lengthwise {
        length: number;
      }
       

      function loggingIdentity3<Type extends Lengthwise>(arg: Type): Type {
        console.log(arg.length); // Now we know it has a .length property, so no more error
        return arg;
      }
      loggingIdentity3({ length: 10, value: 3 });
    // loggingIdentity3('hello')

    // Tuple
    type StringNumberPair = [string, number];
    let array50: StringNumberPair = ['80', 90]

    // Extend interfaces
    interface BasicAddress {
        name?: string;
        street: string;
        city: string;
        country: string;
        postalCode: string;
      }
       
      interface AddressWithUnit extends BasicAddress {
        unit: string;
      }

      
}   

}

export default new CustomerController;