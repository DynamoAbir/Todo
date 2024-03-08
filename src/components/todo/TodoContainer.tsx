const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-red-500 w-full h-[500px] rounded-xl">
        <div>
          <input type="checkbox" name="" id="" />
          <p>Todo Title</p>
          <p>Time</p>
          <p>description</p>
          <div>
            <button>Delete</button>
            <button>edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
