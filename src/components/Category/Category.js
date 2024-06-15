import Link from "next/link";

export default function Category() {
  const item = [1, 2, 3];
  return (
    <div className="bg-[#CCD9FF]">
      <div className=" max-w-[1360px] mx-auto sm:px-8 flex items-center flex-col  ">
        <h1 className="text-center text-3xl text-gray-700 font-semibold pt-12 ">
          Browse Categories
        </h1>
        <div className=" flex  gap-4">
          <div class="container  ">
            <Link class="card    shadow-md" href="#">
              <h3>This is option 1</h3>
              <p class="small">
                Card description with lots of great facts and interesting
                details.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}
