// let entryList = [];
// let badList = [];
// const submitHandler = (e) => {
//   const formData = new FormData(e);
//   const task = formData.get("task");
//   const hr = formData.get("hr");
//   const obj = { task, hr };
//   entryList.push(obj);
//   entryDisplay(entryList);
// };

// const entryDisplay = (inputArray) => {
//   let str = "";
//   inputArray.map((item, i) => {
//     str += `
// <tr>
//        <td>${item.task}</td>
//                                 <td>${item.hr}</td>
//                                 <td class="text-end">
//                                     <button
//                                     onclick =(handleOnDeleteEntry(${i}))
//                                     class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
//                                     <button
//                                     onclick ="switchToBadList(${i})"
//                                     class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></button>
//          </td>
//  </tr>
//                             `;
//   });
//   document.getElementById("entryList").innerHTML = str;
// };

// entryDisplay(entryList);

// // delete item from the list
// const handleOnDeleteEntry = (i) => {
//   if (!confirm("Are you sure you want to delete this?")) return;
//   const filteredArg = entryList.filter((item, index) => index !== i);
//   entryList = filteredArg;
//   entryDisplay(entryList);
// };

// // const handleOnDeleteEntry = () => {};
