import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobs from "./AppliedJobs";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";

const isResume = true;

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-2xl my-5 p-4 shadow-md">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className={"w-24 h-24"}>
              <AvatarImage
                src={
                  user?.Profile?.profilePicture ||
                  "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
                }
                alt="Profile Image"
              />
            </Avatar>
            <div>
              <h1>{user?.fullname || "N/A"}</h1>
              <p className="italic text-sm">
                {user?.Profile?.bio || "No bio added"}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(!open)}
            variant={"outline"}
            className={"text-right"}
          >
            <Pen />
          </Button>
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email || "N/A"}</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Contact />
            <span>{user?.phoneNumber || "N/A"}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex itmes-center gap-1">
            {user?.Profile?.skills && user.Profile.skills.length > 0 ? (
              user.Profile.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>No skills added</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label>Resume</Label>
          <Button
            onClick={() =>
              user?.Profile?.Resume &&
              window.open(user.Profile.Resume, "_blank")
            }
          >
            {user?.Profile?.ResumeOriginalName || "No resume uploaded"}
          </Button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-black italic font-bold mx-2 text-lg">
          All Applied Jobs
        </h1>
        <AppliedJobs />
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
