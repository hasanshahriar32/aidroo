import Heading from "../Heading";

export default function Consumer() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Heading size="xl" className="  font-bold mb-1 text-center">
        Why <span className="text-[#05affe]">Aidroo</span> for your Business?
      </Heading>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-14 px-8  text-center  h-fit justify-center">
          <div>
            <span className=" text-2xl md:text-3xl font-bold">+473k </span>
            <Heading className="text-sm ">Total Business Profile</Heading>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-bold">+37k </span>
            <Heading className="text-sm ">Online profile</Heading>
          </div>{" "}
          <div>
            <span className="text-2xl md:text-3xl font-bold">+19m</span>
            <Heading className="text-sm ">
              Reviews were written on Aidroo
            </Heading>
          </div>{" "}
          <div>
            <span className="text-2xl md:text-3xl font-bold">87%</span>
            <Heading className=" text-sm">
              According to a survey, 87% of consumers trust Aidroo
            </Heading>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
