import ResponsiveImage from "@/components/ResponsiveImage/ResponsiveImage";
import profileImage from "@/public/images/profile.jpg";

export default function Business_plan() {
  return (
    <div className="border  rounded-lg p-10 space-y-6">
      <div>
        <div className=" ring-2 ring-primary_color ring-offset-8  dark:ring-offset-slate-700 rounded-full   w-32 shrink-0  overflow-hidden ">
          <ResponsiveImage
            src={profileImage}
            alt="profile image"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
