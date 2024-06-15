// export default function Button({ className, props, children }) {
//   return (
//     <button className={`${className}   px-8 py-2 rounded-md`}>
//       {children}
//     </button>
//   );
// }
export default function Button({ className, children }) {
  return (
    <button
      className={`relative ${className} flex py-2.5  rounded-md items-center justify-center overflow-hidden   text-gray-700     transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-primary-A100 before:text-blue-600 hover:text-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56`}
    >
      <span className="relative z-20">{children}</span>
    </button>
  );
}
