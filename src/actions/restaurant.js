import { httpHandler } from "../../src/utils/axios";

export const getList = () => {
    httpHandler("get","/restaurant/list",).then((data)=>{

    });
}
// (
//     {
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// });
