function FilterForm() {
  return (
    <form className="w-full flex items-center justify-center bg-blue-1 p-5">
      <label htmlFor="name" className="w-2/3">
        <input type="text" id="name" name="name" placeholder="Filter by name..." className="w-full flex text-text-color justify-center border-2 outline-0 border-text-color rounded-lg px-4 py-2 bg-blue-1 placeholder:text-text-color" />
      </label>
    </form>
  );
}

export default FilterForm;