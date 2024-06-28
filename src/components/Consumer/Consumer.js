export default function Consumer() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold mb-1 text-center">
        Why <span className="text-[#05affe]">Aidroo</span> for your Business?
      </h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-14 px-8  text-center  h-fit justify-center">
          <div className="space-y-2">
            <span className="text-4xl font-bold">+473k </span>
            <p className="text-secondary-A100">Total Business Profile</p>
          </div>
          <div className="space-y-2">
            <span className="text-4xl font-bold">+37k </span>
            <p className="text-secondary-A100">Online profile</p>
          </div>{" "}
          <div className="space-y-2">
            <span className="text-4xl font-bold">+19m </span>
            <p className="text-secondary-A100">
              Reviews were written on Aidroo
            </p>
          </div>{" "}
          <div className="space-y-2">
            <span className="text-4xl font-bold">87% </span>
            <p className="text-secondary-A100">
              According to a survey, 87% of consumers trust Aidroo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
