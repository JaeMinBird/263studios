import CartItem from '@/components/CartItem';

export default function CartPage() {
  const itemsInCart = 3;

  // Sample cart items data
  const cartItems = [
    {
      name: "Box Logo Tee",
      price: 48.00,
      colors: ["Black", "White"],
      sizes: ["1", "2"]
    },
    {
      name: "Hooded Sweatshirt",
      price: 148.00,
      colors: ["Navy", "Gray"],
      sizes: ["1", "2"]
    },
    {
      name: "Beanie",
      price: 38.00,
      colors: ["Red", "Black"],
      sizes: ["1", "2"]
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-white cursor-[url('/custom-cursor.svg'),_auto]">
      <div className="w-[50%] min-h-[45vh] border border-black shadow-lg bg-white flex flex-col my-8 overflow-hidden">
        {/* Section 1: Cart Header */}
        <div className="p-4">
          <h1 className="text-xl font-bold mb-2 font-courier-prime text-black text-center">Cart</h1>
        </div>
        <div className="border-b border-black -mx-4"></div>

        {/* Section 2: Items Count */}
        <div className="p-4">
          <p className="text-black pl-1 mb-1 font-courier-prime text-sm lowercase">
            {itemsInCart} items in your cart
          </p>
        </div>
        <div className="border-b border-black -mx-4"></div>

        {/* Section 3: Items List with Subtotal */}
        <div className={`flex-1 ${itemsInCart > 3 ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>
          <div className="p-0">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                price={item.price}
                colors={item.colors}
                sizes={item.sizes}
                isFirst={index === 0}
                isLast={index === cartItems.length - 1}
              />
            ))}
          </div>
          
          {/* Subtotal Box */}
          {itemsInCart > 3 && (
            <div className="sticky bottom-0 right-0 bg-white p-2 border-t border-black">
              <p className="text-black font-courier-prime text-sm lowercase text-right">
                subtotal: $234.00
              </p>
            </div>
          )}
        </div>
        <div className="border-b border-black -mx-4"></div>

        {/* Section 4: Actions */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <p className="text-black text-sm font-courier-prime lowercase">
              shipping calculated at checkout
            </p>
            <div className="flex gap-4">
              <button className="px-4 py-1.5 border border-black text-black hover:bg-black hover:text-white transition-colors font-courier-prime text-sm lowercase">
                keep shopping
              </button>
              <button className="px-4 py-1.5 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors font-courier-prime text-sm lowercase">
                checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
