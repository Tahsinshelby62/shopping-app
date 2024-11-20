import { useContext } from "react";
import CartItems from "../Components/CartItems/CartItems";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { all_product, cartItems, remove } = useContext(ShopContext);
  return (
    <div>
      <CartItems />
    </div>
  );
};

export default Cart;
