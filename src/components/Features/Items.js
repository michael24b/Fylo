const Items = (props) => {
  return (
    <div class="flex flex-col items-center space-y-2">
      <div class="flex items-center justify-center h-24 mb-6">
        <img src={props.img} alt="" />
      </div>
      <h3 class="text-xl font-bold">{props.title}</h3>
      <p class="max-w-md">{props.subtitle}</p>
    </div>
  );
};
export default Items;
