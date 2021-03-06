// Intersection of Two Linked Lists

// var getIntersectionNode = function(headA, headB) {
//   //make an object with keys being the nodevals and values being an array of the nodes
//   //go through one linked list, map it out
//   //for the next linked list, check if the value exists in the object
//   //if it does, go through the array, and see if the current node matches any of those nodes
//   //if yes, return that node

//   const listATracker = {}

//   let curNodeA = headA
//   while(curNodeA !== null){
//       if(listATracker[curNodeA.val]){
//           listATracker[curNodeA.val].push(curNodeA)
//       } else {
//           listATracker[curNodeA.val] = [curNodeA]
//       }
//       curNodeA = curNodeA.next
//   }

//  let result = null;
//   let curNodeB = headB
//   while(curNodeB !== null){
//       if(listATracker[curNodeB.val]){

//           for(const nodeA of listATracker[curNodeB.val]){
//               if(curNodeB === nodeA){
//                   result = curNodeB;
//                   break;
//               }
//           }
//           if(result){
//               break;
//           }
//       }
//       curNodeB = curNodeB.next
//   }
//   return result
// };

function twoLinkedLists(headA, headB) {
  //pointers will simultaneously go through each node in each list
  //when one hits null first, it switches over to the other head and continues
  //eventually, the gap between the two points lessens
  //they either both end on null or the intersection

  let a = headA;
  let b = headB;

  while (a != b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }
  return a;
}

//time - O(N)
//space - O(1)
