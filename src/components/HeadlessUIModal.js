"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState, useEffect } from "react";
import CartContext from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import OrderForm from "@/components/OrderForm";

const HeadlessUIModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const [view, setView] = useState("cart");

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleIncrement = (itemId) => {
    setQuantities((prev) => {
      const newQuantity = (prev[itemId] || 1) + 1;
      updateCartItemQuantity(itemId, newQuantity);
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleDecrement = (itemId) => {
    setQuantities((prev) => {
      const newQuantity = (prev[itemId] || 1) - 1;
      if (newQuantity > 0) {
        updateCartItemQuantity(itemId, newQuantity);
        return { ...prev, [itemId]: newQuantity };
      } else {
        removeFromCart(itemId);
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
    });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {view === "cart" ? "Savatdagi Mahsulotlar" : "Bog'lanish"}
                    </Dialog.Title>
                    <div className="mt-4">
                      {view === "cart" ? (
                        cartItems.length > 0 ? (
                          <ul className="space-y-4">
                            {cartItems.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-center justify-between space-x-4"
                              >
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  className="w-20 h-20 object-cover rounded"
                                />
                                <div className="flex-1">
                                  <h4 className="text-sm font-semibold">
                                    {item.title}
                                  </h4>
                                  <p className="text-sm font-medium text-gray-500">
                                    {item.price} so'm
                                  </p>
                                  <div className="flex items-center mt-2">
                                    <button
                                      onClick={() => handleDecrement(item.id)}
                                      className="bg-red-500 text-white px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                    >
                                      -
                                    </button>
                                    <span className="text-black mx-2">
                                      {quantities[item.id]}
                                    </span>
                                    <button
                                      onClick={() => handleIncrement(item.id)}
                                      className="bg-[#405D72] text-white px-4 rounded hover:bg-[#567A93] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <button
                                  className="text-[#405D72] hover:text-[#567A93]"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <FontAwesomeIcon
                                    className="text-xl"
                                    icon={faTrashCan}
                                  />
                                </button>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-700">Savat bo'sh.</p>
                        )
                      ) : (
                        <OrderForm cartItems={cartItems} />
                      )}
                    </div>
                    <div className="mt-5 sm:mt-6 flex justify-between">
                      <button
                        type="button"
                        className="inline-flex w-1/2 justify-center rounded-md border border-transparent bg-[#405D72] px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
                        onClick={onClose}
                      >
                        Yopish
                      </button>
                      <button
                        type="button"
                        className="ml-2 inline-flex w-1/2 justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-sm"
                        onClick={() =>
                          setView(view === "cart" ? "contact" : "cart")
                        }
                      >
                        {view === "cart" ? "Bog'lanish" : "Savat"}
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default HeadlessUIModal;

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       messages: require(`../../messages/${locale}.json`),
//     },
//   };
// }