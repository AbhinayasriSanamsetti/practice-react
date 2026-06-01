function ToDo() {
  let item="buy pen"
  let date="2023-10-10"
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-4">
            <input type="text" placeholder="Enter to do here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button class="btn btn-success">Add</button>
          </div>
        </div>
      </div>
     
      <div class="container ">
        <div class="row">
          <div class="col-4">{item}</div>
          <div class="col-4">{date}</div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToDo;