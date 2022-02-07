import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    items.length > 0 && (
      <>
        {items.map((p) => (
          <Item key={p.id} item={p} footerOption={true} />
        ))}
      </>
    )
  );
};

export default ItemList;
