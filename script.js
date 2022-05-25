let entryList = [{ task: "tv tv tv", hr: 33 }];
let badList = [];

// Get the data on form submit
const handleOnSubmit = (e) => {
  // e is variable to store

  // FormData helps to use the method from the API like get() in the browser
  const formDt = new FormData(e);
  const task = formDt.get("task");
  const hr = formDt.get("hr");
  const obj = {
    task,
    hr,
  };
  entryList.push(obj);
  display(entryList);
};

// display entrylist on the DOM
const display = (taskArg) => {
  let str = "";
  taskArg.map((item, i) => {
    str += `
<tr>
       <td>${item.task}</td>
                                <td>${item.hr}</td>
                                <td class="text-end">
                                    <button 
                                    onclick =(handleOnDeleteEntry(${i}))
                                    class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                    <button 
                                    onclick ="switchToBadList(${i})"
                                    class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></button>
         </td>
 </tr>
                            `;
  });
  document.getElementById("entryList").innerHTML = str;
};

// display badlist on the DOM
const badListDisplay = (arg) => {
  let str = "";
  arg.map((item, i) => {
    str += `
<tr>
       <td>${item.task}</td>
                                <td>${item.hr}</td>
                                <td class="text-end">
                                  
                                    <button 
                                    onclick ="switchToEntryList(${i})"
                                    class="btn btn-success"><i class="fa-solid fa-arrow-left"></i></button>
                                      <button 
                                    onclick =(handleOnDeleteBad(${i}))
                                    class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
         </td>
 </tr>
                            `;
  });
  document.getElementById("badList").innerHTML = str;
};

// delete item from the list
const handleOnDeleteEntry = (i) => {
  if (!confirm("Are you sure you want to delete this?")) return;
  const filteredArg = entryList.filter((item, index) => index !== i);
  entryList = filteredArg;
  display(entryList);
};

// delete from bad list
const handleOnDeleteBad = (i) => {
  if (!confirm("Are you sure you want to delete this?")) return;
  const filteredArr = badList.filter((item, index) => index !== i);
  badList = filteredArr;

  badListDisplay(badList);
};

display(entryList);

// switch data from entry list to the bad list
const switchToBadList = (i) => {
  const itemToBeSwitched = entryList.splice(i, 1);
  badList.push(itemToBeSwitched[0]);
  display(entryList);
  badListDisplay(badList);
  console.log(badList);
};

// switch data from bad list to entry list
const switchToEntryList = (i) => {
  const itemToBeSwitched = badList.splice(i, 1);
  entryList.push(itemToBeSwitched[0]);
  display(entryList);
  badListDisplay(badList);
};
