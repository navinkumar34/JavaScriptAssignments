//Given Input :
//var input = [
//     {
//          "id": 1,
//          "title": "Title 1",
//          "childrens": [
//               {
//                    "id": 2,
//                    "title": "Title 2",
//                    "childrens": []
//               }
//          ]
//     },
//     {
//          "id": 3,
//          "title": "Title 3",
//          "childrens": [
//               {
//                    "id": 4,
//                    "title": "Title 4",
//                    "childrens": [
//                         {
//                              "id": 5,
//                              "title": "Title 5",
//                              "childrens": []
//                         }
//                    ]
//               }
//          ]
//     }
//]
//
//Expected output :
//var output = [
//     {
//          "id": 1,
//          "title": "Title 1",
//          "childrens": []
//     },
//     {
//          "id": 2,
//          "title": "Title 2",
//          "childrens": []
//     },
//     {
//          "id": 3,
//          "title": "Title 3",
//          "childrens": []
//     },
//     {
//          "id": 4,
//          "title": "Title 4",
//          "childrens": []
//     },
//     {
//          "id": 5,
//          "title": "Title 5",
//          "childrens": []
//     }
//]

//Solution :
const input = [
    {
        "id" : 1,
        "title" : "Title1",
        "childrens" : [
            {
                "id" : 2,
                "title" : "Title2",
                "childrens" : []
            }
        ]
    },
    {
        "id" : 3,
        "title" : "Title3",
        "childrens" : [
            {
                "id" : 4,
                "title" : "Title4",
                "childrens" : [
                    {
                        "id" : 5,
                        "title" : "Title5",
                        "childrens" : []
                    }
                ]
            }
        ]
    }
];

const converter = (inobj , arr ) =>{
   if(inobj.childrens.length == 0){
       arr.push(inobj);
       return arr;
   } 
    else{
        let newobj={};
        newobj.id = inobj.id;
        newobj.title = inobj.title;
        newobj.childrens = [];
        arr.push(newobj);
        return converter(inobj.childrens[0],arr);
    }
};

const supplier = (arr) => {
    let outarr = []
    arr.forEach(element =>
                outarr.push(converter(element, []))
               );
    return outarr.flat(2);
};

const output = supplier(input);
console.log(output);