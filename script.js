let entryList = [{ task: "tv tv tv", hr: 33 }];

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
                                    
                                    class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></button>
         </td>
 </tr>
                            `;
  });
  document.getElementById("entryList").innerHTML = str;
};

const handleOnDeleteEntry = (i) => {
  if (!confirm("Are you sure you want to delete this?")) return;
  const filteredArg = entryList.filter((item, index) => index !== i);
  entryList = filteredArg;
  display(entryList);
};
display(entryList);
