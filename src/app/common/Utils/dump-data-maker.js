export const NUMBER = 'NUMBER'
export const PARAGRAPH = 'STRING'

const randomString = () => {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

// 2 options bellow work

// export const ArrayMaker = {
//     type: {
//         [NUMBER]: () => parseInt(Math.random() * 10000),
//         [PARAGRAPH]: randomString()
//     },
//     fields: [],
//     addElement: (field, type) => {
//         ArrayMaker.fields.push({field, type})
//     },
//     get: (total) => {
//         let result = [];
//         for (let i = 1; i <= total; i++) {
//             const element = ArrayMaker.fields.reduce(
//                 (element, field) => {
//                     element[field.field] = ArrayMaker.type[field.type]();
//                     return element;
//                 }, {}
//             );
//             result.push(element);
//         }
//
//         return result;
//     }
// };


export class ArrayMaker {
    static addElement = (field, type) => {
        ArrayMaker.fields.push({field, type})
    }

    static get = (total) => {
        let result = [];
        for (let i = 1; i <= total; i++) {
            const element = ArrayMaker.fields.reduce(
                (element, field) => {
                    element[field.field] = ArrayMaker.type[field.type]();
                    return element;
                }, {}
            );
            result.push(element);
        }

        return result;
    }
}

ArrayMaker.fields = [];
ArrayMaker.type = {
    [NUMBER]: () => parseInt(Math.random() * 10000),
    [PARAGRAPH]: () => randomString()
};