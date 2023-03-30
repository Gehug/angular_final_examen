
export class User {
    public id: number;
    public username: string;
    public email: string;
    public address: Address
    public phone: string;
    public website: string;
    public company: Company
}


class Address {

    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: Geo;



}


class Geo {
    public lat: string
    public lng: string
}

class Company {
    public name: string;
    public catchPhrase: string;
    public bs: string;

}


// https://jsonplaceholder.typicode.com/users/1

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
