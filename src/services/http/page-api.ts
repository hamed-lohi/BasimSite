// import { get, post } from "../xhr";
// //import socket from "socketio";



// // well-named functions
// export function getData(){
//   return get('');
// }
// export function setData(requestData: any){
//   return post('someUrl', requestData);
// }

import { getRequest } from ".";

export async function fetchPage(pageId: number) {
try {
  const res = await getRequest(`wp/v2/pages/${pageId}?_fields[]=id&_fields[]=title&_fields[]=parent&_fields[]=content&_fields[]=status&_fields[]=type&_fields[]=images&_fields[]=menu_order`);
  return res.data;
} catch(error) {
   //Log errors
  }
}

export async function fetchChildPages(parentId: number) {
  try {
    const res = await getRequest(`wp/v2/pages?parent=${parentId}&_fields[]=id&_fields[]=title&_fields[]=parent&_fields[]=content&_fields[]=status&_fields[]=type&_fields[]=images&_fields[]=menu_order`);
    return res.data;
  } catch(error) {
     //Log errors
    }
  }