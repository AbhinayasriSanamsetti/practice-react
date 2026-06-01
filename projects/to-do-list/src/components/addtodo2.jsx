function ToDo2() {
  let item="Goto college"
  let date="2023-10-10"

  return (
    <div>
      <div class="container ">
        <div class="row">
          <div class="col-4">
            {item}
          </div>
          <div class="col-4">
            {date}
          </div>
          <div class="col-2">
            <button class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ToDo2;