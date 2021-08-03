import User from "./User";
const Userlist = ({ list, callback_delete }) => {
  return (
    <div>
      {list.map((t) => {
        return <User key={t.id} {...t} callback={callback_delete} />;
      })}
    </div>
  );
};

export default Userlist;
